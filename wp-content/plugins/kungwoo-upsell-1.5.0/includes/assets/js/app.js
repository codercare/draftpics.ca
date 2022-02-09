!(function (t) {
    "use strict";
    t(function () {
        function o(t, o) {
            for (var r = [], i = 0; i < t.length; i++) {
                var n = t[i];
                n.variation_id;
                a(n.attributes, o) && r.push(n);
            }
            return r;
        }
        function a(t, o) {
            var a = !0;
            for (var i in t) {
                var n = "",
                    e = "";
                r > 1 ? ((n = String(t[i]).toLowerCase()), (e = String(o[i]).toLowerCase())) : ((n = t[i]), (e = o[i]), r++), void 0 !== n && void 0 !== e && 0 != n.length && 0 != e.length && n != e && (a = !1);
            }
            return a;
        }
        if (t("#wooup-offer-wrapper").length > 0) {
            t(".wooup-product-qty").on("change", function (o) {
                var a = t(this).closest(".wooup-product-col"),
                    r = t(this).val();
                t(".wooup-add-to-cart-btn", a).data("quantity", r);
            }),
                t(".wooup-product-attribute").on("change", function (a) {
                    var r = t(this).closest(".wooup-product-col"),
                        i = !0,
                        n = {},
                        variationVal = t(this).val(),
                        variationName = t(this).attr('name').toLowerCase(),
                        e = t(".wooup-product-variations", r).data("product_variations") || [];

                    e[0] ? e[0].attributes[variationName] = variationVal : null;

                    if (
                        (t(".wooup-add-to-cart-btn", r).data("variation_id", ""),
                            t(".wooup-add-to-cart-btn", r).data("variation_data", ""),
                            t(".wooup-add-to-cart-btn", r).prop("disabled", !0),
                            t(".wooup-product-price-variation", r).html("").hide(),
                            t(".wooup-product-price-original", r).show(),
                            t(".wooup-product-msg", r).html("").hide(),
                            t(".wooup-product-attribute", r).each(function () {
                                if (0 === t(this).val().length) i = !1;
                                else {
                                    var o = t(this).val().replace(/&/g, "&").replace(/"/g, '"').replace(/'/g, "'").replace(/</g, "<").replace(/>/g, ">");
                                    n[t(this).attr("name")] = o;
                                }
                            }),
                            i)
                    ) {
                        e[0]
                            ? (t(".wooup-add-to-cart-btn", r).data("variation_id", e[0].variation_id),
                                t(".wooup-add-to-cart-btn", r).data("variation_data", JSON.stringify(e[0].attributes)),
                                t(".wooup-add-to-cart-btn", r).prop("disabled", !1),
                                t(".wooup-product-price-original", r).hide(),
                                t(".wooup-product-price-variation", r).html(e[0].price_html).show())
                            : t(".wooup-product-msg", r).html(WooUpSettings.e.not_available).show();
                    }
                }),
                t(".wooup-add-to-cart-btn").on("click", function (o) {
                    o.preventDefault();
                    var a = this,
                        r = parseInt(t(a).closest("#wooup-offer-wrapper").data("offer-id")),
                        i = parseInt(t(a).data("product_id")),
                        n = parseInt(t(a).data("variation_id")) || "",
                        e = JSON.parse(t(a).data("variation_data") || "{}"),
                        p = parseInt(t(a).data("quantity"));

                    return (
                        t(a).html(WooUpSettings.e.adding),
                        t.ajax({
                            data: { action: "wooup_add_to_cart", nonce: WooUpSettings.ajax.nonce, offer_id: r, product_id: i, variation_id: n, variation_data: e, quantity: p },
                            type: "post",
                            dataType: "json",
                            url: WooUpSettings.ajax.url,
                            success: function (o) {
                                t(a).html(WooUpSettings.e.added);
                            },
                        }),
                        !1
                    );
                }),
                t(".checkout-button").wooupModal({
                    items: { src: "#wooup-offer-wrapper", type: "inline" },
                    callbacks: {
                        open: function () {
                            var o = t(this.content).data("offer-id");
                            t.ajax({ data: { action: "wooup_add_offer_view", nonce: WooUpSettings.ajax.nonce, offer_id: o }, type: "post", dataType: "json", url: WooUpSettings.ajax.url });
                        },
                    },
                }),
                t(".checkout-button").on("click", function (o) {
                    return o.preventDefault(), t(this).off("click"), t(this).removeData("wooupModal"), !1;
                }),
                t(".wooup_reset_variations").on("click", function (o) {
                    var a = t(this).closest(".wooup-product-col");
                    t(".wooup-product-attribute", a).val(""),
                        t(".wooup-add-to-cart-btn", a).data("variation_id", ""),
                        t(".wooup-add-to-cart-btn", a).data("variation_data", ""),
                        t(".wooup-add-to-cart-btn", a).prop("disabled", !0),
                        t(".wooup-product-price-variation", a).html("").hide(),
                        t(".wooup-product-price-original", a).show(),
                        t(".wooup-product-msg", a).html("").hide();
                });
            var r = 0;
        }
    });
})(jQuery);
