!function(t){"use strict";t.fn.select2.locales.rs={formatNoMatches:function(){return"Ništa nije pronađeno"},formatInputTooShort:function(t,e){var n=e-t.length;return"Ukucajte bar još "+n+" simbol"+(n%10==1&&n%100!=11?"":"a")},formatInputTooLong:function(t,e){var n=t.length-e;return"Obrišite "+n+" simbol"+(n%10==1&&n%100!=11?"":"a")},formatSelectionTooBig:function(t){return"Možete izabrati samo "+t+" stavk"+(t%10==1&&t%100!=11?"u":t%10>=2&&t%10<=4&&(t%100<12||t%100>14)?"e":"i")},formatLoadMore:function(t){return"Preuzimanje još rezultata…"},formatSearching:function(){return"Pretraga…"}},t.extend(t.fn.select2.defaults,t.fn.select2.locales.rs)}(jQuery);