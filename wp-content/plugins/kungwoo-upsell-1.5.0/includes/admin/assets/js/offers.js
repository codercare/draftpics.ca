! function(t) {
    "use strict";
    t(function() {
        function o(t, o, e) {
            var n = [],
                i = null;
            for (var a in t) i = {
                id: t[a].id,
                text: t[a].title
            }, n.push(i);
            return {
                results: n
            }
        }

        function e(o) {
            var e = o.closest(".wooup-condition-wrapper");
            o.prop("checked") ? t("fieldset", e).slideDown() : t("fieldset", e).slideUp()
        }
        t(".wooup-datepicker").datepicker({
            dateFormat: "dd-mm-yy"
        }), tinymce.init({
            selector: ".wooup-advanced-editor",
            height: 200,
            inline: !1,
            plugins: "directionality link textcolor code",
            toolbar: "undo redo | styleselect fontsizeselect | bold italic | link | forecolor backcolor | ltr rtl | code",
            menubar: !1,
            relative_urls: !1,
            remove_script_host: !1,
            convert_urls: !0,
            forced_root_block: "",
            fontsize_formats: "6pt 8pt 10pt 12pt 14pt 18pt 24pt 36pt"
        }), t(".wooup-select-product").select2({
            placeholder: WooUpSettings.e.search_for_product,
            multiple: !0,
            minimumInputLength: 3,
            ajax: {
                url: WooUpSettings.ajax.url,
                type: "post",
                dataType: "json",
                data: function(t, o) {
                    return {
                        q: t,
                        action: "wooup_admin_search_products",
                        nonce: WooUpSettings.ajax.nonce
                    }
                },
                results: o
            },
            initSelection: function(e, n) {
                var i = t(e).val();
                "" !== i && t.ajax(WooUpSettings.ajax.url, {
                    data: {
                        action: "wooup_admin_get_product_titles",
                        post_ids: i,
                        nonce: WooUpSettings.ajax.nonce
                    },
                    dataType: "json",
                    type: "post"
                }).done(function(t) {
                    var e = o(t);
                    n(e.results)
                })
            }
        }), t(".wooup-select-category").select2({
            placeholder: WooUpSettings.e.search_for_category,
            multiple: !0,
            minimumInputLength: 3,
            ajax: {
                url: WooUpSettings.ajax.url,
                type: "post",
                dataType: "json",
                data: function(t, o) {
                    return {
                        q: t,
                        action: "wooup_admin_search_categories",
                        nonce: WooUpSettings.ajax.nonce
                    }
                },
                results: o
            },
            initSelection: function(e, n) {
                var i = t(e).val();
                "" !== i && t.ajax(WooUpSettings.ajax.url, {
                    data: {
                        action: "wooup_admin_search_categories",
                        post_ids: i,
                        nonce: WooUpSettings.ajax.nonce
                    },
                    dataType: "json",
                    type: "post"
                }).done(function(t) {
                    var e = o(t);
                    n(e.results)
                })
            }
        }), t(".wooup-select-product-advanced").select2({
            placeholder: WooUpSettings.e.search_for_product_advanced,
            multiple: !0,
            maximumSelectionSize: 4,
            minimumInputLength: 3,
            ajax: {
                url: WooUpSettings.ajax.url,
                type: "post",
                dataType: "json",
                data: function(t, o) {
                    return {
                        q: t,
                        action: "wooup_admin_search_products",
                        nonce: WooUpSettings.ajax.nonce
                    }
                },
                results: o
            },
            initSelection: function(e, n) {
                var i = t(e).val();
                "" !== i && t.ajax(WooUpSettings.ajax.url, {
                    data: {
                        action: "wooup_admin_get_product_titles",
                        post_ids: i,
                        nonce: WooUpSettings.ajax.nonce
                    },
                    dataType: "json",
                    type: "post"
                }).done(function(t) {
                    var e = o(t);
                    n(e.results)
                })
            }
        }), t(".wooup-select-product-advanced").select2("container").find("ul.select2-choices").sortable({
            items: ">li:not(.select2-search-field)",
            axis: "x",
            start: function() {
                t(this).closest(".wooup-select-product-advanced").select2("onSortStart")
            },
            update: function() {
                t(this).closest(".wooup-select-product-advanced").select2("onSortEnd")
            }
        }), t(".wooup-condition-wrapper .wooup-condition-status").each(function() {
            e(t(this))
        }), t(".wooup-condition-wrapper .wooup-condition-status").on("change", function(o) {
            e(t(this))
        })
    })
}(jQuery);