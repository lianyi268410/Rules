/*
 * @repo: https://github.com/Choler/Surge/blob/master/WeChat.js
 * @script: https://raw.githubusercontent.com/JO2EY/Rules/master/Surge/Script/WeChat.js
 * @regular: https?://mp\.weixin\.qq\.com/
 * @hostname: mp.weixin.qq.com
 */

let result = body;

// Subscriptions articles
let subscriptionsArticles = '/mp/getappmsgad?f=';

if (url.indexOf(subscriptionsArticles) != -1) {
    var jsbody = JSON.parse(body);
    jsbody.advertisement_info = [];
    result = JSON.stringify(jsbody);
}

result;