import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { IconContext } from 'react-icons'

const { ANALYTICS_WRITE_KEY } = process.env

export default class MyDocument extends Document {
  renderSegmentSnippet() {
    return `"use strict";
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator = (this && this.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (g && (g = 0, op[0] && (_ = 0)), _) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
    var segmentCookieBotAnalyticsWrapper = function () { return __awaiter(void 0, void 0, void 0, function () {
        var segmentKey, destinationCategoryMapping, segmentWrapper, getCookie, convertToSafeJSON, fetchDestinations;
        return __generator(this, function (_a) {
            segmentKey = "${ANALYTICS_WRITE_KEY}";
            destinationCategoryMapping = {
                CRM: "preferences",
                "Customer Success": "preferences",
                "Feature Flagging": "preferences",
                "A/B Testing": "statistics",
                Analytics: "statistics",
                Attribution: "statistics",
                "Heatmaps & Recordings": "statistics",
                "Performance Monitoring": "statistics",
                "Tag Managers": "statistics",
                Advertising: "marketing",
                "Deep Linking": "marketing",
                Email: "marketing",
                "Email Marketing": "marketing",
                Livechat: "marketing",
                "Marketing Automation": "marketing",
                Personalization: "marketing",
                "Raw Data": "marketing",
                Referrals: "marketing",
                "Security & Fraud": "marketing",
                "SMS & Push Notifications": "marketing",
                Surveys: "marketing",
                Video: "marketing",
            };
            segmentWrapper = function () { return __awaiter(void 0, void 0, void 0, function () {
                var segmentConsent, defaultConsent, mainSegmentScript, destinations, cookieConsent, consent, destinationPreferences, _i, destinations_1, destination, destinationCategory, consentCategory, plugin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            segmentConsent = true;
                            defaultConsent = false;
                            mainSegmentScript = "!function(){var i=\"analytics\",analytics=window[i]=window[i]||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error(\"Segment snippet included twice.\");else{analytics.invoked=!0;analytics.methods=[\"trackSubmit\",\"trackClick\",\"trackLink\",\"trackForm\",\"pageview\",\"identify\",\"reset\",\"group\",\"track\",\"ready\",\"alias\",\"debug\",\"page\",\"screen\",\"once\",\"off\",\"on\",\"addSourceMiddleware\",\"addIntegrationMiddleware\",\"setAnonymousId\",\"addDestinationMiddleware\",\"register\"];analytics.factory=function(e){return function(){if(window[i].initialized)return window[i][e].apply(window[i],arguments);var n=Array.prototype.slice.call(arguments);if([\"track\",\"screen\",\"alias\",\"group\",\"page\",\"identify\"].indexOf(e)>-1){var c=document.querySelector(\"link[rel='canonical']\");n.push({__t:\"bpc\",c:c&&c.getAttribute(\"href\")||void 0,p:location.pathname,u:location.href,s:location.search,t:document.title,r:document.referrer})}n.unshift(e);analytics.push(n);return analytics}};for(var n=0;n<analytics.methods.length;n++){var key=analytics.methods[n];analytics[key]=analytics.factory(key)}analytics.load=function(key,n){var t=document.createElement(\"script\");t.type=\"text/javascript\";t.async=!0;t.setAttribute(\"data-global-segment-analytics-key\",i);t.src=\"https://cdn.segment.com/analytics.js/v1/\" + key + \"/analytics.min.js\";var r=document.getElementsByTagName(\"script\")[0];r.parentNode.insertBefore(t,r);analytics._loadOptions=n};analytics._writeKey=\"".concat(segmentKey, "\";;analytics.SNIPPET_VERSION=\"5.2.0\";\n          analytics.load(\"").concat(segmentKey, "\");\n          }}();");
                            return [4 /*yield*/, fetchDestinations()];
                        case 1:
                            destinations = _a.sent();
                            cookieConsent = getCookie("CookieConsent");
                            if (null === cookieConsent) {
                                window.analytics.page();
                                return [2 /*return*/];
                            }
                            consent = JSON.parse(convertToSafeJSON(cookieConsent));
                            if (!consent) {
                                window.analytics.page();
                                return [2 /*return*/];
                            }
                            destinationPreferences = {
                                "Segment.io": segmentConsent,
                            };
                            for (_i = 0, destinations_1 = destinations; _i < destinations_1.length; _i++) {
                                destination = destinations_1[_i];
                                destinationCategory = destination.category;
                                if (typeof destinationCategory !== "string") {
                                    destinationPreferences[destination.name] = defaultConsent;
                                    continue;
                                }
                                if (!destinationCategoryMapping[destinationCategory]) {
                                    destinationPreferences[destination.name] = defaultConsent;
                                    continue;
                                }
                                consentCategory = destinationCategoryMapping[destinationCategory];
                                destinationPreferences[destination.name] = consent[consentCategory];
                            }
                            plugin = {
                                name: "Cookiebot Consent",
                                type: "enrichment",
                                version: "1.0.0",
                                isLoaded: function () { return true; },
                                load: function () { return Promise.resolve(); },
                                page: function (ctx) {
                                    ctx.updateEvent((ctx.event.integrations = destinationPreferences));
                                },
                                track: function (ctx) {
                                    ctx.updateEvent((ctx.event.integrations = destinationPreferences));
                                },
                                identify: function (ctx) {
                                    ctx.updateEvent((ctx.event.integrations = destinationPreferences));
                                },
                            };
                            /**
                             * Add source middleware
                             */
                            eval(mainSegmentScript);
                            window.analytics.register(plugin);
                            window.analytics.page();
                            return [2 /*return*/];
                    }
                });
            }); };
            getCookie = function (key) {
                var name = key + "=";
                var decodedCookie = decodeURIComponent(document.cookie);
                var ca = decodedCookie.split(";");
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) === " ") {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) === 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return null;
            };
            convertToSafeJSON = function (cookie) {
                return cookie.replace(/'/g, '"').replace(/(\w+):/g, '"$1":');
            };
            fetchDestinations = function () { return __awaiter(void 0, void 0, void 0, function () {
                var response, data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, fetch("https://cdn.segment.io/v1/projects/".concat(segmentKey, "/integrations"))];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2:
                            data = _a.sent();
                            return [2 /*return*/, data.map(function (destination) { return ({
                                    name: destination.name,
                                    category: destination.category,
                                }); })];
                    }
                });
            }); };
            segmentWrapper();
            return [2 /*return*/];
        });
    }); };
    segmentCookieBotAnalyticsWrapper();    
    `
  }

  render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang='en'>
          <Head>
            <script
              dangerouslySetInnerHTML={{ __html: this.renderSegmentSnippet() }}
            ></script>
            <link rel='shortcut icon' href='/favicon.png' />

            <link
              rel='apple-touch-icon'
              sizes='180x180'
              href='/apple-touch-icon.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='96x96'
              href='/favicon-96x96.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='32x32'
              href='/favicon-32x32.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='16x16'
              href='/favicon-16x16.png'
            />

            <link rel='manifest' href='/manifest.json' />
          </Head>

          <body>
            <script src='noflash.js' />

            <Main />

            <NextScript />
          </body>
        </Html>
      </IconContext.Provider>
    )
  }
}
