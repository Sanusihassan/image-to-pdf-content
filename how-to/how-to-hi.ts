import { _howToSchemas } from "./how-to";


/**
 * now please help me to do the hindi version
 * this object has a list of objects, but each should have a question mark to indicate the question
 * this is in hindi, i want to add the question mark only for the name properties of each object but not the ones that are in the steps arrays
 * for example: name: "JPG छवियों को PDF में कैसे बदलें", should have a question mark to indicate that it's a question, note that the content is in hindi keep in mind that i have a _howToSchemas type which checks the property names meaning that it must be accurate,
 * just add the question mark and don't change the content or anything else.
 */

export const howToSchemas: _howToSchemas = {
    JPGToPDFHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        name: "JPG छवियों को PDF में कैसे बदलें ?",
        description:
            "कई JPG छवियों को एक ही PDF दस्तावेज़ में बदलने के लिए कदम-से-कदम मार्गदर्शिका।",
        step: [
            {
                "@type": "HowToStep",
                name: "कदम 1",
                text: "PDFEquips पर JPG से PDF उपकरण खोलें।",
            },
            {
                "@type": "HowToStep",
                name: "कदम 2",
                text: "JPG छवियों को खींचें और छोड़ें या अपनी छवियों का चयन करने के लिए 'चयन करें फ़ाइलें JPG' बटन पर क्लिक करें।",
            },
            {
                "@type": "HowToStep",
                name: "कदम 3",
                text: "छवियों को अपने पसंदीदा क्रम में खींचकर फिर से व्यवस्थित करें।",
            },
            {
                "@type": "HowToStep",
                name: "कदम 4",
                text: "यदि आवश्यक हो तो ओरिएंटेशन, पेज साइज़ और मार्जिन जैसी सेटिंग्स को कॉन्फ़िगर करें।",
            },
            {
                "@type": "HowToStep",
                name: "कदम 5",
                text: "'कनवर्ट' बटन पर क्लिक करें जिससे JPG से PDF का प्रक्रिया शुरू हो।",
            },
            {
                "@type": "HowToStep",
                name: "कदम 6",
                text: "रूपांतरण प्रक्रिया के समाप्त होने का इंतजार करें।",
            },
            {
                "@type": "HowToStep",
                name: "कदम 7",
                text: "रूपांतरित PDF दस्तावेज़ को डाउनलोड करें।",
            },
        ],
    },
    PNGToPDFHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        "name": "PNG छवियों को PDF में कैसे कन्वर्ट करें ?",
        "description": "एकल पीडीएफ दस्तावेज़ में कई PNG छवियों को कन्वर्ट करने के लिए चरणबद्ध गाइड।",
        "step": [
            {
                "@type": "HowToStep",
                "name": "चरण 1",
                "text": "PDFEquips पर पीएनजी से पीडीएफ कनवर्टर उपकरण खोलें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 2",
                "text": "पीएनजी छवियों को खींचें और छोड़ें या अपनी छवियों को चुनने के लिए 'पीएनजी फ़ाइल का चयन करें' बटन पर क्लिक करें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 3",
                "text": "छवियों को अपनी पसंदीदा क्रम में खींचें और छोड़ें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 4",
                "text": "आवश्यक होने पर ओरिएंटेशन, पृष्ठ आकार, और मार्जिन जैसी सेटिंग्स को कॉन्फ़िगर करें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 5",
                "text": "पीएनजी से पीडीएफ कन्वर्ट करने की प्रक्रिया शुरू करने के लिए 'कनवर्ट' बटन पर क्लिक करें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 6",
                "text": "कन्वर्ट होने की प्रक्रिया का इंतजार करें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 7",
                "text": "कन्वर्ट किए गए पीडीएफ दस्तावेज़ को डाउनलोड करें।"
            }
        ]
    },
    GIFToPDFHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        "name": "GIF छवियों को PDF में कैसे कन्वर्ट करें ?",
        "description": "एकल पीडीएफ दस्तावेज़ में कई GIF छवियों को कन्वर्ट करने के लिए चरणबद्ध गाइड।",
        "step": [
            {
                "@type": "HowToStep",
                "name": "चरण 1",
                "text": "PDFEquips पर जीआईएफ़ से पीडीएफ कनवर्टर उपकरण खोलें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 2",
                "text": "जीआईएफ़ छवियों को खींचें और छोड़ें या अपनी छवियों को चुनने के लिए 'जीआईएफ़ फ़ाइलें का चयन करें' बटन पर क्लिक करें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 3",
                "text": "छवियों को अपनी पसंदीदा क्रम में खींचें और छोड़ें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 4",
                "text": "आवश्यक होने पर ओरिएंटेशन, पृष्ठ आकार, और मार्जिन जैसी सेटिंग्स को कॉन्फ़िगर करें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 5",
                "text": "जीआईएफ़ से पीडीएफ कन्वर्ट करने की प्रक्रिया शुरू करने के लिए 'कनवर्ट' बटन पर क्लिक करें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 6",
                "text": "कन्वर्ट होने की प्रक्रिया का इंतजार करें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 7",
                "text": "कन्वर्ट किए गए पीडीएफ दस्तावेज़ को डाउनलोड करें।"
            }
        ]
    },
    TIFFToPDFHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        "name": "TIFF छवियों को PDF में कैसे कन्वर्ट करें ?",
        "description": "एकल पीडीएफ दस्तावेज़ में कई TIFF छवियों को कन्वर्ट करने के लिए चरणबद्ध गाइड।",
        "step": [
            {
                "@type": "HowToStep",
                "name": "चरण 1",
                "text": "PDFEquips पर टिफ़ से पीडीएफ़ कनवर्टर उपकरण खोलें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 2",
                "text": "टिफ़ छवियों को खींचें और छोड़ें या अपनी छवियों को चुनने के लिए 'टिफ़ फ़ाइलें का चयन करें' बटन पर क्लिक करें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 3",
                "text": "छवियों को अपनी पसंदीदा क्रम में खींचें और छोड़ें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 4",
                "text": "आवश्यक होने पर ओरिएंटेशन, पृष्ठ आकार, और मार्जिन जैसी सेटिंग्स को कॉन्फ़िगर करें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 5",
                "text": "टिफ़ से पीडीएफ़ कन्वर्ट करने की प्रक्रिया शुरू करने के लिए 'कनवर्ट' बटन पर क्लिक करें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 6",
                "text": "कन्वर्ट होने की प्रक्रिया का इंतजार करें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 7",
                "text": "कन्वर्ट किए गए पीडीएफ़ दस्तावेज़ को डाउनलोड करें।"
            }
        ]
    },
    BMPToPDFHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        "name": "BMP छवियों को PDF में कैसे कन्वर्ट करें ?",
        "description": "एकल पीडीएफ दस्तावेज़ में कई BMP छवियों को कन्वर्ट करने के लिए चरणबद्ध गाइड।",
        "step": [
            {
                "@type": "HowToStep",
                "name": "चरण 1",
                "text": "PDFEquips पर बीएमपी से पीडीएफ़ कनवर्टर उपकरण खोलें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 2",
                "text": "बीएमपी छवियों को खींचें और छोड़ें या अपनी छवियों को चुनने के लिए 'बीएमपी फ़ाइलें का चयन करें' बटन पर क्लिक करें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 3",
                "text": "छवियों को अपनी पसंदीदा क्रम में खींचें और छोड़ें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 4",
                "text": "आवश्यक होने पर ओरिएंटेशन, पृष्ठ आकार, और मार्जिन जैसी सेटिंग्स को कॉन्फ़िगर करें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 5",
                "text": "बीएमपी से पीडीएफ़ कन्वर्ट करने की प्रक्रिया शुरू करने के लिए 'कनवर्ट' बटन पर क्लिक करें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 6",
                "text": "कन्वर्ट होने की प्रक्रिया का इंतजार करें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 7",
                "text": "कन्वर्ट किए गए पीडीएफ़ दस्तावेज़ को डाउनलोड करें।"
            }
        ]
    },
    SVGToPDFHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        "name": "SVG छवियों को PDF में कैसे कन्वर्ट करें ?",
        "description": "एकल पीडीएफ दस्तावेज़ में कई SVG छवियों को कन्वर्ट करने के लिए चरणबद्ध गाइड।",
        "step": [
            {
                "@type": "HowToStep",
                "name": "चरण 1",
                "text": "PDFEquips पर SVG से PDF कनवर्टर उपकरण खोलें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 2",
                "text": "SVG छवियों को खींचें और छोड़ें या अपनी छवियों को चुनने के लिए 'SVG फ़ाइलें का चयन करें' बटन पर क्लिक करें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 3",
                "text": "छवियों को अपनी पसंदीदा क्रम में खींचें और छोड़ें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 4",
                "text": "आवश्यक होने पर ओरिएंटेशन, पृष्ठ आकार, और मार्जिन जैसी सेटिंग्स को कॉन्फ़िगर करें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 5",
                "text": "'कनवर्ट' बटन पर क्लिक करके SVG से पीडीएफ़ कन्वर्ट करने की प्रक्रिया शुरू करें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 6",
                "text": "कन्वर्ट होने की प्रक्रिया का इंतजार करें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 7",
                "text": "कन्वर्ट किए गए पीडीएफ़ दस्तावेज़ को डाउनलोड करें।"
            }
        ]
    },
    WebPToPDFHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        "name": "WebP छवियों को PDF में कैसे कन्वर्ट करें ?",
        "description": "एकल पीडीएफ दस्तावेज़ में कई WebP छवियों को कन्वर्ट करने के लिए चरणबद्ध गाइड।",
        "step": [
            {
                "@type": "HowToStep",
                "name": "चरण 1",
                "text": "PDFEquips पर WebP से PDF कनवर्टर उपकरण खोलें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 2",
                "text": "WebP छवियों को खींचें और छोड़ें या अपनी छवियों को चुनने के लिए 'WebP फ़ाइलें का चयन करें' बटन पर क्लिक करें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 3",
                "text": "छवियों को अपनी पसंदीदा क्रम में खींचें और छोड़ें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 4",
                "text": "आवश्यक होने पर ओरिएंटेशन, पृष्ठ आकार, और मार्जिन जैसी सेटिंग्स को कॉन्फ़िगर करें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 5",
                "text": "'कनवर्ट' बटन पर क्लिक करके WebP से पीडीएफ़ कन्वर्ट करने की प्रक्रिया शुरू करें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 6",
                "text": "कन्वर्ट होने की प्रक्रिया का इंतजार करें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 7",
                "text": "कन्वर्ट किए गए पीडीएफ़ दस्तावेज़ को डाउनलोड करें।"
            }
        ]
    },
    HEIFToPDFHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        "name": "HEIF छवियों को PDF में कैसे कन्वर्ट करें ?",
        "description": "एकल पीडीएफ दस्तावेज़ में कई HEIF छवियों को कन्वर्ट करने के लिए चरणबद्ध गाइड।",
        "step": [
            {
                "@type": "HowToStep",
                "name": "चरण 1",
                "text": "PDFEquips पर HEIF से PDF कनवर्टर उपकरण खोलें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 2",
                "text": "HEIF छवियों को खींचें और छोड़ें या अपनी छवियों को चुनने के लिए 'HEIF फ़ाइलें का चयन करें' बटन पर क्लिक करें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 3",
                "text": "छवियों को अपनी पसंदीदा क्रम में खींचें और छोड़ें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 4",
                "text": "आवश्यक होने पर ओरिएंटेशन, पृष्ठ आकार, और मार्जिन जैसी सेटिंग्स को कॉन्फ़िगर करें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 5",
                "text": "'कनवर्ट' बटन पर क्लिक करके HEIF से पीडीएफ़ कन्वर्ट करने की प्रक्रिया शुरू करें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 6",
                "text": "कन्वर्ट होने की प्रक्रिया का इंतजार करें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 7",
                "text": "कन्वर्ट किए गए पीडीएफ़ दस्तावेज़ को डाउनलोड करें।"
            }
        ]
    },


    HEICToPDFHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        "name": "HEIC छवियों को PDF में कैसे कन्वर्ट करें ?",
        "description": "एकल पीडीएफ दस्तावेज़ में कई HEIC छवियों को कन्वर्ट करने के लिए चरणबद्ध गाइड।",
        "step": [
            {
                "@type": "HowToStep",
                "name": "चरण 1",
                "text": "PDFEquips पर HEIC से PDF कनवर्टर उपकरण खोलें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 2",
                "text": "HEIC छवियों को खींचें और छोड़ें या अपनी छवियों को चुनने के लिए 'HEIC फ़ाइलें का चयन करें' बटन पर क्लिक करें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 3",
                "text": "छवियों को अपनी पसंदीदा क्रम में खींचें और छोड़ें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 4",
                "text": "आवश्यक होने पर ओरिएंटेशन, पृष्ठ आकार, और मार्जिन जैसी सेटिंग्स को कॉन्फ़िगर करें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 5",
                "text": "'कनवर्ट' बटन पर क्लिक करके HEIC से पीडीएफ़ कन्वर्ट करने की प्रक्रिया शुरू करें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 6",
                "text": "कन्वर्ट होने की प्रक्रिया का इंतजार करें।"
            },
            {
                "@type": "HowToStep",
                "name": "चरण 7",
                "text": "कन्वर्ट किए गए पीडीएफ़ दस्तावेज़ को डाउनलोड करें।"
            }
        ]
    },
    ImageToPDFHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        name: "इमेज को PDF में कैसे बदलें ?",
        description: "कई इमेज (JPG, PNG, आदि) को एकल PDF दस्तावेज़ में बदलने के लिए चरण-दर-चरण मार्गदर्शिका।",
        step: [
            {
                "@type": "HowToStep",
                name: "चरण 1",
                text: "इमेज को PDF में बदलने वाले टूल को खोलें।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 2",
                text: "उपकरण में उन इमेज को खींचें और छोड़ें जिन्हें आप बदलना चाहते हैं, या 'इमेज फ़ाइलें चुनें' बटन पर क्लिक करके उन्हें चुनें।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 3",
                text: "इमेज को खींचकर और छोड़कर उन्हें वांछित क्रम में व्यवस्थित करें।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 4",
                text: "'PDF में बदलें' बटन पर क्लिक करके परिवर्तन प्रक्रिया प्रारंभ करें।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 5",
                text: "परिवर्तन प्रक्रिया समाप्त होने की प्रतीक्षा करें।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 6",
                text: "परिणामी PDF फ़ाइल डाउनलोड करें जिसमें आपकी इमेज शामिल हों।"
            }
        ]
    },
    PDFToImageHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        name: "PDF को इमेज में कैसे बदलें ?",
        description: "एक PDF दस्तावेज़ को इमेज (JPG, PNG, आदि) में बदलने के लिए चरण-दर-चरण मार्गदर्शिका।",
        step: [
            {
                "@type": "HowToStep",
                name: "चरण 1",
                text: "PDF को इमेज में बदलने वाले टूल को खोलें।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 2",
                text: "उस PDF फ़ाइल को अपलोड या चयन करें जिसे आप बदलना चाहते हैं।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 3",
                text: "इमेज का प्रारूप चुनें (JPG, PNG, आदि)।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 4",
                text: "उन पृष्ठों का चयन करें जिन्हें आप इमेज में बदलना चाहते हैं।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 5",
                text: "'इमेज में बदलें' बटन पर क्लिक करके परिवर्तन प्रक्रिया प्रारंभ करें।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 6",
                text: "परिवर्तन प्रक्रिया समाप्त होने की प्रतीक्षा करें।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 7",
                text: "परिणामी इमेज डाउनलोड करें।"
            }
        ]
    },
    PDFToPNGHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        name: "PDF को PNG इमेज में कैसे बदलें ?",
        description: "एक PDF दस्तावेज़ को PNG इमेज में बदलने के लिए चरण-दर-चरण मार्गदर्शिका।",
        step: [
            {
                "@type": "HowToStep",
                name: "चरण 1",
                text: "PDF को PNG में बदलने वाले टूल को खोलें।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 2",
                text: "उस PDF फ़ाइल को अपलोड या चयन करें जिसे आप बदलना चाहते हैं।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 3",
                text: "उन पृष्ठों का चयन करें जिन्हें आप PNG इमेज में बदलना चाहते हैं।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 4",
                text: "'PNG में बदलें' बटन पर क्लिक करके परिवर्तन प्रक्रिया प्रारंभ करें।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 5",
                text: "परिवर्तन प्रक्रिया समाप्त होने की प्रतीक्षा करें।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 6",
                text: "परिणामी PNG इमेज डाउनलोड करें।"
            }
        ]
    },
    PDFToJPGHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        name: "PDF दस्तावेज़ों को JPG इमेज में कैसे बदलें ?",
        description: "एक PDF दस्तावेज़ को कई JPG इमेज में बदलने के लिए चरण-दर-चरण मार्गदर्शिका।",
        step: [
            {
                "@type": "HowToStep",
                name: "चरण 1",
                text: "PDF को JPG में बदलने वाले टूल को PDFEquips पर खोलें।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 2",
                text: "उस PDF फ़ाइल को अपलोड या चयन करें जिसे आप बदलना चाहते हैं।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 3",
                text: "'JPG में बदलें' बटन पर क्लिक करके PDF को JPG में बदलने की प्रक्रिया प्रारंभ करें।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 4",
                text: "परिवर्तन प्रक्रिया समाप्त होने की प्रतीक्षा करें।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 5",
                text: "बदली हुई JPG इमेज डाउनलोड करें।"
            }
        ]
    },
    PDFToGIFHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        name: "PDF दस्तावेज़ों को GIF इमेज में कैसे बदलें ?",
        description: "एक PDF दस्तावेज़ को GIF इमेज में बदलने के लिए चरण-दर-चरण मार्गदर्शिका।",
        step: [
            {
                "@type": "HowToStep",
                name: "चरण 1",
                text: "PDF को GIF में बदलने वाले टूल को PDFEquips पर खोलें।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 2",
                text: "उस PDF फ़ाइल को अपलोड या चयन करें जिसे आप बदलना चाहते हैं।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 3",
                text: "'GIF में बदलें' बटन पर क्लिक करके PDF को GIF में बदलने की प्रक्रिया प्रारंभ करें।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 4",
                text: "परिवर्तन प्रक्रिया समाप्त होने की प्रतीक्षा करें।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 5",
                text: "बदली हुई GIF इमेज डाउनलोड करें।"
            }
        ]
    },
    PDFToBMPHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        name: "PDF दस्तावेज़ों को BMP इमेज में कैसे बदलें ?",
        description: "एक PDF दस्तावेज़ को BMP इमेज में बदलने के लिए चरण-दर-चरण मार्गदर्शिका।",
        step: [
            {
                "@type": "HowToStep",
                name: "चरण 1",
                text: "PDF को BMP में बदलने वाले टूल को PDFEquips पर खोलें।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 2",
                text: "उस PDF फ़ाइल को अपलोड या चयन करें जिसे आप बदलना चाहते हैं।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 3",
                text: "'बदलें' बटन पर क्लिक करके PDF को BMP में बदलने की प्रक्रिया प्रारंभ करें।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 4",
                text: "परिवर्तन प्रक्रिया समाप्त होने की प्रतीक्षा करें।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 5",
                text: "बदली हुई BMP इमेज डाउनलोड करें।"
            }
        ]
    },
    PDFToWEBPHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        name: "PDF दस्तावेज़ों को WebP इमेज में कैसे बदलें ?",
        description: "एक PDF दस्तावेज़ को WebP इमेज में बदलने के लिए चरण-दर-चरण मार्गदर्शिका।",
        step: [
            {
                "@type": "HowToStep",
                name: "चरण 1",
                text: "PDF को WebP में बदलने वाले टूल को PDFEquips पर खोलें।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 2",
                text: "उस PDF फ़ाइल को अपलोड या चयन करें जिसे आप बदलना चाहते हैं।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 3",
                text: "'WebP में बदलें' बटन पर क्लिक करके PDF को WebP में बदलने की प्रक्रिया प्रारंभ करें।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 4",
                text: "परिवर्तन प्रक्रिया समाप्त होने की प्रतीक्षा करें।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 5",
                text: "बदली हुई WebP इमेज डाउनलोड करें।"
            }
        ]
    },
    PDFToSVGHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        name: "PDF दस्तावेज़ों को SVG इमेज में कैसे बदलें ?",
        description: "एक PDF दस्तावेज़ को SVG इमेज में बदलने के लिए चरण-दर-चरण मार्गदर्शिका।",
        step: [
            {
                "@type": "HowToStep",
                name: "चरण 1",
                text: "PDF को SVG में बदलने वाले टूल को PDFEquips पर खोलें।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 2",
                text: "उस PDF फ़ाइल को अपलोड या चयन करें जिसे आप बदलना चाहते हैं।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 3",
                text: "'SVG में बदलें' बटन पर क्लिक करके PDF को SVG में बदलने की प्रक्रिया प्रारंभ करें।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 4",
                text: "परिवर्तन प्रक्रिया समाप्त होने की प्रतीक्षा करें।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 5",
                text: "बदली हुई SVG इमेज डाउनलोड करें।"
            }
        ]
    },
    PDFToTIFFHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        name: "PDF दस्तावेज़ों को TIFF इमेज में कैसे बदलें ?",
        description: "एक PDF दस्तावेज़ को TIFF इमेज में बदलने के लिए चरण-दर-चरण मार्गदर्शिका।",
        step: [
            {
                "@type": "HowToStep",
                name: "चरण 1",
                text: "PDF को TIFF में बदलने वाले टूल को PDFEquips पर खोलें।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 2",
                text: "उस PDF फ़ाइल को अपलोड या चयन करें जिसे आप बदलना चाहते हैं।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 3",
                text: "'बदलें' बटन पर क्लिक करके PDF को TIFF में बदलने की प्रक्रिया प्रारंभ करें।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 4",
                text: "परिवर्तन प्रक्रिया समाप्त होने की प्रतीक्षा करें।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 5",
                text: "बदली हुई TIFF इमेज डाउनलोड करें।"
            }
        ]
    },
    PDFToHEIFHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        name: "PDF दस्तावेज़ों को HEIF/HEIC इमेज में कैसे बदलें ?",
        description: "एक PDF दस्तावेज़ को HEIF या HEIC इमेज में बदलने के लिए चरण-दर-चरण मार्गदर्शिका।",
        step: [
            {
                "@type": "HowToStep",
                name: "चरण 1",
                text: "PDF को HEIF/HEIC में बदलने वाले टूल को PDFEquips पर खोलें।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 2",
                text: "उस PDF फ़ाइल को अपलोड या चयन करें जिसे आप बदलना चाहते हैं।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 3",
                text: "उन पृष्ठों का चयन करें जिन्हें आप HEIF/HEIC इमेज में बदलना चाहते हैं।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 4",
                text: "वांछित आउटपुट प्रारूप चुनें: HEIF या HEIC।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 5",
                text: "'HEIF/HEIC में बदलें' बटन पर क्लिक करके PDF को HEIF/HEIC में बदलने की प्रक्रिया प्रारंभ करें।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 6",
                text: "परिवर्तन प्रक्रिया समाप्त होने की प्रतीक्षा करें।"
            },
            {
                "@type": "HowToStep",
                name: "चरण 7",
                text: "बदली हुई HEIF या HEIC इमेज डाउनलोड करें।"
            }
        ]
    }
}