function FindProxyForURL(a, o) {
    var f = "PROXY 0.0.0.0:9898";
    var e = "PROXY 180.97.33.108:80";
    var c = "PROXY 218.93.248.231:10087; DIRECT";
    var b = "PROXY 8.8.8.8:53";
    var iso = "PROXY 183.60.111.164:44440";
    var n = ["ad.api.3g.youku.com", "valf.atm.youku.com", "valp.atm.youku.com", "valf.atm.youku.com", "mf.atm.youku.com", "ad.api.3g.tudou.com", "m.aty.sohu.com", "agn.aty.sohu.com", "ark.letv.com", "n.mark.letv.com", "de.as.pptv.com", "xs.houyi.baofeng.net", "pubads.g.doubleclick.net", "bs.da.hunantv.com", "miaozhen.com", "log.da.hunantv.com", "log.v2.hunantv.com", "v2.log.hunantv.com", "x.da.hunantv.com", "sax.sina.cn", "sax.sina.com.cn", "mobi.adsage.com", "service.cocounion.com", "vfs.admaster.com.cn", "vqq.admaster.com.cn", "cm.ipinyou.com", "lianmeng.admin5.com", "union.admin5.com", "lm.admin5.com", "s.csbew.com", "ad.vsnoon.com", "googleads.g.doubleclick.net", "de.soquair.com", "api.mix.guohead.com"];
    var m = [".fastapi.net", ".inmobi.com", ".adsmogo.com", ".adsmogo.org", ".adsmogo.mobi", ".adsmogo.net", ".adlive.cn", ".sstc360.com", ".ad-brix.com", ".leadboltads.net", ".joyingmobi.com"];
    var k = ["*pg.dmclock.com:8011/ec54.html*", "*pg.dmclock.com/ec54.html*", "http://x.jd.com/exsites?spread_type=*", "http://ope.tanx.com/wap?i=*", "http://mjs.sinaimg.cn/wap/cms/ad/*.js", "*sdkapp.mobile.sina.cn/interface/sdk/sdkad.php", "http://lives.l.qq.com/*&live=*", "*/advert-sdk/*", "*/?op=adv&*", "*?adslot=*", "*&product=adpublish&*", "*/ad/getAd.*", "*/AdvertList.xml", "*/getads?*", "*/getadsmetadata?*", "*/ashx/Ad/*", "*/MobileAdServer/*", "*.adsense.*.js", "*/advertise/*", "*/adsense/*", "*/baidustatic/cpro/ui/cm.js*", "*/advertclient/*", "*/api/advertising/*", "*/resource/advert/*", "*/advertisements?*", "*/ad?service=getad&*", "*/advert/list?*", "*/json/ad/*", "*/adv/list/*", "*/mobileads/adsconf?*", "*/ad_list.php?*", "*.com/advert/*", "*/api/advert/*", "*.com/ad-bucket/*", "*/get_ads.json?*", "*/pushad/html/*", "*/api/getNewAdInfo?*", "*.com/i.js", "*/ad_footer.js*", "*.com/ad.js", "*/stickyad.js", "*/js/ad.*.js", "*/js/ads_*.js", "*.popunder.js", "*/popunder/*.js", "*.js?advertid=*", "*/ad_show.js", "*/cache/ad_js/*.js", "http://guanggao.*.js", "*/advert/*.js", "*/advert.js", "*/adv3.js", "*/adv2.js", "*/adv1.js", "*/ads1.js", "*/ads2.js", "*/ads3.js", "*/ads4.js", "*/ads_images/*.js", "*_advert.js", "*.com/ads.js", "*.com/advt/*.js", "*/google_ads.js", "*/doubleclick.js", "*/js/tc.js", "*/showad.js", "*/guanggao.js", "*.net/ad/*.js", "*.com/ad/*.js", "*/floatad.js", "*/duilian.js", "*/adfile/*.js", "*/adbox.asp*", "*/adshow.asp*", "*/js/ads.*", "*/ad/files/*", "*.cn/adv/ad/*", "*/advertising/*&id=*", "*/adShow.*?id=*", "http://adtag.*", "*/html/ad/*", "*/www/delivery/*", "*.com/ads_*", "*/main/s?*&local=yes", "*.com/adsys/*", "http://adv2.*", "*/ad/index/*", "*.php?ad_pos=*", "*/advertpro/servlet/*", "http://us-ads.*", "*.cn/js/ads/*", "*/json/advertise_list.*", "*/getAdList.*", "*/getad?*", "*service/advertising/*", "*cc/js/ads/*", "*.com/js/ads/*", "http://gg.*.js", "*/page/s.php?s=*&w=*&h=*", "*/public/ads/*", "*.com/ads/adm.*", "http://ad.*.js", "*/static/adsview/*.js", "*/plus/ad_*.js", "*/d/js/acmsd/*", "http://adserver.*", "*/ad1.js", "*/ad2.js", "*/ad3.js", "*/adscpv/i.*", "*/ad/AdSale/*", "*/ad/Adv/*", "*_advertise_list.*", "*_advertise_native_*", "*_advertise_cpc_*", "http://ads.*.js", "*/getAds.php?*", "http://i.ifeng.com/showjs?apids=*", "http://cdn.tanx.com/t/m/m.js", "*/wapAdversApi?*", "*bid.adview.cn/agent/getAd*", "*mi.gdt.qq.com/gdt_mview.fcg*", "*googleads.g.doubleclick.net:80/mads/gma*", "*mobads.baidu.com/cpro/ui*", "*api2.adsmogo.mobi/ad*", "*api2.adsmogo.net/ad*", "*r3.adwo.com/adweb*", "*pub.funshion.com/interface/deliver*", "*livew.l.qq.com/livemsg*", "*lives.l.qq.com/livemsg*", "*api.mobile.dianru.com/ads*", "*service.cocounion.com/core/ssp/bid/chance*", "*api2.adsmogo.com/ad*", "*api2.adsmogo.org/ad*", "*googleads.g.doubleclick.net*", "*baichuan.baidu.com/rs/adpmobile/launch*", "*i.w.inmobi.com/showad.asm*", "*api.24kidea.com/hqzs/getnewadsystemappad*", "*mads/gma*", "*news.l.qq.com/app*", "*g1.163.com/madr*", "*sdkapp.mobile.sina.cn/interface/sdk/sdkad.php", "*ubmcmm.baidustatic.com/media*", "*static.pay.baidu.com/tequan/adpadmin_feed/image*", "*tb1.bdstatic.com/tb/*", "*sm.domobcdn.com/ugc/*", "*pgdt.gtimg.cn/gdt*", "*ad.api.3g.tudou.com/adv.*", "*.domob.cn/a", "*ic.snssdk.com/service/13/app_ad*", "*lf.snssdk.com/2/article/information*", "*iface.iqiyi.com/api/get2UserInfo*", "*passport.iqiyi.com/apis/user/info.action*", "*passport.qiyi.com/apis/user/info.action*", "*staticimg.yidianzixun.com/s/ad*", "*a1.go2yd.com/Website/contents/recommend-ads*", "*pagead2.googlesyndication.com/pagead*", "*ads.service.kugou.com/v1/mobile*", "*mvads.kugou.com/mobile*"];
    var j = ["api.mobile.dianru.com"];
    var h = ["http://iface.iqiyi.com/api/initLogin*", "http://i.play.api.3g.youku.com/common/v3/hasadv/play*", "*cache.m.iqiyi.com/dc/amdt*", "*.cupid.iqiyi.com/show2*", "*www.xwctw.com:8888/lxmService/lxmPosition*", "*mobads.baidu.com/ads*", "*api.weibo.cn/2/cardlist*", "*api.mobile.youku.com/layout/iphone*", "*cdn.moogos.com/js/_jssdk.js*"];
    for (var g = 0,
    d = n.length; g < d; g++) {
        if (shExpMatch(o, n[g])) {
            return e
        }
    }
    for (var g = 0,
    d = m.length; g < d; g++) {
        if (dnsDomainIs(o, m[g])) {
            return e
        }
    }
    for (var g = 0,
    d = k.length; g < d; g++) {
        if (shExpMatch(a, k[g])) {
            return e
        }
    }
    for (var g = 0,
    d = j.length; g < d; g++) {
        if (shExpMatch(o, j[g])) {
            return c
        }
    }
    for (var g = 0,
    d = h.length; g < d; g++) {
        if (shExpMatch(a, h[g])) {
            return c
        }
    }
    if (dnsDomainIs(o, ".sandai.net") && o != "iwww.sandai.net") {
        return e
    } else {
        o = o.toLowerCase();
        if (dnsDomainIs(o, 'youtube1.com') || dnsDomainIs(o, 'www.przef.cn') || dnsDomainIs(o, 'ytimg1.com') || dnsDomainIs(o, 'twitter1.com') || dnsDomainIs(o, 'facebook1.com') || dnsDomainIs(o, 'weixinvip.ren') || dnsDomainIs(o, 'app.91ylian.com') || dnsDomainIs(o, 'fbcddn1.net') || dnsDomainIs(o, '123.57.234.230') || dnsDomainIs(o, 'i.dnebank.com') || dnsDomainIs(o, 'dmm.cff') || dnsDomainIs(o, 'post.hoslei.com') || dnsDomainIs(o, 'vidozf.52cjg.cn')) {
            return iso
        }
		if(dnsDomainIs(o, 'ipa-apk.cn')){
			return iso
		}
		
    }
    return "DIRECT"
};