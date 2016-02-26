	/**
	 * [loadCache 省市县三级导航]
	 * @author zhangxinyu@netposa.com
	 * @date 2015/11/10
	 */
	var loadCache = new Hash(),
		dataCache = new Hash(),
		eventListener = new Events();
	var CommonCascade = new Class({

		Implements: [Options],

		options: {
			firstSelect: "",
			secondSelect: "",
			thirdSelect: "",
			firstSelectTips: '--请选择--',
			secondSelectTips: '--请选择--',
			thirdSelectTips: '--请选择--',
			path: '/address.json',
			callback: jQuery.noop()
		},

		initialize: function(options) {
			this.setOptions(options);
			var firstSelect = jQuery(this.options.firstSelect);
			if (firstSelect.size() === 0) {
				return;
			}
			this.loadData();
		},

		loadData: function() {
			var self = this,
				path = this.options.path;

			// 先绑定事件
			eventListener.addEvent('loaded', function() {
				var data = dataCache.get(self.options.path);
				self.createOptions(data, jQuery(self.options.firstSelect), '1');
				self.bindEvent(data);
			});

			// 如果缓存有数据 直接执行
			if (dataCache.has(path)) {
				return eventListener.fireEvent('loaded');
			}

			// 如果当前没有在请求的路径中
			if (!loadCache.has(path)) {
				jQuery.ajax({
					url: this.options.path,
					cache: true,
					dataType: 'json',
					beforeSend: function() {
						loadCache.set(path, true);
					},
					success: function(data) {
						data = data.data || data;
						dataCache.set(path, data);
						eventListener.fireEvent('loaded');
						if (self.options.callback) {
							self.options.callback();
						}
					},
					complete: function() {
						loadCache.erase(path);
					}
				});
			}
		},

		getFragment: function(element) {
			if (element.is(this.options.firstSelect)) {
				return '<option value="">' + this.options.firstSelectTips + '</option>';
			} else if (element.is(this.options.secondSelect)) {
				return '<option value="">' + this.options.secondSelectTips + '</option>';
			} else if (element.is(this.options.thirdSelect)) {
				return '<option value="">' + this.options.thirdSelectTips + '</option>';
			}
			return '';
		},

		createOptions: function(obj, element, key) {
			var fragment = this.getFragment(element);
			var selected = element.attr("data-default") + '';
			Object.forEach(obj, function(data, code) {
				if (data[1] === key) {
					fragment += '<option value="' + code + '" ' + (selected === code ? 'selected' : '') + '>' + data[0] + '</option>';
				}
			});

			element.html(fragment);

			// 直辖市自动选择
			if (element.children().length === 2) {
				element.children().eq(1).attr('selected', true);
			}

			// 如果没有下级数据隐藏下级菜单
			element.toggle(key === '' || element.children().length > 1);
		},

		bindEvent: function(obj) {
			var self = this,
				firstSelect = jQuery(self.options.firstSelect),
				secondSelect = jQuery(self.options.secondSelect),
				thirdSelect = jQuery(self.options.thirdSelect);

			firstSelect.change(function() {
				var val = firstSelect.find("option:selected").val();
				self.createOptions(obj, secondSelect, val);
				secondSelect.triggerHandler('change');
			});

			secondSelect.change(function() {
				var val = secondSelect.find("option:selected").val();
				self.createOptions(obj, thirdSelect, val);
			});

			firstSelect.triggerHandler('change');
		}
	});

	// return CommonCascade;