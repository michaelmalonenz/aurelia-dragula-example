System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.4",
    "aurelia-binding": "npm:aurelia-binding@1.7.3",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.1",
    "aurelia-dragula": "npm:aurelia-dragula@2.0.3",
    "aurelia-framework": "npm:aurelia-framework@1.3.1",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.3.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.2.0",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.1.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.8.1",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.3.3",
    "aurelia-router": "npm:aurelia-router@1.6.3",
    "aurelia-templating": "npm:aurelia-templating@1.10.1",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.5.2",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.8.0",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.3.3",
    "bootstrap": "github:twbs/bootstrap@3.4.1",
    "core-js": "npm:core-js@1.2.7",
    "css": "github:systemjs/plugin-css@0.1.37",
    "font-awesome": "npm:font-awesome@4.7.0",
    "jquery": "npm:jquery@2.2.4",
    "jquery-migrate": "npm:jquery-migrate@3.0.1",
    "lorem-ipsum": "npm:lorem-ipsum@1.0.6",
    "node-uuid": "npm:node-uuid@1.4.8",
    "text": "github:systemjs/plugin-text@0.0.9",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.2.1"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.12.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:twbs/bootstrap@3.4.1": {
      "jquery": "npm:jquery@3.3.1"
    },
    "npm:asn1.js@4.10.1": {
      "bn.js": "npm:bn.js@4.11.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.4": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.5",
      "aurelia-pal": "npm:aurelia-pal@1.8.1",
      "aurelia-templating": "npm:aurelia-templating@1.10.1"
    },
    "npm:aurelia-binding@1.7.3": {
      "aurelia-logging": "npm:aurelia-logging@1.5.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.5",
      "aurelia-pal": "npm:aurelia-pal@1.8.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.2"
    },
    "npm:aurelia-binding@2.2.0": {
      "aurelia-logging": "npm:aurelia-logging@1.5.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.5",
      "aurelia-pal": "npm:aurelia-pal@1.8.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.2"
    },
    "npm:aurelia-bootstrapper@1.0.1": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.2",
      "aurelia-framework": "npm:aurelia-framework@1.3.1",
      "aurelia-history": "npm:aurelia-history@1.2.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.3.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.2.0",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.1.0",
      "aurelia-pal": "npm:aurelia-pal@1.8.1",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.8.1",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.3.3",
      "aurelia-router": "npm:aurelia-router@1.6.3",
      "aurelia-templating": "npm:aurelia-templating@1.10.1",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.5.2",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.8.0",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.3.3"
    },
    "npm:aurelia-dependency-injection@1.4.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.5",
      "aurelia-pal": "npm:aurelia-pal@1.8.1"
    },
    "npm:aurelia-dragula@2.0.3": {
      "aurelia-binding": "npm:aurelia-binding@1.7.3",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.2",
      "aurelia-logging": "npm:aurelia-logging@1.5.1",
      "aurelia-pal": "npm:aurelia-pal@1.8.1",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.8.1",
      "aurelia-templating": "npm:aurelia-templating@1.10.1"
    },
    "npm:aurelia-event-aggregator@1.0.2": {
      "aurelia-logging": "npm:aurelia-logging@1.5.1"
    },
    "npm:aurelia-framework@1.3.1": {
      "aurelia-binding": "npm:aurelia-binding@2.2.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.5.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.5",
      "aurelia-pal": "npm:aurelia-pal@1.8.1",
      "aurelia-path": "npm:aurelia-path@1.1.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.2",
      "aurelia-templating": "npm:aurelia-templating@1.10.1"
    },
    "npm:aurelia-history-browser@1.3.0": {
      "aurelia-history": "npm:aurelia-history@1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.8.1"
    },
    "npm:aurelia-loader-default@1.2.0": {
      "aurelia-loader": "npm:aurelia-loader@1.0.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.5",
      "aurelia-pal": "npm:aurelia-pal@1.8.1"
    },
    "npm:aurelia-loader@1.0.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.5",
      "aurelia-path": "npm:aurelia-path@1.1.2"
    },
    "npm:aurelia-logging-console@1.1.0": {
      "aurelia-logging": "npm:aurelia-logging@1.5.1"
    },
    "npm:aurelia-metadata@1.0.5": {
      "aurelia-pal": "npm:aurelia-pal@1.8.1"
    },
    "npm:aurelia-pal-browser@1.8.1": {
      "aurelia-pal": "npm:aurelia-pal@1.8.1"
    },
    "npm:aurelia-polyfills@1.3.3": {
      "aurelia-pal": "npm:aurelia-pal@1.8.1"
    },
    "npm:aurelia-route-recognizer@1.3.1": {
      "aurelia-path": "npm:aurelia-path@1.1.2"
    },
    "npm:aurelia-router@1.6.3": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.2",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.2",
      "aurelia-history": "npm:aurelia-history@1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.5.1",
      "aurelia-path": "npm:aurelia-path@1.1.2",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.3.1"
    },
    "npm:aurelia-task-queue@1.3.2": {
      "aurelia-pal": "npm:aurelia-pal@1.8.1"
    },
    "npm:aurelia-templating-binding@1.5.2": {
      "aurelia-binding": "npm:aurelia-binding@2.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.5.1",
      "aurelia-templating": "npm:aurelia-templating@1.10.1"
    },
    "npm:aurelia-templating-resources@1.8.0": {
      "aurelia-binding": "npm:aurelia-binding@2.2.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.5.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.5",
      "aurelia-pal": "npm:aurelia-pal@1.8.1",
      "aurelia-path": "npm:aurelia-path@1.1.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.2",
      "aurelia-templating": "npm:aurelia-templating@1.10.1"
    },
    "npm:aurelia-templating-router@1.3.3": {
      "aurelia-binding": "npm:aurelia-binding@2.2.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.2",
      "aurelia-logging": "npm:aurelia-logging@1.5.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.5",
      "aurelia-pal": "npm:aurelia-pal@1.8.1",
      "aurelia-path": "npm:aurelia-path@1.1.2",
      "aurelia-router": "npm:aurelia-router@1.6.3",
      "aurelia-templating": "npm:aurelia-templating@1.10.1"
    },
    "npm:aurelia-templating@1.10.1": {
      "aurelia-binding": "npm:aurelia-binding@2.2.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.5.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.5",
      "aurelia-pal": "npm:aurelia-pal@1.8.1",
      "aurelia-path": "npm:aurelia-path@1.1.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.2"
    },
    "npm:browserify-aes@1.2.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.4",
      "create-hash": "npm:create-hash@1.2.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
      "inherits": "npm:inherits@2.0.3",
      "safe-buffer": "npm:safe-buffer@5.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-cipher@1.0.1": {
      "browserify-aes": "npm:browserify-aes@1.2.0",
      "browserify-des": "npm:browserify-des@1.0.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.3"
    },
    "npm:browserify-des@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.3",
      "safe-buffer": "npm:safe-buffer@5.1.2"
    },
    "npm:browserify-rsa@4.0.1": {
      "bn.js": "npm:bn.js@4.11.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.1.0"
    },
    "npm:browserify-sign@4.0.4": {
      "bn.js": "npm:bn.js@4.11.8",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.2.0",
      "create-hmac": "npm:create-hmac@1.1.7",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.4.1",
      "inherits": "npm:inherits@2.0.3",
      "parse-asn1": "npm:parse-asn1@5.1.4",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer@5.2.1": {
      "base64-js": "npm:base64-js@1.3.0",
      "ieee754": "npm:ieee754@1.1.12"
    },
    "npm:cipher-base@1.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "safe-buffer": "npm:safe-buffer@5.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:create-ecdh@4.0.3": {
      "bn.js": "npm:bn.js@4.11.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.4.1"
    },
    "npm:create-hash@1.2.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.3",
      "md5.js": "npm:md5.js@1.3.5",
      "ripemd160": "npm:ripemd160@2.0.2",
      "sha.js": "npm:sha.js@2.4.11"
    },
    "npm:create-hmac@1.1.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.4",
      "create-hash": "npm:create-hash@1.2.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.3",
      "ripemd160": "npm:ripemd160@2.0.2",
      "safe-buffer": "npm:safe-buffer@5.1.2",
      "sha.js": "npm:sha.js@2.4.11"
    },
    "npm:crypto-browserify@3.12.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.1",
      "browserify-sign": "npm:browserify-sign@4.0.4",
      "create-ecdh": "npm:create-ecdh@4.0.3",
      "create-hash": "npm:create-hash@1.2.0",
      "create-hmac": "npm:create-hmac@1.1.7",
      "diffie-hellman": "npm:diffie-hellman@5.0.3",
      "inherits": "npm:inherits@2.0.3",
      "pbkdf2": "npm:pbkdf2@3.0.17",
      "public-encrypt": "npm:public-encrypt@4.0.3",
      "randombytes": "npm:randombytes@2.1.0",
      "randomfill": "npm:randomfill@1.0.4"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
    },
    "npm:diffie-hellman@5.0.3": {
      "bn.js": "npm:bn.js@4.11.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.1",
      "randombytes": "npm:randombytes@2.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:elliptic@6.4.1": {
      "bn.js": "npm:bn.js@4.11.8",
      "brorand": "npm:brorand@1.1.0",
      "hash.js": "npm:hash.js@1.1.7",
      "hmac-drbg": "npm:hmac-drbg@1.0.1",
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
      "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:evp_bytestokey@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "md5.js": "npm:md5.js@1.3.5",
      "safe-buffer": "npm:safe-buffer@5.1.2"
    },
    "npm:font-awesome@4.7.0": {
      "css": "github:systemjs/plugin-css@0.1.37"
    },
    "npm:hash-base@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "safe-buffer": "npm:safe-buffer@5.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:hash.js@1.1.7": {
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
    },
    "npm:hmac-drbg@1.0.1": {
      "hash.js": "npm:hash.js@1.1.7",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
      "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inherits@2.0.3": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jquery-migrate@3.0.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "jquery": "npm:jquery@3.3.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lorem-ipsum@1.0.6": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "minimist": "npm:minimist@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:md5.js@1.3.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "hash-base": "npm:hash-base@3.0.4",
      "inherits": "npm:inherits@2.0.3",
      "safe-buffer": "npm:safe-buffer@5.1.2"
    },
    "npm:miller-rabin@4.0.1": {
      "bn.js": "npm:bn.js@4.11.8",
      "brorand": "npm:brorand@1.1.0"
    },
    "npm:node-uuid@1.4.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:parse-asn1@5.1.4": {
      "asn1.js": "npm:asn1.js@4.10.1",
      "browserify-aes": "npm:browserify-aes@1.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.2.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
      "pbkdf2": "npm:pbkdf2@3.0.17",
      "safe-buffer": "npm:safe-buffer@5.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.17": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.2.0",
      "create-hmac": "npm:create-hmac@1.1.7",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "ripemd160": "npm:ripemd160@2.0.2",
      "safe-buffer": "npm:safe-buffer@5.1.2",
      "sha.js": "npm:sha.js@2.4.11"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:public-encrypt@4.0.3": {
      "bn.js": "npm:bn.js@4.11.8",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.2.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.1.4",
      "randombytes": "npm:randombytes@2.1.0",
      "safe-buffer": "npm:safe-buffer@5.1.2"
    },
    "npm:randombytes@2.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "safe-buffer": "npm:safe-buffer@5.1.2"
    },
    "npm:randomfill@1.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "randombytes": "npm:randombytes@2.1.0",
      "safe-buffer": "npm:safe-buffer@5.1.2"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:ripemd160@2.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "hash-base": "npm:hash-base@3.0.4",
      "inherits": "npm:inherits@2.0.3"
    },
    "npm:safe-buffer@5.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:sha.js@2.4.11": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "safe-buffer": "npm:safe-buffer@5.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
