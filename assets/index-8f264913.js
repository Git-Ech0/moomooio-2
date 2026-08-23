import {
    p as Ut,
    E as rs,
    D as cs,
    L as hs,
    m as le,
    a as ds,
    n as Ei
} from "./vendor-b760dbba.js";
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const n of document.querySelectorAll('link[rel="modulepreload"]')) s(n);
    new MutationObserver(n => {
        for (const a of n)
            if (a.type === "childList")
                for (const o of a.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && s(o)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function i(n) {
        const a = {};
        return n.integrity && (a.integrity = n.integrity), n.referrerPolicy && (a.referrerPolicy = n.referrerPolicy), n.crossOrigin === "use-credentials" ? a.credentials = "include" : n.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a
    }

    function s(n) {
        if (n.ep) return;
        n.ep = !0;
        const a = i(n);
        fetch(n.href, a)
    }
})();
const kn = window.WebSocket,
    Ri = window.WebSocket && window.WebSocket.prototype.send;
let Bi = !1;

function fs(e) {
    if (Bi) return;
    Bi = !0;
    const t = e || {};
    us(), ms(), t.antiDebug && ps(), t.detectUserscripts !== !1 && ws()
}

function us() {
    /* websocket lock removed */ }

function ms() {
    /* devtools key block removed */ }

function ps() {
    /* debugger loop removed */ }
const gs = [{
    name: "Tampermonkey",
    id: "dhdgffkkebhmkfjojejmpbldmpobfkfo",
    resource: "options.html"
}, {
    name: "Tampermonkey",
    id: "gcalenpjmijncebpfijmoaglllgpjagf",
    resource: "options.html"
}, {
    name: "Tampermonkey",
    id: "iikmkjmpaadaobahmlepeloendndfphd",
    resource: "options.html"
}, {
    name: "Violentmonkey",
    id: "jinjaccalgkegednnccohejagnlnfdag",
    resource: "options.html"
}];

function ws() {
    /* userscript detection removed */ }

function ys(e) {
    /* warning banner removed */ }
const ks = 1920,
    xs = 1080,
    vs = 9,
    xn = Ut && Ut.argv.indexOf("--largeserver") != -1 ? 80 : 40,
    Ss = xn + 10,
    Ms = 6,
    Is = 3e3,
    bs = 10,
    Ts = 5,
    Cs = 50,
    Ps = 4.5,
    Ds = 15,
    As = .9,
    Es = 0,
    Rs = 60,
    Bs = 35,
    Os = 3e3,
    Hs = 500,
    Vs = Ut && {}.IS_SANDBOX,
    Ws = 100,
    _s = Math.PI / 2.6,
    Ls = 10,
    qs = .25,
    Fs = Math.PI / 2,
    Xs = 35,
    Gs = .0016,
    Ns = .993,
    zs = 34,
    Ys = ["#bf8f54", "#cbb091", "#896c4b", "#fadadc", "#ececec", "#c37373", "#4c4c4c", "#ecaff7", "#738cc3", "#8bc373"],
    Ks = 7,
    $s = .06,
    Js = ["Sid", "Steph", "Bmoe", "Romn", "Jononthecool", "Fiona", "Vince", "Nathan", "Nick", "Flappy", "Ronald", "Otis", "Pepe", "Mc Donald", "Theo", "Fabz", "Oliver", "Jeff", "Jimmy", "Helena", "Reaper", "Ben", "Alan", "Naomi", "XYZ", "Clever", "Jeremy", "Mike", "Destined", "Stallion", "Allison", "Meaty", "Sophia", "Vaja", "Joey", "Pendy", "Murdoch", "Theo", "Jared", "July", "Sonia", "Mel", "Dexter", "Quinn", "Milky"],
    Qs = Math.PI / 3,
    ft = [{
        id: 0,
        src: "",
        xp: 0,
        val: 1
    }, {
        id: 1,
        src: "_g",
        xp: 3e3,
        val: 1.1
    }, {
        id: 2,
        src: "_d",
        xp: 7e3,
        val: 1.18
    }, {
        id: 3,
        src: "_r",
        poison: !0,
        xp: 12e3,
        val: 1.18
    }],
    Zs = function(e) {
        const t = e.weaponXP[e.weaponIndex] || 0;
        for (let i = ft.length - 1; i >= 0; --i)
            if (t >= ft[i].xp) return ft[i]
    },
    Us = ["wood", "food", "stone", "points"],
    js = 7,
    eo = 9,
    to = 3,
    io = 32,
    no = 7,
    so = 724,
    oo = 114,
    ao = .0011,
    lo = 1e-4,
    ro = 1.3,
    co = [150, 160, 165, 175],
    ho = [80, 85, 95],
    fo = [80, 85, 90],
    uo = 2400,
    mo = .75,
    po = 15,
    go = 14400,
    wo = 40,
    yo = 2200,
    ko = .6,
    xo = 1,
    vo = .3,
    So = .3,
    Mo = 144e4,
    y = {
        maxScreenWidth: ks,
        maxScreenHeight: xs,
        serverUpdateRate: vs,
        maxPlayers: xn,
        maxPlayersHard: Ss,
        collisionDepth: Ms,
        minimapRate: Is,
        colGrid: bs,
        clientSendRate: Ts,
        healthBarWidth: Cs,
        healthBarPad: Ps,
        iconPadding: Ds,
        iconPad: As,
        deathFadeout: Es,
        crownIconScale: Rs,
        crownPad: Bs,
        chatCountdown: Os,
        chatCooldown: Hs,
        inSandbox: Vs,
        maxAge: Ws,
        gatherAngle: _s,
        gatherWiggle: Ls,
        hitReturnRatio: qs,
        hitAngle: Fs,
        playerScale: Xs,
        playerSpeed: Gs,
        playerDecel: Ns,
        nameY: zs,
        skinColors: Ys,
        animalCount: Ks,
        aiTurnRandom: $s,
        cowNames: Js,
        shieldAngle: Qs,
        weaponVariants: ft,
        fetchVariant: Zs,
        resourceTypes: Us,
        areaCount: js,
        treesPerArea: eo,
        bushesPerArea: to,
        totalRocks: io,
        goldOres: no,
        riverWidth: so,
        riverPadding: oo,
        waterCurrent: ao,
        waveSpeed: lo,
        waveMax: ro,
        treeScales: co,
        bushScales: ho,
        rockScales: fo,
        snowBiomeTop: uo,
        snowSpeed: mo,
        maxNameLength: po,
        mapScale: go,
        mapPingScale: wo,
        mapPingTime: yo,
        MAX_ATTACK: ko,
        MAX_SPAWN_DELAY: xo,
        MAX_SPEED: vo,
        MAX_TURN_SPEED: So,
        DAY_INTERVAL: Mo
    },
    Io = 1,
    jt = 6,
    Ht = 1,
    bo = ["M", "D", "9", "e", "F", "z", "H", "K", "L", "N", "b", "P", "Q", "c", "6", "S", "0"],
    To = ["A", "B", "C", "D", "E", "a", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z", "g", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function Co(e) {
    return function() {
        e |= 0, e = e + 1831565813 | 0;
        let t = Math.imul(e ^ e >>> 15, 1 | e);
        return t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t, ((t ^ t >>> 14) >>> 0) / 4294967296
    }
}

function Oi(e, t) {
    const i = e.length,
        s = e.map((d, l) => l),
        n = Co(t >>> 0);
    for (let d = i - 1; d > 0; d--) {
        const l = Math.floor(n() * (d + 1)),
            c = s[d];
        s[d] = s[l], s[l] = c
    }
    const a = {},
        o = {};
    for (let d = 0; d < i; d++) a[e[d]] = s[d], o[s[d]] = e[d];
    return {
        enc: a,
        dec: o
    }
}

function Po(e) {
    const t = (e ^ Math.imul(Io, 2654435761)) >>> 0;
    return {
        c2s: Oi(bo, t),
        s2c: Oi(To, (t ^ 2246822507) >>> 0)
    }
}
const Do = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);

function Vt(e) {
    const t = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
        i = e.length,
        s = i * 8,
        n = i + 9,
        a = new Uint8Array(Math.ceil(n / 64) * 64);
    a.set(e), a[i] = 128;
    const o = new DataView(a.buffer);
    o.setUint32(a.length - 4, s >>> 0, !1), o.setUint32(a.length - 8, Math.floor(s / 4294967296), !1);
    const d = new Uint32Array(64);
    for (let m = 0; m < a.length; m += 64) {
        for (let w = 0; w < 16; w++) d[w] = o.getUint32(m + w * 4, !1);
        for (let w = 16; w < 64; w++) {
            const T = j(d[w - 15], 7) ^ j(d[w - 15], 18) ^ d[w - 15] >>> 3,
                A = j(d[w - 2], 17) ^ j(d[w - 2], 19) ^ d[w - 2] >>> 10;
            d[w] = d[w - 16] + T + d[w - 7] + A | 0
        }
        let g = t[0],
            h = t[1],
            u = t[2],
            p = t[3],
            x = t[4],
            I = t[5],
            P = t[6],
            f = t[7];
        for (let w = 0; w < 64; w++) {
            const T = j(x, 6) ^ j(x, 11) ^ j(x, 25),
                A = x & I ^ ~x & P,
                V = f + T + A + Do[w] + d[w] | 0,
                W = j(g, 2) ^ j(g, 13) ^ j(g, 22),
                S = g & h ^ g & u ^ h & u,
                H = W + S | 0;
            f = P, P = I, I = x, x = p + V | 0, p = u, u = h, h = g, g = V + H | 0
        }
        t[0] = t[0] + g | 0, t[1] = t[1] + h | 0, t[2] = t[2] + u | 0, t[3] = t[3] + p | 0, t[4] = t[4] + x | 0, t[5] = t[5] + I | 0, t[6] = t[6] + P | 0, t[7] = t[7] + f | 0
    }
    const l = new Uint8Array(32),
        c = new DataView(l.buffer);
    for (let m = 0; m < 8; m++) c.setUint32(m * 4, t[m], !1);
    return l
}

function j(e, t) {
    return e >>> t | e << 32 - t
}
const he = 64;

function Ao(e, t) {
    let i = e;
    i.length > he && (i = Vt(i));
    const s = new Uint8Array(he);
    s.set(i);
    const n = new Uint8Array(he + t.length),
        a = new Uint8Array(he + 32);
    for (let o = 0; o < he; o++) n[o] = s[o] ^ 54, a[o] = s[o] ^ 92;
    return n.set(t, he), a.set(Vt(n), he), Vt(a)
}

function Eo(e, t) {
    return Ao(e, t).subarray(0, jt)
}

function Ro(e) {
    const t = new Uint8Array(e.length / 2);
    for (let i = 0; i < t.length; i++) t[i] = parseInt(e.substr(i * 2, 2), 16);
    return t
}
const Hi = new rs,
    Bo = new cs;
let Z = null;
/* ── PACKETS PER SECOND TRACKER ── */
let ppsCounter = 0;
let currentPPS = 0;
let ppsTimer = Date.now();

function trackPacket() {
    ppsCounter++;
    const now = Date.now();
    if (now - ppsTimer >= 1000) {
        currentPPS = Math.round((ppsCounter * 1000) / (now - ppsTimer));
        ppsCounter = 0;
        ppsTimer = now;
    }
}
const O = {
    socket: null,
    connected: !1,
    socketId: -1,
    connect: function(e, t, i) {
        if (this.socket) return;
        const s = this;
        try {
            let n = !1;
            const a = e;
            this.socket = new kn(e), this.socket.binaryType = "arraybuffer";
            let o = !1;
            this.socket.onmessage = function(d) {
                trackPacket();
                var l = new Uint8Array(d.data);
                const c = Bo.decode(l);
                var m = c[0],
                    g = c[1];
                if (m === "io-init") {
                    s.socketId = g[0], g[3] === Ht ? Z = {
                        mode: Ht,
                        key: Ro(g[2]),
                        tables: Po(g[1] >>> 0),
                        seq: 0
                    } : Z = null, o || (o = !0, t());
                    return
                }
                if (Z && typeof m == "number" && (m = Z.tables.s2c.dec[m], m === void 0)) return;
                const h = i[m];
                h && h.apply(void 0, g)
            }, this.socket.onopen = function() {
                s.connected = !0
            }, this.socket.onclose = function(d) {
                s.connected = !1, Z = null, d.code == 4001 ? t("Invalid Connection") : n || t("disconnected")
            }, this.socket.onerror = function(d) {
                /* fix: `this` inside onerror is the WebSocket itself, not the O object.
                   `this.socket` was always undefined so this handler NEVER fired.
                   Use closure var `s` (reference to O) instead. */
                s.socket && s.socket.readyState != WebSocket.OPEN && (n = !0, console.error("Socket error", arguments), t("Socket error"))
            }
        } catch (n) {
            console.warn("Socket connection error:", n), t(n)
        }
    },
    send: function(e) {
        trackPacket();
        const t = Array.prototype.slice.call(arguments, 1);
        if (!this.socket) return;
        if (Z && Z.mode === Ht) {
            const s = Z.tables.c2s.enc[e];
            if (s === void 0) return;
            const n = ++Z.seq,
                a = Hi.encode([s, t, n]),
                o = Eo(Z.key, a),
                d = new Uint8Array(jt + a.length);
            d.set(o, 0), d.set(a, jt), this.socket.send(d);
            return
        }
        const i = Hi.encode([e, t]);
        this.socket.send(i)
    },
    socketReady: function() {
        return this.socket && this.connected
    },
    close: function() {
        this.socket && this.socket.close(), this.socket = null, this.connected = !1, Z = null
    }
};
const vn = Math.abs;
const Oo = Math.sqrt;
const Ho = Math.atan2,
    Wt = Math.PI,
    Vo = function(e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e
    },
    Wo = function(e, t) {
        return Math.random() * (t - e + 1) + e
    },
    _o = function(e, t, i) {
        return e + (t - e) * i
    },
    Lo = function(e, t) {
        return e > 0 ? e = Math.max(0, e - t) : e < 0 && (e = Math.min(0, e + t)), e
    },
    qo = function(e, t, i, s) {
        return Oo((i -= e) * i + (s -= t) * s)
    },
    Fo = function(e, t, i, s) {
        return Ho(t - s, e - i)
    },
    Xo = function(e, t) {
        const i = vn(t - e) % (Wt * 2);
        return i > Wt ? Wt * 2 - i : i
    },
    Go = function(e) {
        return typeof e == "number" && !isNaN(e) && isFinite(e)
    },
    No = function(e) {
        return e && typeof e == "string"
    },
    zo = function(e) {
        return e > 999 ? (e / 1e3).toFixed(1) + "k" : e
    },
    Yo = function(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    },
    Ko = function(e, t) {
        return e ? parseFloat(e.toFixed(t)) : 0
    },
    $o = function(e, t) {
        return parseFloat(t.points) - parseFloat(e.points)
    },
    Jo = function(e, t, i, s, n, a, o, d) {
        let l = n,
            c = o;
        if (n > o && (l = o, c = n), c > i && (c = i), l < e && (l = e), l > c) return !1;
        let m = a,
            g = d;
        const h = o - n;
        if (Math.abs(h) > 1e-7) {
            const u = (d - a) / h,
                p = a - u * n;
            m = u * l + p, g = u * c + p
        }
        if (m > g) {
            const u = g;
            g = m, m = u
        }
        return g > s && (g = s), m < t && (m = t), !(m > g)
    },
    Sn = function(e, t, i) {
        const s = e.getBoundingClientRect(),
            n = s.left + window.scrollX,
            a = s.top + window.scrollY,
            o = s.width,
            d = s.height,
            l = t > n && t < n + o,
            c = i > a && i < a + d;
        return l && c
    },
    ut = function(e) {
        const t = e.changedTouches[0];
        e.screenX = t.screenX, e.screenY = t.screenY, e.clientX = t.clientX, e.clientY = t.clientY, e.pageX = t.pageX, e.pageY = t.pageY
    },
    Mn = function(e, t) {
        const i = !t;
        let s = !1;
        const n = !1;
        e.addEventListener("touchstart", ie(a), n), e.addEventListener("touchmove", ie(o), n), e.addEventListener("touchend", ie(d), n), e.addEventListener("touchcancel", ie(d), n), e.addEventListener("touchleave", ie(d), n);

        function a(l) {
            ut(l), window.setUsingTouch(!0), i && (l.preventDefault(), l.stopPropagation()), e.onmouseover && e.onmouseover(l), s = !0
        }

        function o(l) {
            ut(l), window.setUsingTouch(!0), i && (l.preventDefault(), l.stopPropagation()), Sn(e, l.pageX, l.pageY) ? s || (e.onmouseover && e.onmouseover(l), s = !0) : s && (e.onmouseout && e.onmouseout(l), s = !1)
        }

        function d(l) {
            ut(l), window.setUsingTouch(!0), i && (l.preventDefault(), l.stopPropagation()), s && (e.onclick && e.onclick(l), e.onmouseout && e.onmouseout(l), s = !1)
        }
    },
    Qo = function(e) {
        for (; e.hasChildNodes();) e.removeChild(e.lastChild)
    },
    Zo = function(e) {
        const t = document.createElement(e.tag || "div");

        function i(s, n) {
            e[s] && (t[n] = e[s])
        }
        i("text", "textContent"), i("html", "innerHTML"), i("class", "className");
        for (const s in e) {
            switch (s) {
                case "tag":
                case "text":
                case "html":
                case "class":
                case "style":
                case "hookTouch":
                case "parent":
                case "children":
                    continue
            }
            t[s] = e[s]
        }
        if (t.onclick && (t.onclick = ie(t.onclick)), t.onmouseover && (t.onmouseover = ie(t.onmouseover)), t.onmouseout && (t.onmouseout = ie(t.onmouseout)), e.style && (t.style.cssText = e.style), e.hookTouch && Mn(t), e.parent && e.parent.appendChild(t), e.children)
            for (let s = 0; s < e.children.length; s++) t.appendChild(e.children[s]);
        return t
    },
    In = function(e) {
        return !0
    },
    ie = function(e) {
        return function(t) {
            t && t instanceof Event && In(t) && e(t)
        }
    },
    Uo = function(e) {
        let t = "";
        const i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let s = 0; s < e; s++) t += i.charAt(Math.floor(Math.random() * i.length));
        return t
    },
    jo = function(e, t) {
        let i = 0;
        for (let s = 0; s < e.length; s++) e[s] === t && i++;
        return i
    },
    M = {
        randInt: Vo,
        randFloat: Wo,
        lerp: _o,
        decel: Lo,
        getDistance: qo,
        getDirection: Fo,
        getAngleDist: Xo,
        isNumber: Go,
        isString: No,
        kFormat: zo,
        capitalizeFirst: Yo,
        fixTo: Ko,
        sortByPoints: $o,
        lineInRect: Jo,
        containsPoint: Sn,
        mousifyTouchEvent: ut,
        hookTouchEvents: Mn,
        removeAllChildren: Qo,
        generateElement: Zo,
        eventIsTrusted: In,
        checkTrusted: ie,
        randomString: Uo,
        countInArray: jo
    },
    ea = function() {
        this.init = function(e, t, i, s, n, a, o) {
            this.x = e, this.y = t, this.color = o, this.scale = i, this.startScale = this.scale, this.maxScale = i * 1.5, this.scaleSpeed = .7, this.speed = s, this.life = n, this.text = a
        }, this.update = function(e) {
            this.life && (this.life -= e, this.y -= this.speed * e, this.scale += this.scaleSpeed * e, this.scale >= this.maxScale ? (this.scale = this.maxScale, this.scaleSpeed *= -1) : this.scale <= this.startScale && (this.scale = this.startScale, this.scaleSpeed = 0), this.life <= 0 && (this.life = 0))
        }, this.render = function(e, t, i) {
            e.fillStyle = this.color, e.font = this.scale + "px Hammersmith One", e.fillText(this.text, this.x - t, this.y - i)
        }
    },
    ta = function() {
        this.texts = [], this.update = function(e, t, i, s) {
            t.textBaseline = "middle", t.textAlign = "center";
            for (let n = 0; n < this.texts.length; ++n) this.texts[n].life && (this.texts[n].update(e), this.texts[n].render(t, i, s))
        }, this.showText = function(e, t, i, s, n, a, o) {
            let d;
            for (let l = 0; l < this.texts.length; ++l)
                if (!this.texts[l].life) {
                    d = this.texts[l];
                    break
                } d || (d = new ea, this.texts.push(d)), d.init(e, t, i, s, n, a, o)
        }
    },
    ia = function(e, t) {
        let i;
        this.sounds = [], this.active = !0, this.play = function(s, n, a) {
            !n || !this.active || (i = this.sounds[s], i || (i = new Howl({
                src: ".././sound/" + s + ".mp3"
            }), this.sounds[s] = i), (!a || !i.isPlaying) && (i.isPlaying = !0, i.play(), i.volume((n || 1) * e.volumeMult), i.loop(a)))
        }, this.toggleMute = function(s, n) {
            i = this.sounds[s], i && i.mute(n)
        }, this.stop = function(s) {
            i = this.sounds[s], i && (i.stop(), i.isPlaying = !1)
        }
    },
    Vi = Math.floor,
    Wi = Math.abs,
    Fe = Math.cos,
    Xe = Math.sin,
    na = Math.sqrt;

function sa(e, t, i, s, n, a) {
    this.objects = t, this.grids = {}, this.updateObjects = [];
    let o, d;
    const l = s.mapScale / s.colGrid;
    this.setObjectGrids = function(h) {
        const u = Math.min(s.mapScale, Math.max(0, h.x)),
            p = Math.min(s.mapScale, Math.max(0, h.y));
        for (let x = 0; x < s.colGrid; ++x) {
            o = x * l;
            for (let I = 0; I < s.colGrid; ++I) d = I * l, u + h.scale >= o && u - h.scale <= o + l && p + h.scale >= d && p - h.scale <= d + l && (this.grids[x + "_" + I] || (this.grids[x + "_" + I] = []), this.grids[x + "_" + I].push(h), h.gridLocations.push(x + "_" + I))
        }
    }, this.removeObjGrid = function(h) {
        let u;
        for (let p = 0; p < h.gridLocations.length; ++p) u = this.grids[h.gridLocations[p]].indexOf(h), u >= 0 && this.grids[h.gridLocations[p]].splice(u, 1)
    }, this.disableObj = function(h) {
        if (h.active = !1, a) {
            h.owner && h.pps && (h.owner.pps -= h.pps), this.removeObjGrid(h);
            const u = this.updateObjects.indexOf(h);
            u >= 0 && this.updateObjects.splice(u, 1)
        }
    }, this.hitObj = function(h, u) {
        for (let p = 0; p < n.length; ++p) n[p].active && (h.sentTo[n[p].id] && (h.active ? n[p].canSee(h) && a.send(n[p].id, "L", i.fixTo(u, 1), h.sid) : a.send(n[p].id, "Q", h.sid)), !h.active && h.owner == n[p] && n[p].changeItemCount(h.group.id, -1))
    };
    const c = [];
    let m;
    this.getGridArrays = function(h, u, p) {
        o = Vi(h / l), d = Vi(u / l), c.length = 0;
        try {
            this.grids[o + "_" + d] && c.push(this.grids[o + "_" + d]), h + p >= (o + 1) * l && (m = this.grids[o + 1 + "_" + d], m && c.push(m), d && u - p <= d * l ? (m = this.grids[o + 1 + "_" + (d - 1)], m && c.push(m)) : u + p >= (d + 1) * l && (m = this.grids[o + 1 + "_" + (d + 1)], m && c.push(m))), o && h - p <= o * l && (m = this.grids[o - 1 + "_" + d], m && c.push(m), d && u - p <= d * l ? (m = this.grids[o - 1 + "_" + (d - 1)], m && c.push(m)) : u + p >= (d + 1) * l && (m = this.grids[o - 1 + "_" + (d + 1)], m && c.push(m))), u + p >= (d + 1) * l && (m = this.grids[o + "_" + (d + 1)], m && c.push(m)), d && u - p <= d * l && (m = this.grids[o + "_" + (d - 1)], m && c.push(m))
        } catch {}
        return c
    };
    let g;
    this.add = function(h, u, p, x, I, P, f, w, T) {
        g = null;
        for (var A = 0; A < t.length; ++A)
            if (t[A].sid == h) {
                g = t[A];
                break
            } if (!g) {
            for (var A = 0; A < t.length; ++A)
                if (!t[A].active) {
                    g = t[A];
                    break
                }
        }
        g || (g = new e(h), t.push(g)), w && (g.sid = h), g.init(u, p, x, I, P, f, T), a && (this.setObjectGrids(g), g.doUpdate && this.updateObjects.push(g))
    }, this.disableBySid = function(h) {
        for (let u = 0; u < t.length; ++u)
            if (t[u].sid == h) {
                this.disableObj(t[u]);
                break
            }
    }, this.removeAllItems = function(h, u) {
        for (let p = 0; p < t.length; ++p) t[p].active && t[p].owner && t[p].owner.sid == h && this.disableObj(t[p]);
        u && u.broadcast("R", h)
    }, this.fetchSpawnObj = function(h) {
        let u = null;
        for (let p = 0; p < t.length; ++p)
            if (g = t[p], g.active && g.owner && g.owner.sid == h && g.spawnPoint) {
                u = [g.x, g.y], this.disableObj(g), a.broadcast("Q", g.sid), g.owner && g.owner.changeItemCount(g.group.id, -1);
                break
            } return u
    }, this.checkItemLocation = function(h, u, p, x, I, P, f) {
        for (let w = 0; w < t.length; ++w) {
            const T = t[w].blocker ? t[w].blocker : t[w].getScale(x, t[w].isItem);
            if (t[w].active && i.getDistance(h, u, t[w].x, t[w].y) < p + T) return !1
        }
        return !(!P && I != 18 && u >= s.mapScale / 2 - s.riverWidth / 2 && u <= s.mapScale / 2 + s.riverWidth / 2)
    }, this.addProjectile = function(h, u, p, x, I) {
        const P = items.projectiles[I];
        let f;
        for (let w = 0; w < projectiles.length; ++w)
            if (!projectiles[w].active) {
                f = projectiles[w];
                break
            } f || (f = new Projectile(n, i), projectiles.push(f)), f.init(I, h, u, p, P.speed, x, P.scale)
    }, this.checkCollision = function(h, u, p) {
        p = p || 1;
        const x = h.x - u.x,
            I = h.y - u.y;
        let P = h.scale + u.scale;
        /* fix: broad-phase should use AND (AABB intersection requires BOTH axes to overlap).
           OR was causing expensive sqrt circle checks whenever only one axis was close,
           greatly increasing redundant collision work per frame. */
        if (Wi(x) <= P && Wi(I) <= P) {
            P = h.scale + (u.getScale ? u.getScale() : u.scale);
            let f = na(x * x + I * I) - P;
            if (f <= 0) {
                if (u.ignoreCollision) u.trap && !h.noTrap && u.owner != h && !(u.owner && u.owner.team && u.owner.team == h.team) ? (h.lockMove = !0, u.hideFromEnemy = !1) : u.boostSpeed ? (h.xVel += p * u.boostSpeed * (u.weightM || 1) * Fe(u.dir), h.yVel += p * u.boostSpeed * (u.weightM || 1) * Xe(u.dir)) : u.healCol ? h.healCol = u.healCol : u.teleport && (h.x = i.randInt(0, s.mapScale), h.y = i.randInt(0, s.mapScale));
                else {
                    const w = i.getDirection(h.x, h.y, u.x, u.y);
                    if (i.getDistance(h.x, h.y, u.x, u.y), u.isPlayer ? (f = f * -1 / 2, h.x += f * Fe(w), h.y += f * Xe(w), u.x -= f * Fe(w), u.y -= f * Xe(w)) : (h.x = u.x + P * Fe(w), h.y = u.y + P * Xe(w), h.xVel *= .75, h.yVel *= .75), u.dmg && u.owner != h && !(u.owner && u.owner.team && u.owner.team == h.team)) {
                        h.changeHealth(-u.dmg, u.owner, u);
                        const T = 1.5 * (u.weightM || 1);
                        h.xVel += T * Fe(w), h.yVel += T * Xe(w), u.pDmg && !(h.skin && h.skin.poisonRes) && (h.dmgOverTime.dmg = u.pDmg, h.dmgOverTime.time = 5, h.dmgOverTime.doer = u.owner), h.colDmg && u.health && (u.changeHealth(-h.colDmg) && this.disableObj(u), this.hitObj(u, i.getDirection(h.x, h.y, u.x, u.y)))
                    }
                }
                return u.zIndex > h.zIndex && (h.zIndex = u.zIndex), !0
            }
        }
        return !1
    }
}

function oa(e, t, i, s, n, a, o, d, l) {
    this.addProjectile = function(c, m, g, h, u, p, x, I, P) {
        const f = a.projectiles[p];
        let w;
        for (let T = 0; T < t.length; ++T)
            if (!t[T].active) {
                w = t[T];
                break
            } return w || (w = new e(i, s, n, a, o, d, l), w.sid = t.length, t.push(w)), w.init(p, c, m, g, u, f.dmg, h, f.scale, x), w.ignoreObj = I, w.layer = P || f.layer, w.src = f.src, w
    }
}

function aa(e, t, i, s, n, a, o, d, l) {
    this.aiTypes = [{
        id: 0,
        src: "cow_1",
        killScore: 150,
        health: 500,
        weightM: .8,
        speed: 95e-5,
        turnSpeed: .001,
        scale: 72,
        drop: ["food", 50]
    }, {
        id: 1,
        src: "pig_1",
        killScore: 200,
        health: 800,
        weightM: .6,
        speed: 85e-5,
        turnSpeed: .001,
        scale: 72,
        drop: ["food", 80]
    }, {
        id: 2,
        name: "Bull",
        src: "bull_2",
        hostile: !0,
        dmg: 20,
        killScore: 1e3,
        health: 1800,
        weightM: .5,
        speed: 94e-5,
        turnSpeed: 74e-5,
        scale: 78,
        viewRange: 800,
        chargePlayer: !0,
        drop: ["food", 100]
    }, {
        id: 3,
        name: "Bully",
        src: "bull_1",
        hostile: !0,
        dmg: 20,
        killScore: 2e3,
        health: 2800,
        weightM: .45,
        speed: .001,
        turnSpeed: 8e-4,
        scale: 90,
        viewRange: 900,
        chargePlayer: !0,
        drop: ["food", 400]
    }, {
        id: 4,
        name: "Wolf",
        src: "wolf_1",
        hostile: !0,
        dmg: 8,
        killScore: 500,
        health: 300,
        weightM: .45,
        speed: .001,
        turnSpeed: .002,
        scale: 84,
        viewRange: 800,
        chargePlayer: !0,
        drop: ["food", 200]
    }, {
        id: 5,
        name: "Quack",
        src: "chicken_1",
        dmg: 8,
        killScore: 2e3,
        noTrap: !0,
        health: 300,
        weightM: .2,
        speed: .0018,
        turnSpeed: .006,
        scale: 70,
        drop: ["food", 100]
    }, {
        id: 6,
        name: "MOOSTAFA",
        nameScale: 50,
        src: "enemy",
        hostile: !0,
        dontRun: !0,
        fixedSpawn: !0,
        spawnDelay: 6e4,
        noTrap: !0,
        colDmg: 100,
        dmg: 40,
        killScore: 8e3,
        health: 18e3,
        weightM: .4,
        speed: 7e-4,
        turnSpeed: .01,
        scale: 80,
        spriteMlt: 1.8,
        leapForce: .9,
        viewRange: 1e3,
        hitRange: 210,
        hitDelay: 1e3,
        chargePlayer: !0,
        drop: ["food", 100]
    }, {
        id: 7,
        name: "Treasure",
        hostile: !0,
        nameScale: 35,
        src: "crate_1",
        fixedSpawn: !0,
        spawnDelay: 12e4,
        colDmg: 200,
        killScore: 5e3,
        health: 2e4,
        weightM: .1,
        speed: 0,
        turnSpeed: 0,
        scale: 70,
        spriteMlt: 1
    }, {
        id: 8,
        name: "MOOFIE",
        src: "wolf_2",
        hostile: !0,
        fixedSpawn: !0,
        dontRun: !0,
        hitScare: 4,
        spawnDelay: 3e4,
        noTrap: !0,
        nameScale: 35,
        dmg: 10,
        colDmg: 100,
        killScore: 3e3,
        health: 7e3,
        weightM: .45,
        speed: .0015,
        turnSpeed: .002,
        scale: 90,
        viewRange: 800,
        chargePlayer: !0,
        drop: ["food", 1e3]
    }], this.spawn = function(c, m, g, h) {
        if (!this.aiTypes[h]) return console.error("missing ai type", h), this.spawn(c, m, g, 0);
        let u;
        for (let p = 0; p < e.length; ++p)
            if (!e[p].active) {
                u = e[p];
                break
            } return u || (u = new t(e.length, n, i, s, o, a, d, l), e.push(u)), u.init(c, m, g, h, this.aiTypes[h]), u
    }
}
const xe = Math.PI * 2,
    _t = 0;

function la(e, t, i, s, n, a, o, d) {
    this.sid = e, this.isAI = !0, this.nameIndex = n.randInt(0, a.cowNames.length - 1), this.init = function(g, h, u, p, x) {
        this.x = g, this.y = h, this.startX = x.fixedSpawn ? g : null, this.startY = x.fixedSpawn ? h : null, this.xVel = 0, this.yVel = 0, this.zIndex = 0, this.dir = u, this.dirPlus = 0, this.index = p, this.src = x.src, x.name && (this.name = x.name), this.weightM = x.weightM, this.speed = x.speed, this.killScore = x.killScore, this.turnSpeed = x.turnSpeed, this.scale = x.scale, this.maxHealth = x.health, this.leapForce = x.leapForce, this.health = this.maxHealth, this.chargePlayer = x.chargePlayer, this.viewRange = x.viewRange, this.drop = x.drop, this.dmg = x.dmg, this.hostile = x.hostile, this.dontRun = x.dontRun, this.hitRange = x.hitRange, this.hitDelay = x.hitDelay, this.hitScare = x.hitScare, this.spriteMlt = x.spriteMlt, this.nameScale = x.nameScale, this.colDmg = x.colDmg, this.noTrap = x.noTrap, this.spawnDelay = x.spawnDelay, this.minSpawnRange = x.minSpawnRange, this.maxSpawnRange = x.maxSpawnRange, this.hitWait = 0, this.waitCount = 1e3, this.moveCount = 0, this.targetDir = 0, this.active = !0, this.alive = !0, this.runFrom = null, this.chargeTarget = null, this.dmgOverTime = {}
    };
    let l = 0;
    this.update = function(g) {
        if (this.active) {
            if (this.spawnCounter) {
                if (this.spawnCounter -= g * (1 + 0), this.spawnCounter <= 0)
                    if (this.spawnCounter = 0, this.minSpawnRange || this.maxSpawnRange) {
                        const H = a.mapScale * this.minSpawnRange,
                            C = a.mapScale * this.maxSpawnRange;
                        this.x = n.randInt(H, C), this.y = n.randInt(H, C)
                    } else this.x = this.startX || n.randInt(0, a.mapScale), this.y = this.startY || n.randInt(0, a.mapScale);
                return
            }
            l -= g, l <= 0 && (this.dmgOverTime.dmg && (this.changeHealth(-this.dmgOverTime.dmg, this.dmgOverTime.doer), this.dmgOverTime.time -= 1, this.dmgOverTime.time <= 0 && (this.dmgOverTime.dmg = 0)), l = 1e3);
            let f = !1,
                w = 1;
            if (!this.zIndex && !this.lockMove && this.y >= a.mapScale / 2 - a.riverWidth / 2 && this.y <= a.mapScale / 2 + a.riverWidth / 2 && (w = .33, this.xVel += a.waterCurrent * g), this.lockMove) this.xVel = 0, this.yVel = 0;
            else if (this.waitCount > 0) {
                if (this.waitCount -= g, this.waitCount <= 0)
                    if (this.chargePlayer) {
                        let H, C, D;
                        for (var h = 0; h < i.length; ++h) i[h].alive && !(i[h].skin && i[h].skin.bullRepel) && (D = n.getDistance(this.x, this.y, i[h].x, i[h].y), D <= this.viewRange && (!H || D < C) && (C = D, H = i[h]));
                        H ? (this.chargeTarget = H, this.moveCount = n.randInt(8e3, 12e3)) : (this.moveCount = n.randInt(1e3, 2e3), this.targetDir = n.randFloat(-Math.PI, Math.PI))
                    } else this.moveCount = n.randInt(4e3, 1e4), this.targetDir = n.randFloat(-Math.PI, Math.PI)
            } else if (this.moveCount > 0) {
                var u = this.speed * w * (1 + a.MAX_SPEED * _t);
                if (this.runFrom && this.runFrom.active && !(this.runFrom.isPlayer && !this.runFrom.alive) ? (this.targetDir = n.getDirection(this.x, this.y, this.runFrom.x, this.runFrom.y), u *= 1.42) : this.chargeTarget && this.chargeTarget.alive && (this.targetDir = n.getDirection(this.chargeTarget.x, this.chargeTarget.y, this.x, this.y), u *= 1.75, f = !0), this.hitWait && (u *= .3), this.dir != this.targetDir) {
                    this.dir %= xe;
                    const H = (this.dir - this.targetDir + xe) % xe,
                        C = Math.min(Math.abs(H - xe), H, this.turnSpeed * g),
                        D = H - Math.PI >= 0 ? 1 : -1;
                    this.dir += D * C + xe
                }
                this.dir %= xe, this.xVel += u * g * Math.cos(this.dir), this.yVel += u * g * Math.sin(this.dir), this.moveCount -= g, this.moveCount <= 0 && (this.runFrom = null, this.chargeTarget = null, this.waitCount = this.hostile ? 1500 : n.randInt(1500, 6e3))
            }
            this.zIndex = 0, this.lockMove = !1;
            var p;
            const T = n.getDistance(0, 0, this.xVel * g, this.yVel * g),
                A = Math.min(4, Math.max(1, Math.round(T / 40))),
                V = 1 / A;
            for (var h = 0; h < A; ++h) {
                this.xVel && (this.x += this.xVel * g * V), this.yVel && (this.y += this.yVel * g * V), p = t.getGridArrays(this.x, this.y, this.scale);
                for (var x = 0; x < p.length; ++x)
                    for (let C = 0; C < p[x].length; ++C) p[x][C].active && t.checkCollision(this, p[x][C], V)
            }
            let W = !1;
            if (this.hitWait > 0 && (this.hitWait -= g, this.hitWait <= 0)) {
                W = !0, this.hitWait = 0, this.leapForce && !n.randInt(0, 2) && (this.xVel += this.leapForce * Math.cos(this.dir), this.yVel += this.leapForce * Math.sin(this.dir));
                var p = t.getGridArrays(this.x, this.y, this.hitRange),
                    I, P;
                for (let C = 0; C < p.length; ++C)
                    for (var x = 0; x < p[C].length; ++x) I = p[C][x], I.health && (P = n.getDistance(this.x, this.y, I.x, I.y), P < I.scale + this.hitRange && (I.changeHealth(-this.dmg * 5) && t.disableObj(I), t.hitObj(I, n.getDirection(this.x, this.y, I.x, I.y))));
                for (var x = 0; x < i.length; ++x) i[x].canSee(this) && d.send(i[x].id, "J", this.sid)
            }
            if (f || W) {
                var I, P;
                let D;
                for (var h = 0; h < i.length; ++h) I = i[h], I && I.alive && (P = n.getDistance(this.x, this.y, I.x, I.y), this.hitRange ? !this.hitWait && P <= this.hitRange + I.scale && (W ? (D = n.getDirection(I.x, I.y, this.x, this.y), I.changeHealth(-this.dmg * (1 + a.MAX_ATTACK * _t)), I.xVel += .6 * Math.cos(D), I.yVel += .6 * Math.sin(D), this.runFrom = null, this.chargeTarget = null, this.waitCount = 3e3, this.hitWait = n.randInt(0, 2) ? 0 : 600) : this.hitWait = this.hitDelay) : P <= this.scale + I.scale && (D = n.getDirection(I.x, I.y, this.x, this.y), I.changeHealth(-this.dmg * (1 + a.MAX_ATTACK * _t)), I.xVel += .55 * Math.cos(D), I.yVel += .55 * Math.sin(D)))
            }
            this.xVel && (this.xVel *= Math.pow(a.playerDecel, g)), this.yVel && (this.yVel *= Math.pow(a.playerDecel, g));
            const S = this.scale;
            this.x - S < 0 ? (this.x = S, this.xVel = 0) : this.x + S > a.mapScale && (this.x = a.mapScale - S, this.xVel = 0), this.y - S < 0 ? (this.y = S, this.yVel = 0) : this.y + S > a.mapScale && (this.y = a.mapScale - S, this.yVel = 0)
        }
    }, this.canSee = function(g) {
        if (!g || g.skin && g.skin.invisTimer && g.noMovTimer >= g.skin.invisTimer) return !1;
        const h = Math.abs(g.x - this.x) - g.scale,
            u = Math.abs(g.y - this.y) - g.scale;
        return h <= a.maxScreenWidth / 2 * 1.3 && u <= a.maxScreenHeight / 2 * 1.3
    };
    let c = 0,
        m = 0;
    this.animate = function(g) {
        this.animTime > 0 && (this.animTime -= g, this.animTime <= 0 ? (this.animTime = 0, this.dirPlus = 0, c = 0, m = 0) : m == 0 ? (c += g / (this.animSpeed * a.hitReturnRatio), this.dirPlus = n.lerp(0, this.targetAngle, Math.min(1, c)), c >= 1 && (c = 1, m = 1)) : (c -= g / (this.animSpeed * (1 - a.hitReturnRatio)), this.dirPlus = n.lerp(0, this.targetAngle, Math.max(0, c))))
    }, this.startAnim = function() {
        this.animTime = this.animSpeed = 600, this.targetAngle = Math.PI * .8, c = 0, m = 0
    }, this.changeHealth = function(g, h, u) {
        if (this.active && (this.health += g, u && (this.hitScare && !n.randInt(0, this.hitScare) ? (this.runFrom = u, this.waitCount = 0, this.moveCount = 2e3) : this.hostile && this.chargePlayer && u.isPlayer ? (this.chargeTarget = u, this.waitCount = 0, this.moveCount = 8e3) : this.dontRun || (this.runFrom = u, this.waitCount = 0, this.moveCount = 2e3)), g < 0 && this.hitRange && n.randInt(0, 1) && (this.hitWait = 500), h && h.canSee(this) && g < 0 && d.send(h.id, "8", Math.round(this.x), Math.round(this.y), Math.round(-g), 1), this.health <= 0)) {
            if (this.spawnDelay) this.spawnCounter = this.spawnDelay, this.x = -1e6, this.y = -1e6;
            else if (this.minSpawnRange || this.maxSpawnRange) {
                const p = a.mapScale * this.minSpawnRange,
                    x = a.mapScale * this.maxSpawnRange;
                this.x = n.randInt(p, x), this.y = n.randInt(p, x)
            } else this.x = this.startX || n.randInt(0, a.mapScale), this.y = this.startY || n.randInt(0, a.mapScale);
            if (this.health = this.maxHealth, this.runFrom = null, h && (o(h, this.killScore), this.drop))
                for (let p = 0; p < this.drop.length;) h.addResource(a.resourceTypes.indexOf(this.drop[p]), this.drop[p + 1]), p += 2
        }
    }
}

function ra(e) {
    this.sid = e, this.init = function(t, i, s, n, a, o, d) {
        o = o || {}, this.sentTo = {}, this.gridLocations = [], this.active = !0, this.doUpdate = o.doUpdate, this.x = t, this.y = i, this.dir = s, this.xWiggle = 0, this.yWiggle = 0, this.scale = n, this.type = a, this.id = o.id, this.owner = d, this.name = o.name, this.isItem = this.id != null, this.group = o.group, this.health = o.health, this.layer = 2, this.group != null ? this.layer = this.group.layer : this.type == 0 ? this.layer = 3 : this.type == 2 && (this.layer = 0), this.colDiv = o.colDiv || 1, this.blocker = o.blocker, this.ignoreCollision = o.ignoreCollision, this.dontGather = o.dontGather, this.hideFromEnemy = o.hideFromEnemy, this.friction = o.friction, this.projDmg = o.projDmg, this.dmg = o.dmg, this.pDmg = o.pDmg, this.pps = o.pps, this.zIndex = o.zIndex || 0, this.turnSpeed = o.turnSpeed, this.req = o.req, this.trap = o.trap, this.healCol = o.healCol, this.teleport = o.teleport, this.boostSpeed = o.boostSpeed, this.projectile = o.projectile, this.shootRange = o.shootRange, this.shootRate = o.shootRate, this.shootCount = this.shootRate, this.spawnPoint = o.spawnPoint
    }, this.changeHealth = function(t, i) {
        return this.health += t, this.health <= 0
    }, this.getScale = function(t, i) {
        return t = t || 1, this.scale * (this.isItem || this.type == 2 || this.type == 3 ? 1 : .6 * t) * (i ? 1 : this.colDiv)
    }, this.visibleToPlayer = function(t) {
        return !this.hideFromEnemy || this.owner && (this.owner == t || this.owner.team && t.team == this.owner.team)
    }, this.update = function(t) {
        this.active && (this.xWiggle && (this.xWiggle *= Math.pow(.99, t)), this.yWiggle && (this.yWiggle *= Math.pow(.99, t)), this.turnSpeed && (this.dir += this.turnSpeed * t))
    }
}
const B = [{
        id: 0,
        name: "food",
        layer: 0
    }, {
        id: 1,
        name: "walls",
        place: !0,
        limit: 30,
        layer: 0
    }, {
        id: 2,
        name: "spikes",
        place: !0,
        limit: 15,
        layer: 0
    }, {
        id: 3,
        name: "mill",
        place: !0,
        limit: 7,
        sandboxLimit: 299,
        layer: 1
    }, {
        id: 4,
        name: "mine",
        place: !0,
        limit: 1,
        layer: 0
    }, {
        id: 5,
        name: "trap",
        place: !0,
        limit: 6,
        layer: -1
    }, {
        id: 6,
        name: "booster",
        place: !0,
        limit: 12,
        sandboxLimit: 299,
        layer: -1
    }, {
        id: 7,
        name: "turret",
        place: !0,
        limit: 2,
        layer: 1
    }, {
        id: 8,
        name: "watchtower",
        place: !0,
        limit: 12,
        layer: 1
    }, {
        id: 9,
        name: "buff",
        place: !0,
        limit: 4,
        layer: -1
    }, {
        id: 10,
        name: "spawn",
        place: !0,
        limit: 1,
        layer: -1
    }, {
        id: 11,
        name: "sapling",
        place: !0,
        limit: 2,
        layer: 0
    }, {
        id: 12,
        name: "blocker",
        place: !0,
        limit: 3,
        layer: -1
    }, {
        id: 13,
        name: "teleporter",
        place: !0,
        limit: 2,
        sandboxLimit: 299,
        layer: -1
    }],
    ca = [{
        indx: 0,
        layer: 0,
        src: "arrow_1",
        dmg: 25,
        speed: 1.6,
        scale: 103,
        range: 1e3
    }, {
        indx: 1,
        layer: 1,
        dmg: 25,
        scale: 20
    }, {
        indx: 0,
        layer: 0,
        src: "arrow_1",
        dmg: 35,
        speed: 2.5,
        scale: 103,
        range: 1200
    }, {
        indx: 0,
        layer: 0,
        src: "arrow_1",
        dmg: 30,
        speed: 2,
        scale: 103,
        range: 1200
    }, {
        indx: 1,
        layer: 1,
        dmg: 16,
        scale: 20
    }, {
        indx: 0,
        layer: 0,
        src: "bullet_1",
        dmg: 50,
        speed: 3.6,
        scale: 160,
        range: 1400
    }],
    ha = [{
        id: 0,
        type: 0,
        name: "tool hammer",
        desc: "tool for gathering all resources",
        src: "hammer_1",
        length: 140,
        width: 140,
        xOff: -3,
        yOff: 18,
        dmg: 25,
        range: 65,
        gather: 1,
        speed: 300
    }, {
        id: 1,
        type: 0,
        age: 2,
        name: "hand axe",
        desc: "gathers resources at a higher rate",
        src: "axe_1",
        length: 140,
        width: 140,
        xOff: 3,
        yOff: 24,
        dmg: 30,
        spdMult: 1,
        range: 70,
        gather: 2,
        speed: 400
    }, {
        id: 2,
        type: 0,
        age: 8,
        pre: 1,
        name: "great axe",
        desc: "deal more damage and gather more resources",
        src: "great_axe_1",
        length: 140,
        width: 140,
        xOff: -8,
        yOff: 25,
        dmg: 35,
        spdMult: 1,
        range: 75,
        gather: 4,
        speed: 400
    }, {
        id: 3,
        type: 0,
        age: 2,
        name: "short sword",
        desc: "increased attack power but slower move speed",
        src: "sword_1",
        iPad: 1.3,
        length: 130,
        width: 210,
        xOff: -8,
        yOff: 46,
        dmg: 35,
        spdMult: .85,
        range: 110,
        gather: 1,
        speed: 300
    }, {
        id: 4,
        type: 0,
        age: 8,
        pre: 3,
        name: "katana",
        desc: "greater range and damage",
        src: "samurai_1",
        iPad: 1.3,
        length: 130,
        width: 210,
        xOff: -8,
        yOff: 59,
        dmg: 40,
        spdMult: .8,
        range: 118,
        gather: 1,
        speed: 300
    }, {
        id: 5,
        type: 0,
        age: 2,
        name: "polearm",
        desc: "long range melee weapon",
        src: "spear_1",
        iPad: 1.3,
        length: 130,
        width: 210,
        xOff: -8,
        yOff: 53,
        dmg: 45,
        knock: .2,
        spdMult: .82,
        range: 142,
        gather: 1,
        speed: 700
    }, {
        id: 6,
        type: 0,
        age: 2,
        name: "bat",
        desc: "fast long range melee weapon",
        src: "bat_1",
        iPad: 1.3,
        length: 110,
        width: 180,
        xOff: -8,
        yOff: 53,
        dmg: 20,
        knock: .7,
        range: 110,
        gather: 1,
        speed: 300
    }, {
        id: 7,
        type: 0,
        age: 2,
        name: "daggers",
        desc: "really fast short range weapon",
        src: "dagger_1",
        iPad: .8,
        length: 110,
        width: 110,
        xOff: 18,
        yOff: 0,
        dmg: 20,
        knock: .1,
        range: 65,
        gather: 1,
        hitSlow: .1,
        spdMult: 1.13,
        speed: 100
    }, {
        id: 8,
        type: 0,
        age: 2,
        name: "stick",
        desc: "great for gathering but very weak",
        src: "stick_1",
        length: 140,
        width: 140,
        xOff: 3,
        yOff: 24,
        dmg: 1,
        spdMult: 1,
        range: 70,
        gather: 7,
        speed: 400
    }, {
        id: 9,
        type: 1,
        age: 6,
        name: "hunting bow",
        desc: "bow used for ranged combat and hunting",
        src: "bow_1",
        req: ["wood", 4],
        length: 120,
        width: 120,
        xOff: -6,
        yOff: 0,
        projectile: 0,
        spdMult: .75,
        speed: 600
    }, {
        id: 10,
        type: 1,
        age: 6,
        name: "great hammer",
        desc: "hammer used for destroying structures",
        src: "great_hammer_1",
        length: 140,
        width: 140,
        xOff: -9,
        yOff: 25,
        dmg: 10,
        spdMult: .88,
        range: 75,
        sDmg: 7.5,
        gather: 1,
        speed: 400
    }, {
        id: 11,
        type: 1,
        age: 6,
        name: "wooden shield",
        desc: "blocks projectiles and reduces melee damage",
        src: "shield_1",
        length: 120,
        width: 120,
        shield: .2,
        xOff: 6,
        yOff: 0,
        spdMult: .7
    }, {
        id: 12,
        type: 1,
        age: 8,
        pre: 9,
        name: "crossbow",
        desc: "deals more damage and has greater range",
        src: "crossbow_1",
        req: ["wood", 5],
        aboveHand: !0,
        armS: .75,
        length: 120,
        width: 120,
        xOff: -4,
        yOff: 0,
        projectile: 2,
        spdMult: .7,
        speed: 700
    }, {
        id: 13,
        type: 1,
        age: 9,
        pre: 12,
        name: "repeater crossbow",
        desc: "high firerate crossbow with reduced damage",
        src: "crossbow_2",
        req: ["wood", 10],
        aboveHand: !0,
        armS: .75,
        length: 120,
        width: 120,
        xOff: -4,
        yOff: 0,
        projectile: 3,
        spdMult: .7,
        speed: 230
    }, {
        id: 14,
        type: 1,
        age: 6,
        name: "mc grabby",
        desc: "steals resources from enemies",
        src: "grab_1",
        length: 130,
        width: 210,
        xOff: -8,
        yOff: 53,
        dmg: 0,
        steal: 250,
        knock: .2,
        spdMult: 1.05,
        range: 125,
        gather: 0,
        speed: 700
    }, {
        id: 15,
        type: 1,
        age: 9,
        pre: 12,
        name: "musket",
        desc: "slow firerate but high damage and range",
        src: "musket_1",
        req: ["stone", 10],
        aboveHand: !0,
        rec: .35,
        armS: .6,
        hndS: .3,
        hndD: 1.6,
        length: 205,
        width: 205,
        xOff: 25,
        yOff: 0,
        projectile: 5,
        hideProjectile: !0,
        spdMult: .6,
        speed: 1500
    }],
    Ce = [{
        group: B[0],
        name: "apple",
        desc: "restores 20 health when consumed",
        req: ["food", 10],
        consume: function(e) {
            return e.changeHealth(20, e)
        },
        scale: 22,
        holdOffset: 15
    }, {
        age: 3,
        group: B[0],
        name: "cookie",
        desc: "restores 40 health when consumed",
        req: ["food", 15],
        consume: function(e) {
            return e.changeHealth(40, e)
        },
        scale: 27,
        holdOffset: 15
    }, {
        age: 7,
        group: B[0],
        name: "cheese",
        desc: "restores 30 health and another 50 over 5 seconds",
        req: ["food", 25],
        consume: function(e) {
            return e.changeHealth(30, e) || e.health < 100 ? (e.dmgOverTime.dmg = -10, e.dmgOverTime.doer = e, e.dmgOverTime.time = 5, !0) : !1
        },
        scale: 27,
        holdOffset: 15
    }, {
        group: B[1],
        name: "wood wall",
        desc: "provides protection for your village",
        req: ["wood", 10],
        projDmg: !0,
        health: 380,
        scale: 50,
        holdOffset: 20,
        placeOffset: -5
    }, {
        age: 3,
        group: B[1],
        name: "stone wall",
        desc: "provides improved protection for your village",
        req: ["stone", 25],
        health: 900,
        scale: 50,
        holdOffset: 20,
        placeOffset: -5
    }, {
        age: 7,
        pre: 1,
        group: B[1],
        name: "castle wall",
        desc: "provides powerful protection for your village",
        req: ["stone", 35],
        health: 1500,
        scale: 52,
        holdOffset: 20,
        placeOffset: -5
    }, {
        group: B[2],
        name: "spikes",
        desc: "damages enemies when they touch them",
        req: ["wood", 20, "stone", 5],
        health: 400,
        dmg: 20,
        scale: 49,
        spritePadding: -23,
        holdOffset: 8,
        placeOffset: -5
    }, {
        age: 5,
        group: B[2],
        name: "greater spikes",
        desc: "damages enemies when they touch them",
        req: ["wood", 30, "stone", 10],
        health: 500,
        dmg: 35,
        scale: 52,
        spritePadding: -23,
        holdOffset: 8,
        placeOffset: -5
    }, {
        age: 9,
        pre: 1,
        group: B[2],
        name: "poison spikes",
        desc: "poisons enemies when they touch them",
        req: ["wood", 35, "stone", 15],
        health: 600,
        dmg: 30,
        pDmg: 5,
        scale: 52,
        spritePadding: -23,
        holdOffset: 8,
        placeOffset: -5
    }, {
        age: 9,
        pre: 2,
        group: B[2],
        name: "spinning spikes",
        desc: "damages enemies when they touch them",
        req: ["wood", 30, "stone", 20],
        health: 500,
        dmg: 45,
        turnSpeed: .003,
        scale: 52,
        spritePadding: -23,
        holdOffset: 8,
        placeOffset: -5
    }, {
        group: B[3],
        name: "windmill",
        desc: "generates gold over time",
        req: ["wood", 50, "stone", 10],
        health: 400,
        pps: 1,
        turnSpeed: .0016,
        spritePadding: 25,
        iconLineMult: 12,
        scale: 45,
        holdOffset: 20,
        placeOffset: 5
    }, {
        age: 5,
        pre: 1,
        group: B[3],
        name: "faster windmill",
        desc: "generates more gold over time",
        req: ["wood", 60, "stone", 20],
        health: 500,
        pps: 1.5,
        turnSpeed: .0025,
        spritePadding: 25,
        iconLineMult: 12,
        scale: 47,
        holdOffset: 20,
        placeOffset: 5
    }, {
        age: 8,
        pre: 1,
        group: B[3],
        name: "power mill",
        desc: "generates more gold over time",
        req: ["wood", 100, "stone", 50],
        health: 800,
        pps: 2,
        turnSpeed: .005,
        spritePadding: 25,
        iconLineMult: 12,
        scale: 47,
        holdOffset: 20,
        placeOffset: 5
    }, {
        age: 5,
        group: B[4],
        type: 2,
        name: "mine",
        desc: "allows you to mine stone",
        req: ["wood", 20, "stone", 100],
        iconLineMult: 12,
        scale: 65,
        holdOffset: 20,
        placeOffset: 0
    }, {
        age: 5,
        group: B[11],
        type: 0,
        name: "sapling",
        desc: "allows you to farm wood",
        req: ["wood", 150],
        iconLineMult: 12,
        colDiv: .5,
        scale: 110,
        holdOffset: 50,
        placeOffset: -15
    }, {
        age: 4,
        group: B[5],
        name: "pit trap",
        desc: "pit that traps enemies if they walk over it",
        req: ["wood", 30, "stone", 30],
        trap: !0,
        ignoreCollision: !0,
        hideFromEnemy: !0,
        health: 500,
        colDiv: .2,
        scale: 50,
        holdOffset: 20,
        placeOffset: -5
    }, {
        age: 4,
        group: B[6],
        name: "boost pad",
        desc: "provides boost when stepped on",
        req: ["stone", 20, "wood", 5],
        ignoreCollision: !0,
        boostSpeed: 1.5,
        health: 150,
        colDiv: .7,
        scale: 45,
        holdOffset: 20,
        placeOffset: -5
    }, {
        age: 7,
        group: B[7],
        doUpdate: !0,
        name: "turret",
        desc: "defensive structure that shoots at enemies",
        req: ["wood", 200, "stone", 150],
        health: 800,
        projectile: 1,
        shootRange: 700,
        shootRate: 2200,
        scale: 43,
        holdOffset: 20,
        placeOffset: -5
    }, {
        age: 7,
        group: B[8],
        name: "platform",
        desc: "platform to shoot over walls and cross over water",
        req: ["wood", 20],
        ignoreCollision: !0,
        zIndex: 1,
        health: 300,
        scale: 43,
        holdOffset: 20,
        placeOffset: -5
    }, {
        age: 7,
        group: B[9],
        name: "healing pad",
        desc: "standing on it will slowly heal you",
        req: ["wood", 30, "food", 10],
        ignoreCollision: !0,
        healCol: 15,
        health: 400,
        colDiv: .7,
        scale: 45,
        holdOffset: 20,
        placeOffset: -5
    }, {
        age: 9,
        group: B[10],
        name: "spawn pad",
        desc: "you will spawn here when you die but it will dissapear",
        req: ["wood", 100, "stone", 100],
        health: 400,
        ignoreCollision: !0,
        spawnPoint: !0,
        scale: 45,
        holdOffset: 20,
        placeOffset: -5
    }, {
        age: 7,
        group: B[12],
        name: "blocker",
        desc: "blocks building in radius",
        req: ["wood", 30, "stone", 25],
        ignoreCollision: !0,
        blocker: 300,
        health: 400,
        colDiv: .7,
        scale: 45,
        holdOffset: 20,
        placeOffset: -5
    }, {
        age: 7,
        group: B[13],
        name: "teleporter",
        desc: "teleports you to a random point on the map",
        req: ["wood", 60, "stone", 60],
        ignoreCollision: !0,
        teleport: !0,
        health: 200,
        colDiv: .7,
        scale: 45,
        holdOffset: 20,
        placeOffset: -5
    }];
for (let e = 0; e < Ce.length; ++e) Ce[e].id = e, Ce[e].pre && (Ce[e].pre = e - Ce[e].pre);
const b = {
        groups: B,
        projectiles: ca,
        weapons: ha,
        list: Ce
    },
    bn = new hs,
    da = ["jew", "black", "baby", "child", "white", "porn", "pedo", "trump", "clinton", "hitler", "nazi", "gay", "pride", "sex", "pleasure", "touch", "poo", "kids", "rape", "white power", "nigga", "nig nog", "doggy", "rapist", "boner", "nigger", "nigg", "finger", "nogger", "nagger", "nig", "fag", "gai", "pole", "stripper", "penis", "vagina", "pussy", "nazi", "hitler", "stalin", "burn", "chamber", "cock", "peen", "dick", "spick", "nieger", "die", "satan", "n|ig", "nlg", "cunt", "c0ck", "fag", "lick", "condom", "anal", "shit", "phile", "little", "kids", "free KR", "tiny", "sidney", "ass", "kill", ".io", "(dot)", "[dot]", "mini", "whiore", "whore", "faggot", "github", "1337", "666", "satan", "senpa", "discord", "d1scord", "mistik", ".io", "senpa.io", "sidney", "sid", "senpaio", "vries", "asa"];
bn.addWords(...da);
const _i = Math.abs,
    ve = Math.cos,
    Se = Math.sin,
    Li = Math.pow,
    fa = Math.sqrt;

function ua(e, t, i, s, n, a, o, d, l, c, m, g, h, u) {
    this.id = e, this.sid = t, this.tmpScore = 0, this.team = null, this.skinIndex = 0, this.tailIndex = 0, this.hitTime = 0, this.tails = {};
    for (var p = 0; p < m.length; ++p) m[p].price <= 0 && (this.tails[m[p].id] = 1);
    this.skins = {};
    for (var p = 0; p < c.length; ++p) c[p].price <= 0 && (this.skins[c[p].id] = 1);
    this.points = 0, this.dt = 0, this.hidden = !1, this.itemCounts = {}, this.isPlayer = !0, this.pps = 0, this.moveDir = void 0, this.skinRot = 0, this.lastPing = 0, this.iconIndex = 0, this.skinColor = 0, this.spawn = function(f) {
        this.active = !0, this.alive = !0, this.lockMove = !1, this.lockDir = !1, this.minimapCounter = 0, this.chatCountdown = 0, this.shameCount = 0, this.shameTimer = 0, this.sentTo = {}, this.gathering = 0, this.autoGather = 0, this.animTime = 0, this.animSpeed = 0, this.mouseState = 0, this.buildIndex = -1, this.weaponIndex = 0, this.dmgOverTime = {}, this.noMovTimer = 0, this.maxXP = 300, this.XP = 0, this.age = 1, this.kills = 0, this.upgrAge = 2, this.upgradePoints = 0, this.x = 0, this.y = 0, this.zIndex = 0, this.xVel = 0, this.yVel = 0, this.slowMult = 1, this.dir = 0, this.dirPlus = 0, this.targetDir = 0, this.targetAngle = 0, this.maxHealth = 100, this.health = this.maxHealth, this.scale = i.playerScale, this.speed = i.playerSpeed, this.resetMoveDir(), this.resetResources(f), this.items = [0, 3, 6, 10], this.weapons = [0], this.shootCount = 0, this.weaponXP = [], this.reloads = {}
    }, this.resetMoveDir = function() {
        this.moveDir = void 0
    }, this.resetResources = function(f) {
        for (let w = 0; w < i.resourceTypes.length; ++w) this[i.resourceTypes[w]] = f ? 100 : 0
    }, this.addItem = function(f) {
        const w = l.list[f];
        if (w) {
            for (let T = 0; T < this.items.length; ++T)
                if (l.list[this.items[T]].group == w.group) return this.buildIndex == this.items[T] && (this.buildIndex = f), this.items[T] = f, !0;
            return this.items.push(f), !0
        }
        return !1
    }, this.setUserData = function(f) {
        if (f) {
            this.name = "unknown";
            let w = f.name + "";
            w = w.slice(0, i.maxNameLength), w = w.replace(/[^\w:\(\)\/? -]+/gmi, " "), w = w.replace(/[^\x00-\x7F]/g, " "), w = w.trim();
            let T = !1;
            const A = w.toLowerCase().replace(/\s/g, "").replace(/1/g, "i").replace(/0/g, "o").replace(/5/g, "s");
            for (const V of bn.list)
                if (A.indexOf(V) != -1) {
                    T = !0;
                    break
                } w.length > 0 && !T && (this.name = w), this.skinColor = 0, i.skinColors[f.skin] && (this.skinColor = f.skin)
        }
    }, this.getData = function() {
        return [this.id, this.sid, this.name, s.fixTo(this.x, 2), s.fixTo(this.y, 2), s.fixTo(this.dir, 3), this.health, this.maxHealth, this.scale, this.skinColor]
    }, this.setData = function(f) {
        this.id = f[0], this.sid = f[1], this.name = f[2], this.x = f[3], this.y = f[4], this.dir = f[5], this.health = f[6], this.maxHealth = f[7], this.scale = f[8], this.skinColor = f[9]
    };
    let x = 0;
    this.update = function(f) {
        if (!this.alive) return;
        if (this.shameTimer > 0 && (this.shameTimer -= f, this.shameTimer <= 0 && (this.shameTimer = 0, this.shameCount = 0)), x -= f, x <= 0) {
            const C = (this.skin && this.skin.healthRegen ? this.skin.healthRegen : 0) + (this.tail && this.tail.healthRegen ? this.tail.healthRegen : 0);
            C && this.changeHealth(C, this), this.dmgOverTime.dmg && (this.changeHealth(-this.dmgOverTime.dmg, this.dmgOverTime.doer), this.dmgOverTime.time -= 1, this.dmgOverTime.time <= 0 && (this.dmgOverTime.dmg = 0)), this.healCol && this.changeHealth(this.healCol, this), x = 1e3
        }
        if (!this.alive) return;
        if (this.slowMult < 1 && (this.slowMult += 8e-4 * f, this.slowMult > 1 && (this.slowMult = 1)), this.noMovTimer += f, (this.xVel || this.yVel) && (this.noMovTimer = 0), this.lockMove) this.xVel = 0, this.yVel = 0;
        else {
            let C = (this.buildIndex >= 0 ? .5 : 1) * (l.weapons[this.weaponIndex].spdMult || 1) * (this.skin && this.skin.spdMult || 1) * (this.tail && this.tail.spdMult || 1) * (this.y <= i.snowBiomeTop ? this.skin && this.skin.coldM ? 1 : i.snowSpeed : 1) * this.slowMult;
            !this.zIndex && this.y >= i.mapScale / 2 - i.riverWidth / 2 && this.y <= i.mapScale / 2 + i.riverWidth / 2 && (this.skin && this.skin.watrImm ? (C *= .75, this.xVel += i.waterCurrent * .4 * f) : (C *= .33, this.xVel += i.waterCurrent * f));
            let D = this.moveDir != null ? ve(this.moveDir) : 0,
                Y = this.moveDir != null ? Se(this.moveDir) : 0;
            const q = fa(D * D + Y * Y);
            q != 0 && (D /= q, Y /= q), D && (this.xVel += D * this.speed * C * f), Y && (this.yVel += Y * this.speed * C * f)
        }
        this.zIndex = 0, this.lockMove = !1, this.healCol = 0;
        let w;
        const T = s.getDistance(0, 0, this.xVel * f, this.yVel * f),
            A = Math.min(4, Math.max(1, Math.round(T / 40))),
            V = 1 / A;
        let W = {};
        for (var S = 0; S < A; ++S) {
            this.xVel && (this.x += this.xVel * f * V), this.yVel && (this.y += this.yVel * f * V), w = a.getGridArrays(this.x, this.y, this.scale);
            for (let C = 0; C < w.length; ++C) {
                for (let D = 0; D < w[C].length && !(w[C][D].active && !W[w[C][D].sid] && a.checkCollision(this, w[C][D], V) && (W[w[C][D].sid] = !0, !this.alive)); ++D);
                if (!this.alive) break
            }
            if (!this.alive) break
        }
        for (var H = o.indexOf(this), S = H + 1; S < o.length; ++S) o[S] != this && o[S].alive && a.checkCollision(this, o[S]);
        if (this.xVel && (this.xVel *= Li(i.playerDecel, f), this.xVel <= .01 && this.xVel >= -.01 && (this.xVel = 0)), this.yVel && (this.yVel *= Li(i.playerDecel, f), this.yVel <= .01 && this.yVel >= -.01 && (this.yVel = 0)), this.x - this.scale < 0 ? this.x = this.scale : this.x + this.scale > i.mapScale && (this.x = i.mapScale - this.scale), this.y - this.scale < 0 ? this.y = this.scale : this.y + this.scale > i.mapScale && (this.y = i.mapScale - this.scale), this.buildIndex < 0) {
            if (this.reloads[this.weaponIndex] > 0) this.reloads[this.weaponIndex] -= f, this.gathering = this.mouseState;
            else if (this.gathering || this.autoGather) {
                let C = !0;
                if (l.weapons[this.weaponIndex].gather != null) this.gather(o);
                else if (l.weapons[this.weaponIndex].projectile != null && this.hasRes(l.weapons[this.weaponIndex], this.skin ? this.skin.projCost : 0)) {
                    this.useRes(l.weapons[this.weaponIndex], this.skin ? this.skin.projCost : 0), this.noMovTimer = 0;
                    var H = l.weapons[this.weaponIndex].projectile;
                    const Y = this.scale * 2,
                        q = this.skin && this.skin.aMlt ? this.skin.aMlt : 1;
                    l.weapons[this.weaponIndex].rec && (this.xVel -= l.weapons[this.weaponIndex].rec * ve(this.dir), this.yVel -= l.weapons[this.weaponIndex].rec * Se(this.dir)), n.addProjectile(this.x + Y * ve(this.dir), this.y + Y * Se(this.dir), this.dir, l.projectiles[H].range * q, l.projectiles[H].speed * q, H, this, null, this.zIndex)
                } else C = !1;
                this.gathering = this.mouseState, C && (this.reloads[this.weaponIndex] = l.weapons[this.weaponIndex].speed * (this.skin && this.skin.atkSpd || 1))
            }
        }
    }, this.addWeaponXP = function(f) {
        this.weaponXP[this.weaponIndex] || (this.weaponXP[this.weaponIndex] = 0), this.weaponXP[this.weaponIndex] += f
    }, this.earnXP = function(f) {
        this.age < i.maxAge && (this.XP += f, this.XP >= this.maxXP ? (this.age < i.maxAge ? (this.age++, this.XP = 0, this.maxXP *= 1.2) : this.XP = this.maxXP, this.upgradePoints++, g.send(this.id, "U", this.upgradePoints, this.upgrAge), g.send(this.id, "T", this.XP, s.fixTo(this.maxXP, 1), this.age)) : g.send(this.id, "T", this.XP))
    }, this.changeHealth = function(f, w) {
        if (f > 0 && this.health >= this.maxHealth) return !1;
        f < 0 && this.skin && (f *= this.skin.dmgMult || 1), f < 0 && this.tail && (f *= this.tail.dmgMult || 1), f < 0 && (this.hitTime = Date.now()), this.health += f, this.health > this.maxHealth && (f -= this.health - this.maxHealth, this.health = this.maxHealth), this.health <= 0 && this.kill(w);
        for (let T = 0; T < o.length; ++T) this.sentTo[o[T].id] && g.send(o[T].id, "O", this.sid, this.health);
        return w && w.canSee(this) && !(w == this && f < 0) && g.send(w.id, "8", Math.round(this.x), Math.round(this.y), Math.round(-f), 1), !0
    }, this.kill = function(f) {
        f && f.alive && (f.kills++, f.skin && f.skin.goldSteal ? h(f, Math.round(this.points / 2)) : h(f, Math.round(this.age * 100 * (f.skin && f.skin.kScrM ? f.skin.kScrM : 1))), g.send(f.id, "N", "kills", f.kills, 1)), this.alive = !1, g.send(this.id, "P"), u()
    }, this.addResource = function(f, w, T) {
        !T && w > 0 && this.addWeaponXP(w), f == 3 ? h(this, w, !0) : (this[i.resourceTypes[f]] += w, g.send(this.id, "N", i.resourceTypes[f], this[i.resourceTypes[f]], 1))
    }, this.changeItemCount = function(f, w) {
        this.itemCounts[f] = this.itemCounts[f] || 0, this.itemCounts[f] += w, g.send(this.id, "S", f, this.itemCounts[f])
    }, this.buildItem = function(f) {
        const w = this.scale + f.scale + (f.placeOffset || 0),
            T = this.x + w * ve(this.dir),
            A = this.y + w * Se(this.dir);
        if (this.canBuild(f) && !(f.consume && this.skin && this.skin.noEat) && (f.consume || a.checkItemLocation(T, A, f.scale, .6, f.id, !1, this))) {
            let V = !1;
            if (f.consume) {
                if (this.hitTime) {
                    const W = Date.now() - this.hitTime;
                    this.hitTime = 0, W <= 120 ? (this.shameCount++, this.shameCount >= 8 && (this.shameTimer = 3e4, this.shameCount = 0)) : (this.shameCount -= 2, this.shameCount <= 0 && (this.shameCount = 0))
                }
                this.shameTimer <= 0 && (V = f.consume(this))
            } else V = !0, f.group.limit && this.changeItemCount(f.group.id, 1), f.pps && (this.pps += f.pps), a.add(a.objects.length, T, A, this.dir, f.scale, f.type, f, !1, this);
            V && (this.useRes(f), this.buildIndex = -1)
        }
    }, this.hasRes = function(f, w) {
        for (let T = 0; T < f.req.length;) {
            if (this[f.req[T]] < Math.round(f.req[T + 1] * (w || 1))) return !1;
            T += 2
        }
        return !0
    }, this.useRes = function(f, w) {
        if (!i.inSandbox)
            for (let T = 0; T < f.req.length;) this.addResource(i.resourceTypes.indexOf(f.req[T]), -Math.round(f.req[T + 1] * (w || 1))), T += 2
    }, this.canBuild = function(f) {
        const w = i.inSandbox ? f.group.sandboxLimit || Math.max(f.group.limit * 3, 99) : f.group.limit;
        return w && this.itemCounts[f.group.id] >= w ? !1 : i.inSandbox ? !0 : this.hasRes(f)
    }, this.gather = function() {
        this.noMovTimer = 0, this.slowMult -= l.weapons[this.weaponIndex].hitSlow || .3, this.slowMult < 0 && (this.slowMult = 0);
        const f = i.fetchVariant(this),
            w = f.poison,
            T = f.val,
            A = {};
        let V, W, S, H;
        const C = a.getGridArrays(this.x, this.y, l.weapons[this.weaponIndex].range);
        for (let Y = 0; Y < C.length; ++Y)
            for (var D = 0; D < C[Y].length; ++D)
                if (S = C[Y][D], S.active && !S.dontGather && !A[S.sid] && S.visibleToPlayer(this) && (V = s.getDistance(this.x, this.y, S.x, S.y) - S.scale, V <= l.weapons[this.weaponIndex].range && (W = s.getDirection(S.x, S.y, this.x, this.y), s.getAngleDist(W, this.dir) <= i.gatherAngle))) {
                    if (A[S.sid] = 1, S.health) {
                        if (S.changeHealth(-l.weapons[this.weaponIndex].dmg * T * (l.weapons[this.weaponIndex].sDmg || 1) * (this.skin && this.skin.bDmg ? this.skin.bDmg : 1), this)) {
                            for (let q = 0; q < S.req.length;) this.addResource(i.resourceTypes.indexOf(S.req[q]), S.req[q + 1]), q += 2;
                            a.disableObj(S)
                        }
                    } else {
                        this.earnXP(4 * l.weapons[this.weaponIndex].gather);
                        const q = l.weapons[this.weaponIndex].gather + (S.type == 3 ? 4 : 0);
                        this.addResource(S.type, q), this.skin && this.skin.extraGold && this.addResource(3, 1)
                    }
                    H = !0, a.hitObj(S, W)
                } for (var D = 0; D < o.length + d.length; ++D)
            if (S = o[D] || d[D - o.length], S != this && S.alive && !(S.team && S.team == this.team) && (V = s.getDistance(this.x, this.y, S.x, S.y) - S.scale * 1.8, V <= l.weapons[this.weaponIndex].range && (W = s.getDirection(S.x, S.y, this.x, this.y), s.getAngleDist(W, this.dir) <= i.gatherAngle))) {
                let q = l.weapons[this.weaponIndex].steal;
                q && S.addResource && (q = Math.min(S.points || 0, q), this.addResource(3, q), S.addResource(3, -q));
                let at = T;
                S.weaponIndex != null && l.weapons[S.weaponIndex].shield && s.getAngleDist(W + Math.PI, S.dir) <= i.shieldAngle && (at = l.weapons[S.weaponIndex].shield);
                const Bt = l.weapons[this.weaponIndex].dmg,
                    Ot = Bt * (this.skin && this.skin.dmgMultO ? this.skin.dmgMultO : 1) * (this.tail && this.tail.dmgMultO ? this.tail.dmgMultO : 1),
                    Ai = .3 * (S.weightM || 1) + (l.weapons[this.weaponIndex].knock || 0);
                S.xVel += Ai * ve(W), S.yVel += Ai * Se(W), this.skin && this.skin.healD && this.changeHealth(Ot * at * this.skin.healD, this), this.tail && this.tail.healD && this.changeHealth(Ot * at * this.tail.healD, this), S.skin && S.skin.dmg && this.changeHealth(-Bt * S.skin.dmg, S), S.tail && S.tail.dmg && this.changeHealth(-Bt * S.tail.dmg, S), S.dmgOverTime && this.skin && this.skin.poisonDmg && !(S.skin && S.skin.poisonRes) && (S.dmgOverTime.dmg = this.skin.poisonDmg, S.dmgOverTime.time = this.skin.poisonTime || 1, S.dmgOverTime.doer = this), S.dmgOverTime && w && !(S.skin && S.skin.poisonRes) && (S.dmgOverTime.dmg = 5, S.dmgOverTime.time = 5, S.dmgOverTime.doer = this), S.skin && S.skin.dmgK && (this.xVel -= S.skin.dmgK * ve(W), this.yVel -= S.skin.dmgK * Se(W)), S.changeHealth(-Ot * at, this, this)
            } this.sendAnimation(H ? 1 : 0)
    }, this.sendAnimation = function(f) {
        for (let w = 0; w < o.length; ++w) this.sentTo[o[w].id] && this.canSee(o[w]) && g.send(o[w].id, "K", this.sid, f ? 1 : 0, this.weaponIndex)
    };
    let I = 0,
        P = 0;
    this.animate = function(f) {
        this.animTime > 0 && (this.animTime -= f, this.animTime <= 0 ? (this.animTime = 0, this.dirPlus = 0, I = 0, P = 0) : P == 0 ? (I += f / (this.animSpeed * i.hitReturnRatio), this.dirPlus = s.lerp(0, this.targetAngle, Math.min(1, I)), I >= 1 && (I = 1, P = 1)) : (I -= f / (this.animSpeed * (1 - i.hitReturnRatio)), this.dirPlus = s.lerp(0, this.targetAngle, Math.max(0, I))))
    }, this.startAnim = function(f, w) {
        this.animTime = this.animSpeed = l.weapons[w].speed, this.targetAngle = f ? -i.hitAngle : -Math.PI, I = 0, P = 0
    }, this.canSee = function(f) {
        if (!f || f.skin && f.skin.invisTimer && f.noMovTimer >= f.skin.invisTimer) return !1;
        const w = _i(f.x - this.x) - f.scale,
            T = _i(f.y - this.y) - f.scale;
        return w <= i.maxScreenWidth / 2 * 1.3 && T <= i.maxScreenHeight / 2 * 1.3
    }
}
const ma = [{
        id: 45,
        name: "Shame!",
        dontSell: !0,
        price: 0,
        scale: 120,
        desc: "hacks are for losers"
    }, {
        id: 51,
        name: "Moo Cap",
        price: 0,
        scale: 120,
        desc: "coolest mooer around"
    }, {
        id: 50,
        name: "Apple Cap",
        price: 0,
        scale: 120,
        desc: "apple farms remembers"
    }, {
        id: 28,
        name: "Moo Head",
        price: 0,
        scale: 120,
        desc: "no effect"
    }, {
        id: 29,
        name: "Pig Head",
        price: 0,
        scale: 120,
        desc: "no effect"
    }, {
        id: 30,
        name: "Fluff Head",
        price: 0,
        scale: 120,
        desc: "no effect"
    }, {
        id: 36,
        name: "Pandou Head",
        price: 0,
        scale: 120,
        desc: "no effect"
    }, {
        id: 37,
        name: "Bear Head",
        price: 0,
        scale: 120,
        desc: "no effect"
    }, {
        id: 38,
        name: "Monkey Head",
        price: 0,
        scale: 120,
        desc: "no effect"
    }, {
        id: 44,
        name: "Polar Head",
        price: 0,
        scale: 120,
        desc: "no effect"
    }, {
        id: 35,
        name: "Fez Hat",
        price: 0,
        scale: 120,
        desc: "no effect"
    }, {
        id: 42,
        name: "Enigma Hat",
        price: 0,
        scale: 120,
        desc: "join the enigma army"
    }, {
        id: 43,
        name: "Blitz Hat",
        price: 0,
        scale: 120,
        desc: "hey everybody i'm blitz"
    }, {
        id: 49,
        name: "Bob XIII Hat",
        price: 0,
        scale: 120,
        desc: "like and subscribe"
    }, {
        id: 57,
        name: "Pumpkin",
        price: 50,
        scale: 120,
        desc: "Spooooky"
    }, {
        id: 8,
        name: "Bummle Hat",
        price: 100,
        scale: 120,
        desc: "no effect"
    }, {
        id: 2,
        name: "Straw Hat",
        price: 500,
        scale: 120,
        desc: "no effect"
    }, {
        id: 15,
        name: "Winter Cap",
        price: 600,
        scale: 120,
        desc: "allows you to move at normal speed in snow",
        coldM: 1
    }, {
        id: 5,
        name: "Cowboy Hat",
        price: 1e3,
        scale: 120,
        desc: "no effect"
    }, {
        id: 4,
        name: "Ranger Hat",
        price: 2e3,
        scale: 120,
        desc: "no effect"
    }, {
        id: 18,
        name: "Explorer Hat",
        price: 2e3,
        scale: 120,
        desc: "no effect"
    }, {
        id: 31,
        name: "Flipper Hat",
        price: 2500,
        scale: 120,
        desc: "have more control while in water",
        watrImm: !0
    }, {
        id: 1,
        name: "Marksman Cap",
        price: 3e3,
        scale: 120,
        desc: "increases arrow speed and range",
        aMlt: 1.3
    }, {
        id: 10,
        name: "Bush Gear",
        price: 3e3,
        scale: 160,
        desc: "allows you to disguise yourself as a bush"
    }, {
        id: 48,
        name: "Halo",
        price: 3e3,
        scale: 120,
        desc: "no effect"
    }, {
        id: 6,
        name: "Soldier Helmet",
        price: 4e3,
        scale: 120,
        desc: "reduces damage taken but slows movement",
        spdMult: .94,
        dmgMult: .75
    }, {
        id: 23,
        name: "Anti Venom Gear",
        price: 4e3,
        scale: 120,
        desc: "makes you immune to poison",
        poisonRes: 1
    }, {
        id: 13,
        name: "Medic Gear",
        price: 5e3,
        scale: 110,
        desc: "slowly regenerates health over time",
        healthRegen: 3
    }, {
        id: 9,
        name: "Miners Helmet",
        price: 5e3,
        scale: 120,
        desc: "earn 1 extra gold per resource",
        extraGold: 1
    }, {
        id: 32,
        name: "Musketeer Hat",
        price: 5e3,
        scale: 120,
        desc: "reduces cost of projectiles",
        projCost: .5
    }, {
        id: 7,
        name: "Bull Helmet",
        price: 6e3,
        scale: 120,
        desc: "increases damage done but drains health",
        healthRegen: -5,
        dmgMultO: 1.5,
        spdMult: .96
    }, {
        id: 22,
        name: "Emp Helmet",
        price: 6e3,
        scale: 120,
        desc: "turrets won't attack but you move slower",
        antiTurret: 1,
        spdMult: .7
    }, {
        id: 12,
        name: "Booster Hat",
        price: 6e3,
        scale: 120,
        desc: "increases your movement speed",
        spdMult: 1.16
    }, {
        id: 26,
        name: "Barbarian Armor",
        price: 8e3,
        scale: 120,
        desc: "knocks back enemies that attack you",
        dmgK: .6
    }, {
        id: 21,
        name: "Plague Mask",
        price: 1e4,
        scale: 120,
        desc: "melee attacks deal poison damage",
        poisonDmg: 5,
        poisonTime: 6
    }, {
        id: 46,
        name: "Bull Mask",
        price: 1e4,
        scale: 120,
        desc: "bulls won't target you unless you attack them",
        bullRepel: 1
    }, {
        id: 14,
        name: "Windmill Hat",
        topSprite: !0,
        price: 1e4,
        scale: 120,
        desc: "generates points while worn",
        pps: 1.5
    }, {
        id: 11,
        name: "Spike Gear",
        topSprite: !0,
        price: 1e4,
        scale: 120,
        desc: "deal damage to players that damage you",
        dmg: .45
    }, {
        id: 53,
        name: "Turret Gear",
        topSprite: !0,
        price: 1e4,
        scale: 120,
        desc: "you become a walking turret",
        turret: {
            proj: 1,
            range: 700,
            rate: 2500
        },
        spdMult: .7
    }, {
        id: 20,
        name: "Samurai Armor",
        price: 12e3,
        scale: 120,
        desc: "increased attack speed and fire rate",
        atkSpd: .78
    }, {
        id: 58,
        name: "Dark Knight",
        price: 12e3,
        scale: 120,
        desc: "restores health when you deal damage",
        healD: .4
    }, {
        id: 27,
        name: "Scavenger Gear",
        price: 15e3,
        scale: 120,
        desc: "earn double points for each kill",
        kScrM: 2
    }, {
        id: 40,
        name: "Tank Gear",
        price: 15e3,
        scale: 120,
        desc: "increased damage to buildings but slower movement",
        spdMult: .3,
        bDmg: 3.3
    }, {
        id: 52,
        name: "Thief Gear",
        price: 15e3,
        scale: 120,
        desc: "steal half of a players gold when you kill them",
        goldSteal: .5
    }, {
        id: 55,
        name: "Bloodthirster",
        price: 2e4,
        scale: 120,
        desc: "Restore Health when dealing damage. And increased damage",
        healD: .25,
        dmgMultO: 1.2
    }, {
        id: 56,
        name: "Assassin Gear",
        price: 2e4,
        scale: 120,
        desc: "Go invisible when not moving. Can't eat. Increased speed",
        noEat: !0,
        spdMult: 1.1,
        invisTimer: 1e3
    }],
    pa = [{
        id: 12,
        name: "Snowball",
        price: 1e3,
        scale: 105,
        xOff: 18,
        desc: "no effect"
    }, {
        id: 9,
        name: "Tree Cape",
        price: 1e3,
        scale: 90,
        desc: "no effect"
    }, {
        id: 10,
        name: "Stone Cape",
        price: 1e3,
        scale: 90,
        desc: "no effect"
    }, {
        id: 3,
        name: "Cookie Cape",
        price: 1500,
        scale: 90,
        desc: "no effect"
    }, {
        id: 8,
        name: "Cow Cape",
        price: 2e3,
        scale: 90,
        desc: "no effect"
    }, {
        id: 11,
        name: "Monkey Tail",
        price: 2e3,
        scale: 97,
        xOff: 25,
        desc: "Super speed but reduced damage",
        spdMult: 1.35,
        dmgMultO: .2
    }, {
        id: 17,
        name: "Apple Basket",
        price: 3e3,
        scale: 80,
        xOff: 12,
        desc: "slowly regenerates health over time",
        healthRegen: 1
    }, {
        id: 6,
        name: "Winter Cape",
        price: 3e3,
        scale: 90,
        desc: "no effect"
    }, {
        id: 4,
        name: "Skull Cape",
        price: 4e3,
        scale: 90,
        desc: "no effect"
    }, {
        id: 5,
        name: "Dash Cape",
        price: 5e3,
        scale: 90,
        desc: "no effect"
    }, {
        id: 2,
        name: "Dragon Cape",
        price: 6e3,
        scale: 90,
        desc: "no effect"
    }, {
        id: 1,
        name: "Super Cape",
        price: 8e3,
        scale: 90,
        desc: "no effect"
    }, {
        id: 7,
        name: "Troll Cape",
        price: 8e3,
        scale: 90,
        desc: "no effect"
    }, {
        id: 14,
        name: "Thorns",
        price: 1e4,
        scale: 115,
        xOff: 20,
        desc: "no effect"
    }, {
        id: 15,
        name: "Blockades",
        price: 1e4,
        scale: 95,
        xOff: 15,
        desc: "no effect"
    }, {
        id: 20,
        name: "Devils Tail",
        price: 1e4,
        scale: 95,
        xOff: 20,
        desc: "no effect"
    }, {
        id: 16,
        name: "Sawblade",
        price: 12e3,
        scale: 90,
        spin: !0,
        xOff: 0,
        desc: "deal damage to players that damage you",
        dmg: .15
    }, {
        id: 13,
        name: "Angel Wings",
        price: 15e3,
        scale: 138,
        xOff: 22,
        desc: "slowly regenerates health over time",
        healthRegen: 3
    }, {
        id: 19,
        name: "Shadow Wings",
        price: 15e3,
        scale: 138,
        xOff: 22,
        desc: "increased movement speed",
        spdMult: 1.1
    }, {
        id: 18,
        name: "Blood Wings",
        price: 2e4,
        scale: 178,
        xOff: 26,
        desc: "restores health when you deal damage",
        healD: .2
    }, {
        id: 21,
        name: "Corrupt X Wings",
        price: 2e4,
        scale: 178,
        xOff: 26,
        desc: "deal damage to players that damage you",
        dmg: .25
    }],
    Tn = {
        hats: ma,
        accessories: pa
    };

function ga(e, t, i, s, n, a, o) {
    this.init = function(c, m, g, h, u, p, x, I, P) {
        this.active = !0, this.indx = c, this.x = m, this.y = g, this.dir = h, this.skipMov = !0, this.speed = u, this.dmg = p, this.scale = I, this.range = x, this.owner = P, o && (this.sentTo = {})
    };
    const d = [];
    let l;
    this.update = function(c) {
        if (this.active) {
            let g = this.speed * c,
                h;
            if (this.skipMov ? this.skipMov = !1 : (this.x += g * Math.cos(this.dir), this.y += g * Math.sin(this.dir), this.range -= g, this.range <= 0 && (this.x += this.range * Math.cos(this.dir), this.y += this.range * Math.sin(this.dir), g = 1, this.range = 0, this.active = !1)), o) {
                for (var m = 0; m < e.length; ++m) !this.sentTo[e[m].id] && e[m].canSee(this) && (this.sentTo[e[m].id] = 1, o.send(e[m].id, "X", a.fixTo(this.x, 1), a.fixTo(this.y, 1), a.fixTo(this.dir, 2), a.fixTo(this.range, 1), this.speed, this.indx, this.layer, this.sid));
                d.length = 0;
                for (var m = 0; m < e.length + t.length; ++m) l = e[m] || t[m - e.length], l.alive && l != this.owner && !(this.owner.team && l.team == this.owner.team) && a.lineInRect(l.x - l.scale, l.y - l.scale, l.x + l.scale, l.y + l.scale, this.x, this.y, this.x + g * Math.cos(this.dir), this.y + g * Math.sin(this.dir)) && d.push(l);
                const u = i.getGridArrays(this.x, this.y, this.scale);
                for (let p = 0; p < u.length; ++p)
                    for (let x = 0; x < u[p].length; ++x) l = u[p][x], h = l.getScale(), l.active && this.ignoreObj != l.sid && this.layer <= l.layer && d.indexOf(l) < 0 && !l.ignoreCollision && a.lineInRect(l.x - h, l.y - h, l.x + h, l.y + h, this.x, this.y, this.x + g * Math.cos(this.dir), this.y + g * Math.sin(this.dir)) && d.push(l);
                if (d.length > 0) {
                    let p = null,
                        x = null,
                        I = null;
                    for (var m = 0; m < d.length; ++m) I = a.getDistance(this.x, this.y, d[m].x, d[m].y), (x == null || I < x) && (x = I, p = d[m]);
                    if (p.isPlayer || p.isAI) {
                        const P = .3 * (p.weightM || 1);
                        p.xVel += P * Math.cos(this.dir), p.yVel += P * Math.sin(this.dir), (p.weaponIndex == null || !(s.weapons[p.weaponIndex].shield && a.getAngleDist(this.dir + Math.PI, p.dir) <= n.shieldAngle)) && p.changeHealth(-this.dmg, this.owner, this.owner)
                    } else {
                        p.projDmg && p.health && p.changeHealth(-this.dmg) && i.disableObj(p);
                        for (var m = 0; m < e.length; ++m) e[m].active && (p.sentTo[e[m].id] && (p.active ? e[m].canSee(p) && o.send(e[m].id, "L", a.fixTo(this.dir, 2), p.sid) : o.send(e[m].id, "Q", p.sid)), !p.active && p.owner == e[m] && e[m].changeItemCount(p.group.id, -1))
                    }
                    this.active = !1;
                    for (var m = 0; m < e.length; ++m) this.sentTo[e[m].id] && o.send(e[m].id, "Y", this.sid, a.fixTo(x, 1))
                }
            }
        }
    }
}

function z(e, t, i, s, n) {
    this.debugLog = !1, this.baseUrl = e, this.lobbySize = i, this.devPort = t, this.lobbySpread = s, this.rawIPs = !!n, this.server = void 0, this.gameIndex = void 0, this.callback = void 0, this.errorCallback = void 0
}
z.prototype.regionInfo = {
    0: {
        name: "Local",
        latitude: 0,
        longitude: 0
    },
    "us-east": {
        name: "Miami",
        latitude: 40.1393329,
        longitude: -75.8521818
    },
    miami: {
        name: "Miami",
        latitude: 40.1393329,
        longitude: -75.8521818
    },
    "us-west": {
        name: "Silicon Valley",
        latitude: 47.6149942,
        longitude: -122.4759879
    },
    siliconvalley: {
        name: "Silicon Valley",
        latitude: 47.6149942,
        longitude: -122.4759879
    },
    gb: {
        name: "London",
        latitude: 51.5283063,
        longitude: -.382486
    },
    london: {
        name: "London",
        latitude: 51.5283063,
        longitude: -.382486
    },
    "eu-west": {
        name: "Frankfurt",
        latitude: 50.1211273,
        longitude: 8.496137
    },
    frankfurt: {
        name: "Frankfurt",
        latitude: 50.1211273,
        longitude: 8.496137
    },
    au: {
        name: "Sydney",
        latitude: -33.8479715,
        longitude: 150.651084
    },
    sydney: {
        name: "Sydney",
        latitude: -33.8479715,
        longitude: 150.651084
    },
    saopaulo: {
        name: "São Paulo",
        latitude: 23.5558,
        longitude: 46.6396
    },
    sg: {
        name: "Singapore",
        latitude: 1.3147268,
        longitude: 103.7065876
    },
    singapore: {
        name: "Singapore",
        latitude: 1.3147268,
        longitude: 103.7065876
    }
};
z.prototype.start = function(e, t, i, s) {
    if (this.callback = t, this.errorCallback = i, s) return t();
    const n = this.parseServerQuery(e);
    /* fix: parseServerQuery returns [region, name, password] — only 3 elements (indices 0-2).
       n[3] was always undefined so password was never stored, and n[2] (the password string)
       was passed as gameIndex to connect(), corrupting server selection for password-protected
       servers. gameIndex defaults to 0 here; seekServer() handles index selection otherwise. */
    n && n.length > 0 ? (this.log("Found server in query."), this.password = n[2], this.connect(n[0], n[1], 0)) : this.errorCallback("Unable to find server")
};
z.prototype.parseServerQuery = function(e) {
    /* fix: URLSearchParams constructor only takes one argument; the `!0` second arg is
       non-standard and silently ignored. Removed. */
    const t = new URLSearchParams(location.search),
        i = e || t.get("server");
    if (typeof i != "string") return [];
    const [s, n] = i.split(":");
    return [s, n, t.get("password")]
};
z.prototype.findServer = function(e, t) {
    var i = this.servers[e];
    for (let s = 0; s < i.length; s++) {
        const n = i[s];
        if (n.name === t) return n
    }
    console.warn("Could not find server in region " + e + " with serverName " + t + ".")
};
z.prototype.seekServer = function(e, t, i) {
    i == null && (i = "random"), t == null && (t = !1);
    const s = ["random"],
        n = this.lobbySize,
        a = this.lobbySpread,
        o = this.servers[e].flatMap(function(h) {
            let u = 0;
            return h.games.map(function(p) {
                const x = u++;
                return {
                    region: h.region,
                    index: h.index * h.games.length + x,
                    gameIndex: x,
                    gameCount: h.games.length,
                    playerCount: p.playerCount,
                    playerCapacity: p.playerCapacity,
                    isPrivate: p.isPrivate
                }
            })
        }).filter(function(h) {
            return !h.isPrivate
        }).filter(function(h) {
            return t ? h.playerCount == 0 && h.gameIndex >= h.gameCount / 2 : !0
        }).filter(function(h) {
            return i == "random" ? !0 : s[h.index % s.length].key == i
        }).sort(function(h, u) {
            return u.playerCount - h.playerCount
        }).filter(function(h) {
            return h.playerCount < n
        });
    if (t && o.reverse(), o.length == 0) {
        this.errorCallback("No open servers.");
        return
    }
    const d = Math.min(a, o.length);
    var m = Math.floor(Math.random() * d);
    m = Math.min(m, o.length - 1);
    const l = o[m],
        c = l.region;
    var m = Math.floor(l.index / l.gameCount);
    const g = l.index % l.gameCount;
    return this.log("Found server."), [c, m, g]
};
z.prototype.connect = function(e, t, i) {
    if (this.connected) return;
    const s = this.findServer(e, t);
    if (s == null) {
        this.errorCallback("Failed to find server for region " + e + " and serverName " + t);
        return
    }
    if (this.log("Connecting to server", s, "with game index", i), s.playerCount >= s.playerCapacity) {
        this.errorCallback("Server is already full.");
        return
    }
    window.history.replaceState(document.title, document.title, this.generateHref(e, t, this.password)), this.server = s, this.gameIndex = i, this.log("Calling callback with address", this.serverAddress(s), "on port", this.serverPort(s)), this.callback(this.serverAddress(s), this.serverPort(s), i), Ke && clearInterval(Ke)
};
z.prototype.switchServer = function(e, t) {
    this.switchingServers = !0, window.location = this.generateHref(e, t, null)
};
z.prototype.generateHref = function(e, t, i) {
    let s = window.location.href.split("?")[0];
    return s += "?server=" + e + ":" + t, i && (s += "&password=" + encodeURIComponent(i)), s
};
z.prototype.serverAddress = function(e) {
    return e.region == 0 ? "localhost" : e.key + "." + e.region + "." + this.baseUrl
};
z.prototype.serverPort = function(e) {
    return e.port
};
let Ke;

function wa(e) {
    e = e.filter(n => n.playerCount !== n.playerCapacity);
    const t = Math.min(...e.map(n => n.ping || 1 / 0)),
        i = e.filter(n => n.ping === t);
    /* fix: `!i.length > 0` evaluated as `(!i.length) > 0` which works by JS type coercion
       accident (boolean compared to number). Replaced with explicit check. */
    return i.length === 0 ? null : i.reduce((n, a) => n.playerCount > a.playerCount ? n : a)
}
z.prototype.processServers = function(e) {
    return Ke && clearInterval(Ke), new Promise(t => {
        const i = {},
            s = l => {
                const c = i[l],
                    m = c[0];
                let g = this.serverAddress(m);
                const h = this.serverPort(m);
                h && (g += `:${h}`);
                const u = `https://${g}/ping`,
                    p = new Date().getTime();
                return Promise.race([fetch(u).then(() => {
                    const x = new Date().getTime() - p;
                    c.forEach(I => {
                        I.pings = I.pings ?? [], I.pings.push(x), I.pings.length > 10 && I.pings.shift(), I.ping = Math.floor(I.pings.reduce((P, f) => P + f, 0) / I.pings.length)
                    })
                }).catch(() => {}), new Promise(x => setTimeout(() => x(), 100))])
            },
            n = async () => {
                await Promise.all(Object.keys(i).map(s)), window.blockRedraw || le.redraw()
            };
        e.forEach(l => {
            i[l.region] = i[l.region] || [], i[l.region].push(l)
        });
        for (const l in i) i[l] = i[l].sort(function(c, m) {
            return m.playerCount - c.playerCount
        });
        this.servers = i;
        let a;
        const [o, d] = this.parseServerQuery();
        e.forEach(l => {
            o === l.region && d === l.name && (l.selected = !0, a = l)
        }), n().then(n).then(() => {
            if (a) return;
            let l = wa(e);
            l || (l = e[0]), l && (l.selected = !0, window.history.replaceState(document.title, document.title, this.generateHref(l.region, l.name, this.password))), window.blockRedraw || le.redraw()
        }).then(n).catch(l => {}).finally(t), Ke = setInterval(n, 5e3)
    })
};
z.prototype.ipToHex = function(e) {
    return e.split(".").map(i => ("00" + parseInt(i).toString(16)).substr(-2)).join("").toLowerCase()
};
z.prototype.hashIP = function(e) {
    return ds(this.ipToHex(e))
};
z.prototype.log = function() {
    if (this.debugLog) return console.log.apply(void 0, arguments);
    if (console.verbose) return console.verbose.apply(void 0, arguments)
};
z.prototype.stripRegion = function(e) {
    return e.startsWith("vultr:") ? e = e.slice(6) : e.startsWith("do:") && (e = e.slice(3)), e
};
const ya = function(e, t) {
        return e.concat(t)
    },
    ka = function(e, t) {
        return t.map(e).reduce(ya, [])
    };
/* fix: polyfill was unconditionally overwriting native Array.prototype.flatMap,
   degrading performance on all modern browsers that already have it. Now only
   applies when the native method is absent. */
if (!Array.prototype.flatMap) {
    Array.prototype.flatMap = function(e) {
        return ka(e, this)
    };
}
let qi = !1;
const xa = e => {
        if (qi) return;
        qi = !0;
        const t = document.getElementById("touch-controls-left"),
            i = Ei.create({
                zone: t
            });
        i.on("start", e.onStartMoving), i.on("end", e.onStopMoving), i.on("move", e.onRotateMoving);
        const s = document.getElementById("touch-controls-right"),
            n = Ei.create({
                zone: s
            });
        n.on("start", e.onStartAttacking), n.on("end", e.onStopAttacking), n.on("move", e.onRotateAttacking), t.style.display = "block", s.style.display = "block"
    },
    va = {
        enable: xa
    };
window.loadedScript = !0;
const Sa = location.hostname !== "localhost" && location.hostname !== "127.0.0.1" && !location.hostname.startsWith("192.168."),
    Cn = location.hostname === "sandbox-dev.moomoo.io" || location.hostname === "sandbox.moomoo.io",
    Ma = location.hostname === "dev.moomoo.io" || location.hostname === "dev2.moomoo.io",
    Pn = new ta;
let ue, mt, pt;
const We = location.hostname === "localhost" || location.hostname === "127.0.0.1"; /* anticheat disabled */
true;
const Ia = !1,
    pi = We || Ia;
Cn ? (mt = "https://api-sandbox.moomoo.io", pt = "moomoo.io") : Ma ? (mt = "https://api-dev.moomoo.io", pt = "moomoo.io") : (mt = "https://api.moomoo.io", pt = "moomoo.io");
const ba = !pi,
    re = new z(pt, 443, y.maxPlayers, 5, ba);
re.debugLog = !1;

function Ta() {
    let e = !1;
    return function(t) {
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
    }(navigator.userAgent || navigator.vendor || window.opera), e
}
const Dn = Ta();
let kt = !1,
    ei = !1;

function Fi() {
    !vi || ei || (ei = !0, Sa || pi ? ue && Lt("cf:" + ue) : ue ? Lt("cf:" + ue) : Lt())
}
let ti = !1;

function Lt(e) {
    re.start(St, function(t, i, s) {
        let a = "wss" + "://" + t;
        We && (a = "wss://localhost:3000"), e && (a += "?token=" + encodeURIComponent(e)), O.connect(a, function(o) {
            if (ti) {
                ti = !1;
                return
            }
            os(), o ? zt(o) : (kt = !0, Ct())
        }, {
            A: Wa,
            B: zt,
            C: xl,
            D: Nl,
            E: zl,
            a: Jl,
            G: Tl,
            H: Vl,
            I: Xl,
            J: Fl,
            K: Pl,
            L: Wl,
            M: _l,
            N: Kl,
            O: $l,
            P: Sl,
            Q: Il,
            R: Ml,
            S: Yl,
            T: jn,
            U: Un,
            V: Nn,
            X: Ll,
            Y: ql,
            Z: Ul,
            g: $a,
            1: Za,
            2: Ka,
            3: Ja,
            4: Qa,
            5: al,
            6: dl,
            7: il,
            8: vl,
            9: el,
            0: Zl
        })
    }, function(t) {
        console.error("Vultr error:", t), alert(`Error:
` + t), zt("disconnected")
    }, We)
}

function gi() {
    return O.connected
}

function Ca() {
    const t = prompt("party key", St);
    t && (window.onbeforeunload = void 0, window.location.href = "/?server=" + t)
}
const Pa = new ia(y),
    An = Math.PI,
    me = An * 2;
Math.lerpAngle = function(e, t, i) {
    Math.abs(t - e) > An && (e > t ? t += me : e += me);
    const n = t + (e - t) * i;
    return n >= 0 && n <= me ? n : n % me
};
CanvasRenderingContext2D.prototype.roundRect = function(e, t, i, s, n) {
    return i < 2 * n && (n = i / 2), s < 2 * n && (n = s / 2), n < 0 && (n = 0), this.beginPath(), this.moveTo(e + n, t), this.arcTo(e + i, t, e + i, t + s, n), this.arcTo(e + i, t + s, e, t + s, n), this.arcTo(e, t + s, e, t, n), this.arcTo(e, t, e + i, t, n), this.closePath(), this
};
let wi;
typeof Storage < "u" && (wi = !0);

function Dt(e, t) {
    wi && localStorage.setItem(e, t)
}

function $e(e) {
    return wi ? localStorage.getItem(e) : null
}
let xt = $e("moofoll");

function Da() {
    xt || (xt = !0, Dt("moofoll", 1))
}
let En, de, Pe = 1,
    K, He, qt, Xi = Date.now();
var ne;
let U;
const N = [],
    E = [];
let te = [];
const ge = [],
    Ve = [],
    Rn = new oa(ga, Ve, E, N, X, b, y, M),
    Gi = new aa(N, la, E, b, null, y, M);
let v, Bn, r, Me = 1,
    Ft = 0,
    On = 0,
    Hn = 0,
    oe, ae, Ni, yi = 0;
let _ = y.maxScreenWidth,
    L = y.maxScreenHeight;
let De, Ae, et = !1;
document.getElementById("ad-container");
const At = document.getElementById("mainMenu"),
    we = document.getElementById("enterGame"),
    Xt = document.getElementById("promoImg");
document.getElementById("partyButton");
const Gt = document.getElementById("joinPartyButton"),
    ii = document.getElementById("settingsButton"),
    zi = ii.getElementsByTagName("span")[0],
    Yi = document.getElementById("allianceButton"),
    Ki = document.getElementById("storeButton"),
    $i = document.getElementById("chatButton"),
    Be = document.getElementById("gameCanvas"),
    k = Be.getContext("2d");
var Aa = document.getElementById("serverBrowser");
const ni = document.getElementById("nativeResolution"),
    Nt = document.getElementById("showPing");
document.getElementById("playMusic");
const tt = document.getElementById("pingDisplay"),
    Ji = document.getElementById("shutdownDisplay"),
    it = document.getElementById("menuCardHolder"),
    Je = document.getElementById("guideCard"),
    _e = document.getElementById("loadingText"),
    ki = document.getElementById("gameUI"),
    Qi = document.getElementById("actionBar"),
    Ea = document.getElementById("scoreDisplay"),
    Ra = document.getElementById("foodDisplay"),
    Ba = document.getElementById("woodDisplay"),
    Oa = document.getElementById("stoneDisplay"),
    Ha = document.getElementById("killCounter"),
    Zi = document.getElementById("leaderboardData"),
    nt = document.getElementById("nameInput"),
    se = document.getElementById("itemInfoHolder"),
    Ui = document.getElementById("ageText"),
    ji = document.getElementById("ageBarBody"),
    Ie = document.getElementById("upgradeHolder"),
    lt = document.getElementById("upgradeCounter"),
    J = document.getElementById("allianceMenu"),
    rt = document.getElementById("allianceHolder"),
    ct = document.getElementById("allianceManager"),
    G = document.getElementById("mapDisplay"),
    Qe = document.getElementById("diedText"),
    Va = document.getElementById("skinColorHolder"),
    F = G.getContext("2d");
G.width = 300;
G.height = 300;
const ce = document.getElementById("storeMenu"),
    en = document.getElementById("storeHolder"),
    be = document.getElementById("noticationDisplay"),
    Ze = Tn.hats,
    Ue = Tn.accessories;
var X = new sa(ra, ge, M, y);
const vt = "#525252",
    tn = "#3d3f42",
    Le = 5.5;
y.DAY_INTERVAL / 24;
y.DAY_INTERVAL / 2;

function Wa(e) {
    te = e.teams
}
let xi = !0;
var vi = !1;
(!pi || We) && (vi = !0);
window.onblur = function() {
    for (const k in _hkHeld) { _hkHoldStop(k); }
    _tKeyHeld = false;
    xi = !1
};
window.onfocus = function() {
    xi = !0, v && v.alive && Pi()
};
window.captchaCallbackHook = function() {
    vi = !0
};
window.captchaCallbackComplete && window.captchaCallbackHook();
window.addEventListener("keydown", function(e) {
    e.keyCode == 32 && e.target == document.body && e.preventDefault()
});
Be.oncontextmenu = function() {
    return !1
};
window.oncontextmenu = function(e) {
    e.preventDefault();
    return false;
};

let _rmbHammerActive = false;
let _rmbRestoreId    = null;

document.addEventListener("mouseup", function _rmbGlobalUp(e) {
    if (e.button === 2 && _rmbHammerActive) {
        _rmbHammerActive = false;
        if (U === 1) { U = 0; ke(); }
        if (_rmbRestoreId !== null && v && v.alive) {
            O.send("z", _rmbRestoreId, true);
            _rmbRestoreId = null;
        }
    }
});
["touch-controls-left", "touch-controls-right", "touch-controls-fullscreen", "storeMenu"].forEach(e => {
    document.getElementById(e) && (document.getElementById(e).oncontextmenu = function(t) {
        t.preventDefault()
    })
});

function zt(e) {
    kt = !1, O.close(), Si(e)
}

function Si(e, t) {
    At.style.display = "block", ki.style.display = "none", it.style.display = "none", Qe.style.display = "none", _e.style.display = "block", _e.innerHTML = e + (t ? "<a href='javascript:window.location.href=window.location.href' class='ytLink'>reload</a>" : "")
}

function _a() {
    tt.hidden = !0, _e.style.display = "none", At.style.display = "block", it.style.display = "block", ll(), Fa(), bl(), _e.style.display = "none", it.style.display = "block";
    let e = $e("moo_name") || "";
    !e.length && FRVR.profile && (e = FRVR.profile.name(), e && (e += Math.floor(Math.random() * 90) + 9)), nt.value = e || "", qa()
}
const La = We ? "1x00000000000000000000AA" : "0x4AAAAAAAMYHI96GFiJzMmp";
let gt = null;
window.onGotTurnstileToken = function(e) {
    ue = e, window.captchaCallbackHook && window.captchaCallbackHook(), we.classList.remove("disabled")
};
window.onTurnstileError = function() {
    ue = null, we.classList.add("disabled")
};
window.onTurnstileExpired = function() {
    ue = null, we.classList.add("disabled")
};

function Vn() {
    return !!(window.turnstile && typeof window.turnstile.render == "function")
}

function nn() {
    if (gt !== null) return !0;
    if (!Vn()) return !1;
    const e = document.getElementById("turnstileWidget");
    if (!e || e.offsetParent === null) return !1;
    try {
        return gt = window.turnstile.render(e, {
            sitekey: La,
            theme: "light",
            callback: window.onGotTurnstileToken,
            "error-callback": window.onTurnstileError,
            "expired-callback": window.onTurnstileExpired
        }), gt != null
    } catch (t) {
        return console.error("turnstile render failed", t), !1
    }
}
let sn = !1;

function Wn() {
    if (sn || Vn()) return;
    sn = !0;
    const e = document.createElement("script");
    e.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", e.async = !0, e.defer = !0, e.onerror = function() {
        console.error("[turnstile] api script failed to load (blocked by an extension / tracking protection?)")
    }, document.head.appendChild(e)
}
let ht = null;

function qa() {
    if (gt !== null || (Wn(), nn()) || ht) return;
    let e = 0;
    ht = setInterval(function() {
        (nn() || ++e > 100) && (clearInterval(ht), ht = null)
    }, 150)
}
Wn();
let dt = !1;

function Fa() {
    we.onclick = M.checkTrusted(function() {
        we.classList.contains("disabled") || (Si("Connecting..."), gi() ? dt ? FRVR.ads.show("interstitial").catch(console.error).finally(Ct) : (Ct(), dt = !0) : dt ? FRVR.ads.show("interstitial").catch(console.error).finally(Fi) : (Fi(), dt = !0))
    }), M.hookTouchEvents(we), Xt && (Xt.onclick = M.checkTrusted(function() {
        ls("https://krunker.io/?play=SquidGame_KB")
    }), M.hookTouchEvents(Xt)), Gt && (Gt.onclick = M.checkTrusted(function() {
        setTimeout(function() {
            Ca()
        }, 10)
    }), M.hookTouchEvents(Gt)), ii.onclick = M.checkTrusted(function() {
        cl()
    }), M.hookTouchEvents(ii), Yi.onclick = M.checkTrusted(function() {
        Ua()
    }), M.hookTouchEvents(Yi), Ki.onclick = M.checkTrusted(function() {
        ol()
    }), M.hookTouchEvents(Ki), $i.onclick = M.checkTrusted(function() {
        Yn()
    }), M.hookTouchEvents($i), G.onclick = M.checkTrusted(function() {
        Qn()
    }), M.hookTouchEvents(G)
}
let St;
const Xa = {
    view: () => {
        if (!re.servers) return;
        let e = 0;
        const t = Object.keys(re.servers).map(i => {
            const s = re.regionInfo[i].name;
            let n = 0;
            const a = re.servers[i].map(o => {
                n += o.playerCount;
                const d = o.selected;
                let l = s + " " + o.name + " [" + Math.min(o.playerCount, o.playerCapacity) + "/" + o.playerCapacity + "]";
                const c = o.name,
                    m = d ? "selected" : "";
                o.ping && o.pings?.length >= 2 ? l += ` [${Math.floor(o.ping)}ms]` : d || (l += " [?]");
                let g = {
                    value: i + ":" + c
                };
                return m && (St = i + ":" + c, g.selected = !0), le("option", g, l)
            });
            return e += n, [le("option[disabled]", `${s} - ${n} players`), a, le("option[disabled]")]
        });
        return le("select", {
            value: St,
            onfocus: () => {
                window.blockRedraw = !0
            },
            onblur: () => {
                window.blockRedraw = !1
            },
            onchange: za
        }, [t, le("option[disabled]", `All Servers - ${e} players`)])
    }
};
le.mount(Aa, Xa);
var si, oi;
location.hostname == "sandbox.moomoo.io" ? (si = "Back to MooMoo", oi = "//moomoo.io/") : (si = "Try the sandbox", oi = "//sandbox.moomoo.io/");
document.getElementById("altServer").innerHTML = "<a href='" + oi + "'>" + si + "<i class='material-icons' style='font-size:10px;vertical-align:middle'>arrow_forward_ios</i></a>";
const Ga = `${mt}/servers?v=1.27`,
    _n = async () => fetch(Ga).then(e => e.json()).then(async e => re.processServers(e)).catch(e => {
        console.error("Failed to load server data with status code:", e)
    }), Na = () => _n().then(_a).catch(e => {
        console.error("Failed to load.")
    });
window.frvrSdkInitPromise.then(() => window.FRVR.bootstrapper.complete()).then(() => Na());
const za = e => {
    if (window.blockRedraw = !1, FRVR.channelCharacteristics.allowNavigation) {
        const [t, i] = e.target.value.split(":");
        re.switchServer(t, i)
    } else kt && (kt = !1, ei = !1, ti = !0, Pt = !0, O.close())
};
document.getElementById("pre-content-container");

function Ya() {
    FRVR.ads.show("interstitial", Ct)
}
window.showPreAd = Ya;

function $(e, t, i) {
    if (v && e) {
        if (M.removeAllChildren(se), se.classList.add("visible"), M.generateElement({
                id: "itemInfoName",
                text: M.capitalizeFirst(e.name),
                parent: se
            }), M.generateElement({
                id: "itemInfoDesc",
                text: e.desc,
                parent: se
            }), !i)
            if (t) M.generateElement({
                class: "itemInfoReq",
                text: e.type ? "secondary" : "primary",
                parent: se
            });
            else {
                for (let n = 0; n < e.req.length; n += 2) M.generateElement({
                    class: "itemInfoReq",
                    html: e.req[n] + "<span class='itemInfoReqVal'> x" + e.req[n + 1] + "</span>",
                    parent: se
                });
                const s = Cn ? e.group.sandboxLimit || Math.max(e.group.limit * 3, 99) : e.group.limit;
                e.group.limit && M.generateElement({
                    class: "itemInfoLmt",
                    text: (v.itemCounts[e.group.id] || 0) + "/" + s,
                    parent: se
                })
            }
    } else se.classList.remove("visible")
}
let qe = [],
    Ee = [];

function Ka(e, t) {
    qe.push({
        sid: e,
        name: t
    }), Mi()
}

function Mi() {
    if (qe[0]) {
        const e = qe[0];
        M.removeAllChildren(be), be.style.display = "block", M.generateElement({
            class: "notificationText",
            text: e.name,
            parent: be
        }), M.generateElement({
            class: "notifButton",
            html: "<i class='material-icons' style='font-size:28px;color:#cc5151;'>&#xE14C;</i>",
            parent: be,
            onclick: function() {
                li(0)
            },
            hookTouch: !0
        }), M.generateElement({
            class: "notifButton",
            html: "<i class='material-icons' style='font-size:28px;color:#8ecc51;'>&#xE876;</i>",
            parent: be,
            onclick: function() {
                li(1)
            },
            hookTouch: !0
        })
    } else be.style.display = "none"
}

function $a(e) {
    te.push(e), J.style.display == "block" && st()
}

function Ja(e, t) {
    v && (v.team = e, v.isOwner = t, J.style.display == "block" && st())
}

function Qa(e) {
    Ee = e, J.style.display == "block" && st()
}

function Za(e) {
    for (let t = te.length - 1; t >= 0; t--) te[t].sid == e && te.splice(t, 1);
    J.style.display == "block" && st()
}

function Ua() {
    Pi(), J.style.display != "block" ? st() : ai()
}

function ai() {
    J.style.display == "block" && (J.style.display = "none")
}

function st() {
    if (v && v.alive) {
        if (Et(), ce.style.display = "none", J.style.display = "block", M.removeAllChildren(rt), v.team)
            for (var e = 0; e < Ee.length; e += 2)(function(t) {
                const i = M.generateElement({
                    class: "allianceItem",
                    style: "color:" + (Ee[t] == v.sid ? "#fff" : "rgba(255,255,255,0.6)"),
                    text: Ee[t + 1],
                    parent: rt
                });
                v.isOwner && Ee[t] != v.sid && M.generateElement({
                    class: "joinAlBtn",
                    text: "Kick",
                    onclick: function() {
                        Ln(Ee[t])
                    },
                    hookTouch: !0,
                    parent: i
                })
            })(e);
        else if (te.length)
            for (var e = 0; e < te.length; ++e)(function(i) {
                const s = M.generateElement({
                    class: "allianceItem",
                    style: "color:" + (te[i].sid == v.team ? "#fff" : "rgba(255,255,255,0.6)"),
                    text: te[i].sid,
                    parent: rt
                });
                M.generateElement({
                    class: "joinAlBtn",
                    text: "Join",
                    onclick: function() {
                        qn(i)
                    },
                    hookTouch: !0,
                    parent: s
                })
            })(e);
        else M.generateElement({
            class: "allianceItem",
            text: "No Tribes Yet",
            parent: rt
        });
        M.removeAllChildren(ct), v.team ? M.generateElement({
            class: "allianceButtonM",
            style: "width: 360px",
            text: v.isOwner ? "Delete Tribe" : "Leave Tribe",
            onclick: function() {
                Fn()
            },
            hookTouch: !0,
            parent: ct
        }) : (M.generateElement({
            tag: "input",
            type: "text",
            id: "allianceInput",
            maxLength: 7,
            placeholder: "unique name",
            onchange: t => {
                t.target.value = (t.target.value || "").slice(0, 7)
            },
            onkeypress: t => {
                if (t.key === "Enter") return t.preventDefault(), ri(), !1
            },
            parent: ct
        }), M.generateElement({
            tag: "div",
            class: "allianceButtonM",
            style: "width: 140px;",
            text: "Create",
            onclick: function() {
                ri()
            },
            hookTouch: !0,
            parent: ct
        }))
    }
}

function li(e) {
    O.send("P", qe[0].sid, e), qe.splice(0, 1), Mi()
}

function Ln(e) {
    O.send("Q", e)
}

function qn(e) {
    O.send("b", te[e].sid)
}

function ri() {
    O.send("L", document.getElementById("allianceInput").value)
}

function Fn() {
    qe = [], Mi(), O.send("N")
}
let wt, Ne, pe;
const Oe = [];
let fe;

function ja() {
    this.init = function(e, t) {
        this.scale = 0, this.x = e, this.y = t, this.active = !0
    }, this.update = function(e, t) {
        this.active && (this.scale += .05 * t, this.scale >= y.mapPingScale ? this.active = !1 : (e.globalAlpha = 1 - Math.max(0, this.scale / y.mapPingScale), e.beginPath(), e.arc(this.x / y.mapScale * G.width, this.y / y.mapScale * G.width, this.scale, 0, 2 * Math.PI), e.stroke()))
    }
}

function el(e, t) {
    for (let i = 0; i < Oe.length; ++i)
        if (!Oe[i].active) {
            fe = Oe[i];
            break
        } fe || (fe = new ja, Oe.push(fe)), fe.init(e, t)
}

function tl() {
    pe || (pe = {}), pe.x = v.x, pe.y = v.y
}

function il(e) {
    Ne = e
}

function nl(e) {
    if (v && v.alive) {
        F.clearRect(0, 0, G.width, G.height), F.strokeStyle = "#fff", F.lineWidth = 4;
        for (var t = 0; t < Oe.length; ++t) fe = Oe[t], fe.update(F, e);
        if (F.globalAlpha = 1, F.fillStyle = "#fff", R(v.x / y.mapScale * G.width, v.y / y.mapScale * G.height, 7, F, !0), F.fillStyle = "rgba(255,255,255,0.35)", v.team && Ne)
            for (var t = 0; t < Ne.length;) R(Ne[t] / y.mapScale * G.width, Ne[t + 1] / y.mapScale * G.height, 7, F, !0), t += 2;
        wt && (F.fillStyle = "#fc5553", F.font = "34px Hammersmith One", F.textBaseline = "middle", F.textAlign = "center", F.fillText("x", wt.x / y.mapScale * G.width, wt.y / y.mapScale * G.height)), pe && (F.fillStyle = "#fff", F.font = "34px Hammersmith One", F.textBaseline = "middle", F.textAlign = "center", F.fillText("x", pe.x / y.mapScale * G.width, pe.y / y.mapScale * G.height))
    }
}
let ci = 0;

function sl(e) {
    ci != e && (ci = e, Ii())
}

function ol() {
    ce.style.display != "block" ? (ce.style.display = "block", J.style.display = "none", Et(), Ii()) : hi()
}

function hi() {
    ce.style.display == "block" && (ce.style.display = "none", $())
}

function al(e, t, i) {
    if (v) {
        if (i) {
            e ? (v.tailIndex = t, v.tails && (v.tails[t] = 1)) : (v.tails && (v.tails[t] = 1));
        } else {
            e ? (v.skinIndex = t, v.skins && (v.skins[t] = 1)) : (v.skins && (v.skins[t] = 1));
        }
    }
    ce.style.display == "block" && Ii()
}

function Ii() {
    if (v) {
        M.removeAllChildren(en);
        const e = ci,
            t = e ? Ue : Ze;
        for (let i = 0; i < t.length; ++i) t[i].dontSell || function(s) {
            const n = M.generateElement({
                id: "storeDisplay" + s,
                class: "storeItem",
                onmouseout: function() {
                    $()
                },
                onmouseover: function() {
                    $(t[s], !1, !0)
                },
                parent: en
            });
            M.hookTouchEvents(n, !0), M.generateElement({
                tag: "img",
                class: "hatPreview",
                src: "./img/" + (e ? "accessories/access_" : "hats/hat_") + t[s].id + (t[s].topSprite ? "_p" : "") + ".png",
                parent: n
            }), M.generateElement({
                tag: "span",
                text: t[s].name,
                parent: n
            }), (e ? !v.tails[t[s].id] : !v.skins[t[s].id]) ? (M.generateElement({
                class: "joinAlBtn",
                style: "margin-top: 5px",
                text: "Buy",
                onclick: function() {
                    Xn(t[s].id, e)
                },
                hookTouch: !0,
                parent: n
            }), M.generateElement({
                tag: "span",
                class: "itemPrice",
                text: t[s].price,
                parent: n
            })) : (e ? v.tailIndex : v.skinIndex) == t[s].id ? M.generateElement({
                class: "joinAlBtn",
                style: "margin-top: 5px",
                text: "Unequip",
                onclick: function() {
                    di(0, e)
                },
                hookTouch: !0,
                parent: n
            }) : M.generateElement({
                class: "joinAlBtn",
                style: "margin-top: 5px",
                text: "Equip",
                onclick: function() {
                    di(t[s].id, e)
                },
                hookTouch: !0,
                parent: n
            })
        }(i)
    }
}

function di(e, t) {
    O.send("c", 0, e, t)
}

function Xn(e, t) {
    O.send("c", 1, e, t)
}

function Gn() {
    ce.style.display = "none", J.style.display = "none", Et()
}

function ll() {
    const e = $e("native_resolution");
    Yt(e ? e == "true" : typeof cordova < "u"), de = $e("show_ping") == "true", tt.hidden = !de || !et, $e("moo_moosic"), setInterval(function() {
        window.cordova && (document.getElementById("downloadButtonContainer").classList.add("cordova"), document.getElementById("mobileDownloadButtonContainer").classList.add("cordova"))
    }, 1e3), zn(), M.removeAllChildren(Qi);
    for (var t = 0; t < b.weapons.length + b.list.length; ++t)(function(i) {
        M.generateElement({
            id: "actionBarItem" + i,
            class: "actionBarItem",
            style: "display:none",
            onmouseout: function() {
                $()
            },
            parent: Qi
        })
    })(t);
    for (var t = 0; t < b.list.length + b.weapons.length; ++t)(function(s) {
        const n = document.createElement("canvas");
        n.width = n.height = 66;
        const a = n.getContext("2d");
        if (a.translate(n.width / 2, n.height / 2), a.imageSmoothingEnabled = !1, a.webkitImageSmoothingEnabled = !1, a.mozImageSmoothingEnabled = !1, b.weapons[s]) {
            a.rotate(Math.PI / 4 + Math.PI);
            var o = new Image;
            mi[b.weapons[s].src] = o, o.onload = function() {
                this.isLoaded = !0;
                const l = 1 / (this.height / this.width),
                    c = b.weapons[s].iPad || 1;
                a.drawImage(this, -(n.width * c * y.iconPad * l) / 2, -(n.height * c * y.iconPad) / 2, n.width * c * l * y.iconPad, n.height * c * y.iconPad), a.fillStyle = "rgba(0, 0, 70, 0.1)", a.globalCompositeOperation = "source-atop", a.fillRect(-n.width / 2, -n.height / 2, n.width, n.height), document.getElementById("actionBarItem" + s).style.backgroundImage = "url(" + n.toDataURL() + ")"
            }, o.src = "./img/weapons/" + b.weapons[s].src + ".png";
            var d = document.getElementById("actionBarItem" + s);
            d.onmouseover = M.checkTrusted(function() {
                $(b.weapons[s], !0)
            }), d.onclick = M.checkTrusted(function() {
                je(s, !0)
            }), M.hookTouchEvents(d)
        } else {
            var o = Di(b.list[s - b.weapons.length], !0);
            const c = Math.min(n.width - y.iconPadding, o.width);
            a.globalAlpha = 1, a.drawImage(o, -c / 2, -c / 2, c, c), a.fillStyle = "rgba(0, 0, 70, 0.1)", a.globalCompositeOperation = "source-atop", a.fillRect(-c / 2, -c / 2, c, c), document.getElementById("actionBarItem" + s).style.backgroundImage = "url(" + n.toDataURL() + ")";
            var d = document.getElementById("actionBarItem" + s);
            d.onmouseover = M.checkTrusted(function() {
                $(b.list[s - b.weapons.length])
            }), d.onclick = M.checkTrusted(function() {
                je(s - b.weapons.length)
            }), M.hookTouchEvents(d)
        }
    })(t);
    nt.onchange = i => {
        i.target.value = (i.target.value || "").slice(0, 15)
    }, nt.onkeypress = i => {
        if (i.key === "Enter") return i.preventDefault(), we.onclick(i), !1
    }, ni.checked = En, ni.onchange = M.checkTrusted(function(i) {
        Yt(i.target.checked)
    }), Nt.checked = de, Nt.onchange = M.checkTrusted(function(i) {
        de = Nt.checked, tt.hidden = !de, Dt("show_ping", de ? "true" : "false")
    })
}

function Nn(e, t) {
    e && (t ? v.weapons = e : v.items = e);
    for (var i = 0; i < b.list.length; ++i) {
        const s = b.weapons.length + i;
        document.getElementById("actionBarItem" + s).style.display = v.items.indexOf(b.list[i].id) >= 0 ? "inline-block" : "none"
    }
    for (var i = 0; i < b.weapons.length; ++i) document.getElementById("actionBarItem" + i).style.display = v.weapons[b.weapons[i].type] == b.weapons[i].id ? "inline-block" : "none"
}

function Yt(e) {
    En = e, Pe = e && window.devicePixelRatio || 1, ni.checked = e, Dt("native_resolution", e.toString()), bi()
}

function rl() {
    ot ? Je.classList.add("touch") : Je.classList.remove("touch")
}

function cl() {
    Je.classList.contains("showing") ? (Je.classList.remove("showing"), zi.innerText = "Settings") : (Je.classList.add("showing"), zi.innerText = "Close")
}

function zn() {
    let e = "";
    for (let t = 0; t < y.skinColors.length; ++t) t == yi ? e += "<div class='skinColorItem activeSkin' style='background-color:" + y.skinColors[t] + "' onclick='selectSkinColor(" + t + ")'></div>" : e += "<div class='skinColorItem' style='background-color:" + y.skinColors[t] + "' onclick='selectSkinColor(" + t + ")'></div>";
    Va.innerHTML = e
}

function hl(e) {
    yi = e, zn()
}
const ze = document.getElementById("chatBox"),
    Mt = document.getElementById("chatHolder");

function Yn() {
    ot ? setTimeout(function() {
        const e = prompt("chat message");
        e && on(e)
    }, 1) : Mt.style.display == "block" ? (ze.value && on(ze.value), Et()) : (ce.style.display = "none", J.style.display = "none", Mt.style.display = "block", ze.focus(), Pi()), ze.value = ""
}

function on(e) {
    O.send("6", e.slice(0, 30))
}

function Et() {
    ze.value = "", Mt.style.display = "none"
}

function dl(e, t) {
    const i = Rt(e);
    i && (i.chatMessage = t, i.chatCountdown = y.chatCountdown)
}
window.addEventListener("resize", M.checkTrusted(bi));

/* ── SMOOTH SCROLL ZOOM & FULLSCREEN FILL ── */
let targetZoom = 1.0;
let currentZoom = 1.0;

window.addEventListener("wheel", function(e) {
    if (e.target.id === "chatBox" || e.target.closest("#storeHolder") || e.target.closest("#allianceHolder") || e.target.closest("#guideCard")) return;
    
    const delta = e.deltaY > 0 ? -0.08 : 0.08;
    targetZoom = Math.max(0.4, Math.min(2.0, targetZoom + delta));
}, { passive: true });

function bi() {
    De = window.innerWidth;
    Ae = window.innerHeight;
    
    // Smooth zoom interpolation
    currentZoom += (targetZoom - currentZoom) * 0.15;
    
    // Dynamically expand the rendering boundaries so it fills the screen completely
    _ = y.maxScreenWidth / currentZoom;
    L = y.maxScreenHeight / currentZoom;
    
    const e = Math.max(De / _, Ae / L) * Pe;
    
    Be.width = De * Pe;
    Be.height = Ae * Pe;
    Be.style.width = De + "px";
    Be.style.height = Ae + "px";
    
    // Center the camera
    k.setTransform(e, 0, 0, e, (De * Pe - _ * e) / 2, (Ae * Pe - L * e) / 2);
}
bi();
let ot;
ye(!1);

function ye(e) {
    ot = e, rl()
}
window.setUsingTouch = ye;
let fl = document.getElementById("leaderboardButton"),
    Kn = document.getElementById("leaderboard");
fl.addEventListener("touchstart", () => {
    Kn.classList.add("is-showing")
});
const Ti = () => {
    Kn.classList.remove("is-showing")
};
document.body.addEventListener("touchend", Ti);
document.body.addEventListener("touchleave", Ti);
document.body.addEventListener("touchcancel", Ti);
if (!Dn) {
    let t = function(n) {
            n.preventDefault(), n.stopPropagation(), ye(!1), On = n.clientX, Hn = n.clientY
        },
        i = function(n) {
            ye(!1);
            if (n.button === 2) {
                n.preventDefault();
                n.stopPropagation();
                if (v && v.alive && v.weapons && v.weapons.length > 0) {
                    const breakWpn = _getBestBreakingWeapon();
                    const curWpn = b.weapons[v.weaponIndex];
                    _rmbRestoreId = curWpn ? curWpn.id : v.weapons[0];
                    _rmbHammerActive = true;
                    O.send("z", breakWpn, true);
                    U = 1;
                    ke();
                }
                return;
            }
            if (n.button === 0) {
                U != 1 && (U = 1, ke());
            }
        },
        s = function(n) {
            ye(!1);
            if (n.button === 2) {
                n.preventDefault();
                n.stopPropagation();
                if (_rmbHammerActive) {
                    _rmbHammerActive = false;
                    U = 0;
                    ke();
                    if (_rmbRestoreId !== null && v && v.alive) {
                        O.send("z", _rmbRestoreId, true);
                        _rmbRestoreId = null;
                    }
                }
                return;
            }
            if (n.button === 0) {
                U != 0 && (U = 0, ke());
            }
        };
    const e = document.getElementById("touch-controls-fullscreen");
    e.style.display = "block", e.addEventListener("mousemove", t, !1), e.addEventListener("mousedown", i, !1), e.addEventListener("mouseup", s, !1)
}
let fi = !1,
    $n;

function ul() {
    let e = 0,
        t = 0,
        i;
    if (ot) {
        if (!fi) return;
        i = $n
    }
    for (const s in bt) {
        const n = bt[s];
        e += !!ne[s] * n[0], t += !!ne[s] * n[1]
    }
    if ((e != 0 || t != 0) && (i = Math.atan2(t, e)), i !== void 0) return M.fixTo(i, 2)
}
let It;

function Ci() {
    return v ? (!v.lockDir && !ot && (It = Math.atan2(Hn - Ae / 2, On - De / 2)), M.fixTo(It || 0, 2)) : 0
}
var ne = {},
    bt = {
        87: [0, -1],
        38: [0, -1],
        83: [0, 1],
        40: [0, 1],
        65: [-1, 0],
        37: [-1, 0],
        68: [1, 0],
        39: [1, 0]
    };

function Pi() {
    for (const k in _hkHeld) { _hkHoldStop(k); }
    _tKeyHeld = false;
    ne = {}, O.send("e")
}

function Jn() {
    return J.style.display != "block" && Mt.style.display != "block"
}

function ml(e) {
    const t = e.which || e.keyCode || 0;
    if (t == 27) { Gn(); return; }
    if (!v || !v.alive || !Jn() || ne[t]) return;
    ne[t] = 1;

    // ── T key: damage boost hat trigger on swing ──
    if (t == 84) { _tKeyHeld = true; return; }

    // ── Hotkey place: instant 0ms trigger + hold-to-repeat ──
    if (_HK_SLOT[t] !== undefined) { _hkHoldStart(t, _HK_SLOT[t]); return; }

    // ── Original key handling ──
    if (t == 69) { wl(); return; }
    if (t == 67) { tryDoubleHit(); return; }
    if (t == 88) { gl(); return; }
    if (v.weapons[t - 49] != null) { je(v.weapons[t - 49], !0); return; }
    if (v.items[t - 49 - v.weapons.length] != null) { je(v.items[t - 49 - v.weapons.length]); return; }
    if (t == 81) { je(v.items[0]); return; }
    if (bt[t]) { Tt(); return; }
    if (t == 32) { U = 1; ke(); }
}
window.addEventListener("keydown", M.checkTrusted(ml));

function pl(e) {
    if (v && v.alive) {
        const t = e.which || e.keyCode || 0;
        if (t == 13) {
            if (J.style.display === "block") return;
            Yn()
        } else {
            if (t == 84) { _tKeyHeld = false; }
            // ── Stop hold loop on key release ──
            if (_HK_SLOT[t] !== undefined) {
                _hkHoldStop(t);
            }
            Jn() && ne[t] && (ne[t] = 0, bt[t] ? Tt() : t == 32 && (U = 0, ke()))
        }
    }
}
window.addEventListener("keyup", M.checkTrusted(pl));

function ke() {
    if (v && v.alive) {
        O.send("F", U, v.buildIndex >= 0 ? Ci() : null);
        if (U === 1 && v.buildIndex < 0) {
            if (Date.now() >= _nextAttackTime) {
                _triggerAttackSwing();
            }
        }
    }
}
let Kt;

function Tt() {
    const e = ul();
    (Kt == null || e == null || Math.abs(e - Kt) > .3) && (O.send("9", e), Kt = e)
}

function gl() {
    v.lockDir = v.lockDir ? 0 : 1, O.send("K", 0)
}

function Qn() {
    O.send("S", 1)
}

function wl() {
    O.send("K", 1)
}

function je(e, t) {
    O.send("z", e, t)
}

// ═══════════════════════════════════════════════════════════════════════════════
// HOTKEY PLACE SYSTEM (Instant 0ms Activation + Fast Repeat on Hold)
//
// Key mappings:
//   V (86) → items[1] (Walls)
//   R (82) → items[2] (Spikes)
//   Z (90) → items[3] (Windmill)
//   N (78) → items[3] (Windmill alt)
//   F (70) → items[4] (Traps / Boosters)
//   G (71) → items[5] (Turrets / Special)
// ═══════════════════════════════════════════════════════════════════════════════

const _HK_SLOT = {
    86: 1, // V → items[1] (Walls)
    82: 2, // R → items[2] (Spikes)
    90: 3, // Z → items[3] (Windmill)
    78: 3, // N → items[3] (Windmill alt)
    70: 4, // F → items[4] (Traps / Boosters)
    71: 5, // G → items[5] (Turrets / Special)
};

// { keyCode: { slotIndex: number, intervalId: number } }
const _hkHeld = {};

function _getItemForSlot(slotIndex) {
    if (!v) return null;
    if (v.items && v.items[slotIndex] != null) {
        return v.items[slotIndex];
    }
    const targetGroups = {
        1: [1],                      // Walls
        2: [2],                      // Spikes
        3: [3],                      // Mills
        4: [5, 6, 4, 11],           // Traps, Boosters, Mines, Saplings
        5: [7, 9, 8, 12, 13, 10]    // Turrets, Healing, Platforms, Blockers, Teleporters, Spawn
    }[slotIndex];

    if (targetGroups && v.items && b && b.list) {
        for (let i = 0; i < v.items.length; i++) {
            const id = v.items[i];
            const itemObj = b.list[id];
            if (itemObj && itemObj.group && targetGroups.indexOf(itemObj.group.id) !== -1) {
                return id;
            }
        }
    }

    const fallbacks = {
        1: 3,   // Wood Wall
        2: 6,   // Spikes
        3: 10,  // Windmill
        4: 15,  // Pit Trap
        5: 17   // Turret
    };
    return fallbacks[slotIndex] != null ? fallbacks[slotIndex] : null;
}

function _hkDoPlace(slotIndex) {
    if (!v || !v.alive) return;
    const itemId = _getItemForSlot(slotIndex);
    if (itemId == null) return;

    let restoreId;
    if (_rmbHammerActive) {
        restoreId = _getBestBreakingWeapon();
    } else {
        const curWpnIdx = (v.weaponIndex != null) ? v.weaponIndex : 0;
        restoreId = (v.weapons && v.weapons[curWpnIdx] != null)
            ? v.weapons[curWpnIdx]
            : ((v.weapons && v.weapons[0]) || 0);
    }
    const angle = Ci();

    // 1. Select the item and trigger placement
    O.send("z", itemId, false);
    O.send("F", 1, angle);
    O.send("F", 0, angle);

    // 2. Queue the re-equip so it doesn't overwrite the active item in the current packet batch
    queueMicrotask(function() {
        if (!v || !v.alive) return;
        O.send("z", restoreId, true);
        if (U === 1) {
            O.send("F", 1, Ci());
        }
    });
}

function _hkHoldStart(keyCode, slotIndex) {
    if (_hkHeld[keyCode]) return;
    // Initial immediate placement on keydown
    _hkDoPlace(slotIndex);
    // Mark slot as held (Jl will handle subsequent ticks)
    _hkHeld[keyCode] = slotIndex;
}

function _hkHoldStop(keyCode) {
    delete _hkHeld[keyCode];
}

function Ct() {
    tt.hidden = !de, window.onbeforeunload = function(e) {
        return "Are you sure?"
    }, window.FRVR && window.FRVR.tracker.levelStart("game_start"), Dt("moo_name", nt.value), !et && gi() && (et = !0, Pa.stop("menu"), Si("Loading..."), O.send("M", {
        name: nt.value,
        moofoll: xt,
        skin: yi
    })), yl()
}

function yl() {
    var e = document.getElementById("ot-sdk-btn-floating");
    e && (e.style.display = "none")
}

function kl() {
    var e = document.getElementById("ot-sdk-btn-floating");
    e && (e.style.display = "block")
}
let Pt = !0,
    $t = !1;

function xl(e) {
    _e.style.display = "none", it.style.display = "block", At.style.display = "none", ne = {}, Bn = e, U = 0, et = !0, Pt && (Pt = !1, ge.length = 0), Dn && va.enable({
        onStartMoving: () => {
            hi(), ai(), ye(!0), fi = !0
        },
        onStopMoving: () => {
            fi = !1, Tt()
        },
        onRotateMoving: (t, i) => {
            i.force < .25 || ($n = -i.angle.radian, Tt(), $t || (It = -i.angle.radian))
        },
        onStartAttacking: () => {
            hi(), ai(), ye(!0), $t = !0, v.buildIndex < 0 && (U = 1, ke())
        },
        onStopAttacking: () => {
            v.buildIndex >= 0 && (U = 1, ke()), U = 0, ke(), $t = !1
        },
        onRotateAttacking: (t, i) => {
            i.force < .25 || (It = -i.angle.radian)
        }
    })
}

function vl(e, t, i, s) {
    Pn.showText(e, t, 50, .18, 500, Math.abs(i), i >= 0 ? "#fff" : "#8ecc51");
}
let yt = 99999;

function Sl() {
    for (const k in _hkHeld) { _hkHoldStop(k); }
    _tKeyHeld = false;
    if (_hatOverrideTimer) { clearTimeout(_hatOverrideTimer); _hatOverrideTimer = null; }
    if (_accOverrideTimer) { clearTimeout(_accOverrideTimer); _accOverrideTimer = null; }
    et = !1, kl();
    if (v) v.alive = false;
    
    // Reset heal & shame state
    localShame = 0;
    lastHitTime = 0;

    try {
        factorem.refreshAds([2], !0)
    } catch {}

    ki.style.display = "none", Gn(), wt = {
        x: v.x,
        y: v.y
    }, _e.style.display = "none", Qe.style.display = "block", Qe.style.fontSize = "0px", yt = 0, setTimeout(function() {
        it.style.display = "block", At.style.display = "block", Qe.style.display = "none"
    }, y.deathFadeout), _n()
}

function Ml(e) {
    v && X.removeAllItems(e)
}

function Il(e) {
    X.disableBySid(e)
}

function Zn() {
    Ea.innerText = v.points, Ra.innerText = v.food, Ba.innerText = v.wood, Oa.innerText = v.stone, Ha.innerText = v.kills
}
const Ye = {},
    Jt = ["crown", "skull"];

function bl() {
    for (let e = 0; e < Jt.length; ++e) {
        const t = new Image;
        t.onload = function() {
            this.isLoaded = !0
        }, t.src = "./img/icons/" + Jt[e] + ".png", Ye[Jt[e]] = t
    }
}
const Te = [];

function Un(e, t) {
    if (v.upgradePoints = e, v.upgrAge = t, e > 0) {
        Te.length = 0, M.removeAllChildren(Ie);
        for (var i = 0; i < b.weapons.length; ++i)
            if (b.weapons[i].age == t && (b.weapons[i].pre == null || v.weapons.indexOf(b.weapons[i].pre) >= 0)) {
                var s = M.generateElement({
                    id: "upgradeItem" + i,
                    class: "actionBarItem",
                    onmouseout: function() {
                        $()
                    },
                    parent: Ie
                });
                s.style.backgroundImage = document.getElementById("actionBarItem" + i).style.backgroundImage, Te.push(i)
            } for (var i = 0; i < b.list.length; ++i)
            if (b.list[i].age == t && (b.list[i].pre == null || v.items.indexOf(b.list[i].pre) >= 0)) {
                const a = b.weapons.length + i;
                var s = M.generateElement({
                    id: "upgradeItem" + a,
                    class: "actionBarItem",
                    onmouseout: function() {
                        $()
                    },
                    parent: Ie
                });
                s.style.backgroundImage = document.getElementById("actionBarItem" + a).style.backgroundImage, Te.push(a)
            } for (var i = 0; i < Te.length; i++)(function(a) {
            const o = document.getElementById("upgradeItem" + a);
            o.onmouseover = function() {
                b.weapons[a] ? $(b.weapons[a], !0) : $(b.list[a - b.weapons.length])
            }, o.onclick = M.checkTrusted(function() {
                O.send("H", a)
            }), M.hookTouchEvents(o)
        })(Te[i]);
        Te.length ? (Ie.style.display = "block", lt.style.display = "block", lt.innerHTML = "SELECT ITEMS (" + e + ")") : (Ie.style.display = "none", lt.style.display = "none", $())
    } else Ie.style.display = "none", lt.style.display = "none", $()
}

function jn(e, t, i) {
    e != null && (v.XP = e), t != null && (v.maxXP = t), i != null && (v.age = i), i == y.maxAge ? (Ui.innerHTML = "MAX AGE", ji.style.width = "100%") : (Ui.innerHTML = "AGE " + v.age, ji.style.width = v.XP / v.maxXP * 100 + "%")
}

function Tl(e) {
    M.removeAllChildren(Zi);
    let t = 1;
    for (let i = 0; i < e.length; i += 3)(function(s) {
        M.generateElement({
            class: "leaderHolder",
            parent: Zi,
            children: [M.generateElement({
                class: "leaderboardItem",
                style: "color:" + (e[s] == Bn ? "#fff" : "rgba(255,255,255,0.6)"),
                text: t + ". " + (e[s + 1] != "" ? e[s + 1] : "unknown")
            }), M.generateElement({
                class: "leaderScore",
                text: M.kFormat(e[s + 2]) || "0"
            })]
        })
    })(i), t++
}
let an = null;

function Cl() {
    {
        if (v && (!qt || He - qt >= 1e3 / y.clientSendRate)) {
            qt = He;
            const c = Ci();
            an !== c && (an = c, O.send("D", c))
        }
        if (yt < 120 && (yt += .1 * K, Qe.style.fontSize = Math.min(Math.round(yt), 120) + "px"), v) {
            const c = M.getDistance(oe, ae, v.x, v.y),
                m = M.getDirection(v.x, v.y, oe, ae),
                g = Math.min(c * .01 * K, c);
            c > .05 ? (oe += g * Math.cos(m), ae += g * Math.sin(m)) : (oe = v.x, ae = v.y)
        } else oe = y.mapScale / 2, ae = y.mapScale / 2;
        const o = He - 1e3 / y.serverUpdateRate;
        for (var e, t = 0; t < E.length + N.length; ++t)
            if (r = E[t] || N[t - E.length], r && r.visible)
                if (r.forcePos) r.x = r.x2, r.y = r.y2, r.dir = r.d2;
                else {
                    const c = r.t2 - r.t1,
                        g = (o - r.t1) / c,
                        h = 170;
                    r.dt += K;
                    const u = Math.min(1.7, r.dt / h);
                    var e = r.x2 - r.x1;
                    r.x = r.x1 + e * u, e = r.y2 - r.y1, r.y = r.y1 + e * u, r.dir = Math.lerpAngle(r.d2, r.d1, Math.min(1.2, g))
                } const d = oe - _ / 2,
            l = ae - L / 2;
        y.snowBiomeTop - l <= 0 && y.mapScale - y.snowBiomeTop - l >= L ? (k.fillStyle = "#b6db66", k.fillRect(0, 0, _, L)) : y.mapScale - y.snowBiomeTop - l <= 0 ? (k.fillStyle = "#dbc666", k.fillRect(0, 0, _, L)) : y.snowBiomeTop - l >= L ? (k.fillStyle = "#fff", k.fillRect(0, 0, _, L)) : y.snowBiomeTop - l >= 0 ? (k.fillStyle = "#fff", k.fillRect(0, 0, _, y.snowBiomeTop - l), k.fillStyle = "#b6db66", k.fillRect(0, y.snowBiomeTop - l, _, L - (y.snowBiomeTop - l))) : (k.fillStyle = "#b6db66", k.fillRect(0, 0, _, y.mapScale - y.snowBiomeTop - l), k.fillStyle = "#dbc666", k.fillRect(0, y.mapScale - y.snowBiomeTop - l, _, L - (y.mapScale - y.snowBiomeTop - l))), Pt || (Me += Ft * y.waveSpeed * K, Me >= y.waveMax ? (Me = y.waveMax, Ft = -1) : Me <= 1 && (Me = Ft = 1), k.globalAlpha = 1, k.fillStyle = "#dbc666", cn(d, l, k, y.riverPadding), k.fillStyle = "#91b2db", cn(d, l, k, (Me - 1) * 250)), k.globalAlpha = 1, k.strokeStyle = vt, Ge(-1, d, l), k.globalAlpha = 1, k.lineWidth = Le, ln(0, d, l), hn(d, l, 0), k.globalAlpha = 1;
        for (var t = 0; t < N.length; ++t) r = N[t], r.active && r.visible && (r.animate(K), k.save(), k.translate(r.x - d, r.y - l), k.rotate(r.dir + r.dirPlus - Math.PI / 2), Gl(r, k), k.restore());
        if (Ge(0, d, l), ln(1, d, l), Ge(1, d, l), hn(d, l, 1), Ge(2, d, l), Ge(3, d, l), k.fillStyle = "#000", k.globalAlpha = .09, d <= 0 && k.fillRect(0, 0, -d, L), y.mapScale - d <= _) {
            var s = Math.max(0, -l);
            k.fillRect(y.mapScale - d, s, _ - (y.mapScale - d), L - s)
        }
        if (l <= 0 && k.fillRect(-d, 0, _ + d, -l), y.mapScale - l <= L) {
            var n = Math.max(0, -d);
            let c = 0;
            y.mapScale - d <= _ && (c = _ - (y.mapScale - d)), k.fillRect(n, y.mapScale - l, _ - n - c, L - (y.mapScale - l))
        }
        k.globalAlpha = 1, k.fillStyle = "rgba(0, 0, 70, 0.35)", k.fillRect(0, 0, _, L), k.strokeStyle = tn;
        /* ── ESP: hitboxes + player range ring ── */
        (function _drawESP() {
            k.save();

            /* ── Game objects: trees, rocks, bushes, walls, spikes, placed items ── */
            k.lineWidth = 2;
            k.setLineDash([4, 4]);
            for (let _gi = 0; _gi < ge.length; _gi++) {
                const _go = ge[_gi];
                if (!_go.active) continue;
                const _gx = _go.x + (_go.xWiggle || 0) - d;
                const _gy = _go.y + (_go.yWiggle || 0) - l;
                /* gather-hit radius:
                   The actual hit check in gather() is: dist(player_center, obj_center) - obj.scale <= weapon.range
                   Rearranged: hit when dist <= weapon.range + obj.scale
                   The player ring is drawn at player.scale + weapon.range from player center (the sword tip).
                   For the two rings to "just touch" = just hit, the object ring should be:
                     obj_ring = obj.scale - player.scale
                   ALL objects (natural AND placed): gather hit check is dist - obj.scale <= weapon.range
                   → circles just-touch = hit when: (player.scale + weapon.range) + obj_ring = weapon.range + obj.scale
                   → obj_ring = obj.scale - player.scale
                   colDiv is a MOVEMENT COLLISION modifier only — the gather/attack check always uses raw S.scale.
                   Previous version incorrectly divided by colDiv for items, making traps (colDiv=0.2) show as
                   250px circles (50 / 0.2 = 250) and all other items show as ~35px too large.
                   Trees  (scale 175): 175 - 35 = 140
                   Bushes (scale  85):  85 - 35 =  50
                   Rocks  (scale  85):  85 - 35 =  50
                   Walls  (scale  50):  50 - 35 =  15  (small but correct — walls are hard to gather from)
                   Spikes (scale  49):  49 - 35 =  14
                   Trap   (scale  50):  50 - 35 =  15  (was 50/0.2=250 → now fixed) */
                const _gr = Math.max(4, _go.scale - y.playerScale);
                k.globalAlpha = 0.55;
                /* owner-placed structures → blue; natural world objects → cyan */
                k.strokeStyle = _go.isItem ? '#4da6ff' : '#00e5ff';
                k.beginPath();
                k.arc(_gx, _gy, _gr, 0, Math.PI * 2);
                k.stroke();
            }

            /* ── AI / Animals ── */
            /* gather hit check for players AND AIs uses dist - ai.scale * 1.8 <= weapon.range
               (note the 1.8 multiplier — separate from world-object check which uses raw scale)
               → ai_ring = ai.scale * 1.8 - player.scale
               Wolf (84):  84*1.8-35 = 116   Cow (72):  72*1.8-35 = 95
               Bull (78):  78*1.8-35 = 105   Bully (90): 90*1.8-35 = 127  */
            k.lineWidth = 2;
            k.setLineDash([6, 3]);
            k.strokeStyle = '#ff9900';
            for (let _ni = 0; _ni < N.length; _ni++) {
                const _ai = N[_ni];
                if (!_ai.active || !_ai.visible) continue;
                k.globalAlpha = 0.6;
                k.beginPath();
                k.arc(_ai.x - d, _ai.y - l, Math.max(4, _ai.scale * 1.8 - y.playerScale), 0, Math.PI * 2);
                k.stroke();
            }

            /* ── Players ── */
            k.lineWidth = 2.5;
            k.setLineDash([]);
            for (let _ei = 0; _ei < E.length; _ei++) {
                const _pl = E[_ei];
                if (!_pl.visible) continue;
                const _isSelf = _pl === v;
                const _isAlly = v && !_isSelf && _pl.team && _pl.team === v.team;
                k.globalAlpha = 0.7;
                k.strokeStyle = _isSelf ? '#ffff00' : _isAlly ? '#00ff55' : '#ff2222';
                k.beginPath();
                k.arc(_pl.x - d, _pl.y - l, Math.max(4, _pl.scale), 0, Math.PI * 2);
                k.stroke();
            }

            /* ── Local-player weapon range ring ── */
            if (v && v.alive && v.buildIndex < 0) {
                const _wp = b.weapons[v.weaponIndex];
                let _ringR = 0;
                if (_wp) {
                    if (_wp.range) {
                        /* melee/gather tool: reach extends beyond player body */
                        _ringR = v.scale + _wp.range;
                    } else if (_wp.projectile != null) {
                        /* ranged weapon: full projectile travel distance */
                        const _pr = b.projectiles[_wp.projectile];
                        if (_pr && _pr.range) _ringR = v.scale + _pr.range;
                    }
                }
                if (_ringR > 0) {
                    /* animated pulsing opacity for the range ring */
                    const _pulse = 0.55 + 0.2 * Math.sin(Date.now() / 300);
                    k.globalAlpha = _pulse;
                    k.strokeStyle = '#ff0000';
                    k.lineWidth = 2.5;
                    k.setLineDash([12, 6]);
                    k.shadowColor = '#ff0000';
                    k.shadowBlur = 8;
                    k.beginPath();
                    k.arc(v.x - d, v.y - l, _ringR, 0, Math.PI * 2);
                    k.stroke();
                    k.shadowBlur = 0;
                }
            }

            k.setLineDash([]);
            k.globalAlpha = 1;
            k.restore();
        })();
        /* ── end ESP ── */
        for (var t = 0; t < E.length + N.length; ++t)
            if (r = E[t] || N[t - E.length], r.visible && (r.skinIndex != 10 || r == v || r.team && r.team == v.team)) {
                const m = (r.team ? "[" + r.team + "] " : "") + (r.name || "");
                if (m != "") {
                    // ── DRAW SHAME SCORE TO THE LEFT OF LOCAL PLAYER'S NAME ──
                    if (r === v) {
                        k.save();
                        k.font = "bold 22px Hammersmith One";
                        k.textBaseline = "middle";
                        k.textAlign = "right";

                        // Pick colour based on native shameCount (server-synced to client)
                        const _sc = v.shameCount || 0;
                        const _st = v.shameTimer  || 0;
                        let shameColor;
                        if (_st > 0) {
                            // Shame lockout – pulse red/orange
                            shameColor = (Math.floor(performance.now() / 300) % 2 === 0)
                                ? "#ff3333" : "#ff8800";
                        } else if (_sc >= 5) {
                            shameColor = "#ff8800"; // warning orange
                        } else if (_sc >= 3) {
                            shameColor = "#ffe033"; // yellow caution
                        } else {
                            shameColor = "#8ecc51"; // safe green
                        }

                        // Display text: countdown seconds when locked, else bare count
                        const shameText = _st > 0
                            ? `${Math.ceil(_st / 1000)}s`
                            : `${_sc}`;

                        // Measure name at the name font before switching
                        k.font = (r.nameScale || 30) + "px Hammersmith One";
                        const nameWidth = k.measureText(m).width;

                        k.font = "bold 22px Hammersmith One";
                        const shameWidth = k.measureText(shameText).width;

                        // Anchor to right-edge of text block = left edge of name – gap
                        const nameLeft = (r.x - d) - nameWidth / 2;
                        const shameX   = nameLeft - 10;
                        const shameY   = r.y - l - r.scale - y.nameY;

                        k.lineWidth   = 5;
                        k.lineJoin    = "round";
                        k.strokeStyle = "#000";
                        k.strokeText(shameText, shameX, shameY);
                        k.fillStyle   = shameColor;
                        k.fillText(shameText, shameX, shameY);
                        k.restore();
                    }
                
                    if (k.font = (r.nameScale || 30) + "px Hammersmith One", k.fillStyle = "#fff", k.textBaseline = "middle", k.textAlign = "center", k.lineWidth = r.nameScale ? 11 : 8, k.lineJoin = "round", k.strokeText(m, r.x - d, r.y - l - r.scale - y.nameY), k.fillText(m, r.x - d, r.y - l - r.scale - y.nameY), r.isLeader && Ye.crown.isLoaded) {
                        var a = y.crownIconScale,
                            n = r.x - d - a / 2 - k.measureText(m).width / 2 - y.crownPad;
                        k.drawImage(Ye.crown, n, r.y - l - r.scale - y.nameY - a / 2 - 5, a, a)
                    }
                    if (r.iconIndex == 1 && Ye.skull.isLoaded) {
                        var a = y.crownIconScale,
                            n = r.x - d - a / 2 + k.measureText(m).width / 2 + y.crownPad;
                        k.drawImage(Ye.skull, n, r.y - l - r.scale - y.nameY - a / 2 - 5, a, a)
                    }
                }
                r.health > 0 && (y.healthBarWidth, k.fillStyle = tn, k.roundRect(r.x - d - y.healthBarWidth - y.healthBarPad, r.y - l + r.scale + y.nameY, y.healthBarWidth * 2 + y.healthBarPad * 2, 17, 8), k.fill(), k.fillStyle = r == v || r.team && r.team == v.team ? "#8ecc51" : "#cc5151", k.roundRect(r.x - d - y.healthBarWidth, r.y - l + r.scale + y.nameY + y.healthBarPad, y.healthBarWidth * 2 * (r.health / r.maxHealth), 17 - y.healthBarPad * 2, 7), k.fill());
                /* ── Universal Reload Bar (Melee, Bows, Crossbows, Muskets) ── */
                if (r === v && r.health > 0 && b.weapons[v.weaponIndex]) {
                    // Decrement reload timer in real-time
                    if (v.reloadTimer > 0) {
                        v.reloadTimer -= K;
                        if (v.reloadTimer < 0) v.reloadTimer = 0;
                    }
                
                    const _reloadFill = (v.reloadMax > 0 && v.reloadTimer > 0)
                        ? Math.max(0, Math.min(1, 1 - (v.reloadTimer / v.reloadMax)))
                        : 1.0;
                
                    const _rbY = r.y - l + r.scale + y.nameY - 19;
                    k.fillStyle = tn;
                    k.roundRect(r.x - d - y.healthBarWidth - y.healthBarPad, _rbY, y.healthBarWidth * 2 + y.healthBarPad * 2, 17, 8);
                    k.fill();
                    k.fillStyle = "#e89955";
                    k.roundRect(r.x - d - y.healthBarWidth, _rbY + y.healthBarPad, y.healthBarWidth * 2 * _reloadFill, 17 - y.healthBarPad * 2, 7);
                    k.fill();
                }
            } Pn.update(K, k, d, l);
        for (var t = 0; t < E.length; ++t)
            if (r = E[t], r.visible && r.chatCountdown > 0) {
                r.chatCountdown -= K, r.chatCountdown <= 0 && (r.chatCountdown = 0), k.font = "32px Hammersmith One";
                const m = k.measureText(r.chatMessage);
                k.textBaseline = "middle", k.textAlign = "center";
                var n = r.x - d,
                    s = r.y - r.scale - l - 90;
                const u = 47,
                    p = m.width + 17;
                k.fillStyle = "rgba(0,0,0,0.2)", k.roundRect(n - p / 2, s - u / 2, p, u, 6), k.fill(), k.fillStyle = "#fff", k.fillText(r.chatMessage, n, s)
            }
    }
    nl(K)
}

function ln(e, t, i) {
    for (let s = 0; s < Ve.length; ++s) r = Ve[s], r.active && r.layer == e && (r.update(K), r.active && ts(r.x - t, r.y - i, r.scale) && (k.save(), k.translate(r.x - t, r.y - i), k.rotate(r.dir), ui(0, 0, r, k), k.restore()))
}
const rn = {};

function ui(e, t, i, s, n) {
    if (i.src) {
        const a = b.projectiles[i.indx].src;
        let o = rn[a];
        o || (o = new Image, o.onload = function() {
            this.isLoaded = !0
        }, o.src = "./img/weapons/" + a + ".png", rn[a] = o), o.isLoaded && s.drawImage(o, e - i.scale / 2, t - i.scale / 2, i.scale, i.scale)
    } else i.indx == 1 && (s.fillStyle = "#939393", R(e, t, i.scale, s))
}

function cn(e, t, i, s) {
    const n = y.riverWidth + s,
        a = y.mapScale / 2 - t - n / 2;
    a < L && a + n > 0 && i.fillRect(0, a, _, n)
}

function Ge(e, t, i) {
    let s, n, a;
    for (let o = 0; o < ge.length; ++o) r = ge[o], r.active && (n = r.x + r.xWiggle - t, a = r.y + r.yWiggle - i, e == 0 && r.update(K), r.layer == e && ts(n, a, r.scale + (r.blocker || 0)) && (k.globalAlpha = r.hideFromEnemy ? .6 : 1, r.isItem ? (s = Di(r), k.save(), k.translate(n, a), k.rotate(r.dir), k.drawImage(s, -(s.width / 2), -(s.height / 2)), r.blocker && (k.strokeStyle = "#db6e6e", k.globalAlpha = .3, k.lineWidth = 6, R(0, 0, r.blocker, k, !1, !0)), k.restore()) : (s = El(r), k.drawImage(s, n - s.width / 2, a - s.height / 2))))
}

function Pl(e, t, i) {
    r = Rt(e);
    if (r) {
        r.startAnim(t, i);
        if (r === v) {
            // Server confirmed the attack tick! Restore base equipment.
            if (_awaitingAttackAck) {
                _awaitingAttackAck = false;
                _updateBaseEquip();
            }

            // Sync slot cooldown tracker on confirmed attack
            const curSlot = (v.weaponIndex != null) ? v.weaponIndex : 0;
            const curWpnId = (v.weapons && v.weapons[curSlot] != null) ? v.weapons[curSlot] : 0;
            markWeaponUsed(curSlot, curWpnId);
        }
    }
}

function hn(e, t, i) {
    k.globalAlpha = 1;
    for (let s = 0; s < E.length; ++s) r = E[s], r.zIndex == i && (r.animate(K), r.visible && (r.skinRot += .002 * K, Ni = (r == v ? Ci() : r.dir) + r.dirPlus, k.save(), k.translate(r.x - e, r.y - t), k.rotate(Ni), Dl(r, k), k.restore()))
}

function Dl(e, t) {
    t = t || k, t.lineWidth = Le, t.lineJoin = "miter";
    const i = Math.PI / 4 * (b.weapons[e.weaponIndex].armS || 1),
        s = e.buildIndex < 0 && b.weapons[e.weaponIndex].hndS || 1,
        n = e.buildIndex < 0 && b.weapons[e.weaponIndex].hndD || 1;
    if (e.tailIndex > 0 && Al(e.tailIndex, t, e), e.buildIndex < 0 && !b.weapons[e.weaponIndex].aboveHand && (pn(b.weapons[e.weaponIndex], y.weaponVariants[e.weaponVariant].src, e.scale, 0, t), b.weapons[e.weaponIndex].projectile != null && !b.weapons[e.weaponIndex].hideProjectile && ui(e.scale, 0, b.projectiles[b.weapons[e.weaponIndex].projectile], k)), t.fillStyle = y.skinColors[e.skinColor], R(e.scale * Math.cos(i), e.scale * Math.sin(i), 14), R(e.scale * n * Math.cos(-i * s), e.scale * n * Math.sin(-i * s), 14), e.buildIndex < 0 && b.weapons[e.weaponIndex].aboveHand && (pn(b.weapons[e.weaponIndex], y.weaponVariants[e.weaponVariant].src, e.scale, 0, t), b.weapons[e.weaponIndex].projectile != null && !b.weapons[e.weaponIndex].hideProjectile && ui(e.scale, 0, b.projectiles[b.weapons[e.weaponIndex].projectile], k)), e.buildIndex >= 0) {
        const a = Di(b.list[e.buildIndex]);
        t.drawImage(a, e.scale - b.list[e.buildIndex].holdOffset, -a.width / 2)
    }
    R(0, 0, e.scale, t), e.skinIndex > 0 && (t.rotate(Math.PI / 2), es(e.skinIndex, t, null, e))
}
const dn = {},
    fn = {};
let ee;

function es(e, t, i, s) {
    if (ee = dn[e], !ee) {
        const a = new Image;
        a.onload = function() {
            this.isLoaded = !0, this.onload = null
        }, a.src = "./img/hats/hat_" + e + ".png", dn[e] = a, ee = a
    }
    let n = i || fn[e];
    if (!n) {
        for (let a = 0; a < Ze.length; ++a)
            if (Ze[a].id == e) {
                n = Ze[a];
                break
            } fn[e] = n
    }
    ee.isLoaded && t.drawImage(ee, -n.scale / 2, -n.scale / 2, n.scale, n.scale), !i && n.topSprite && (t.save(), t.rotate(s.skinRot), es(e + "_top", t, n, s), t.restore())
}
const un = {},
    mn = {};

function Al(e, t, i) {
    if (ee = un[e], !ee) {
        const n = new Image;
        n.onload = function() {
            this.isLoaded = !0, this.onload = null
        }, n.src = "./img/accessories/access_" + e + ".png", un[e] = n, ee = n
    }
    let s = mn[e];
    if (!s) {
        for (let n = 0; n < Ue.length; ++n)
            if (Ue[n].id == e) {
                s = Ue[n];
                break
            } mn[e] = s
    }
    ee.isLoaded && (t.save(), t.translate(-20 - (s.xOff || 0), 0), s.spin && t.rotate(i.skinRot), t.drawImage(ee, -(s.scale / 2), -(s.scale / 2), s.scale, s.scale), t.restore())
}
var mi = {};

function pn(e, t, i, s, n) {
    const a = e.src + (t || "");
    let o = mi[a];
    o || (o = new Image, o.onload = function() {
        this.isLoaded = !0
    }, o.src = "./img/weapons/" + a + ".png", mi[a] = o), o.isLoaded && n.drawImage(o, i + e.xOff - e.length / 2, s + e.yOff - e.width / 2, e.length, e.width)
}
const gn = {};

function El(e) {
    const t = e.y >= y.mapScale - y.snowBiomeTop ? 2 : e.y <= y.snowBiomeTop ? 1 : 0,
        i = e.type + "_" + e.scale + "_" + t;
    let s = gn[i];
    if (!s) {
        const a = document.createElement("canvas");
        a.width = a.height = e.scale * 2.1 + Le;
        const o = a.getContext("2d");
        if (o.translate(a.width / 2, a.height / 2), o.rotate(M.randFloat(0, Math.PI)), o.strokeStyle = vt, o.lineWidth = Le, o.lineJoin = "round", e.type == 0) {
            let d;
            for (var n = 0; n < 2; ++n) d = e.scale * (n ? .5 : 1), Q(o, e.sid % 2 === 0 ? 5 : 7, d, d * .7), o.fillStyle = t ? n ? "#fff" : "#e3f1f4" : n ? "#b4db62" : "#9ebf57", o.fill(), n || o.stroke()
        } else if (e.type == 1)
            if (t == 2) o.fillStyle = "#606060", Q(o, 6, e.scale * .3, e.scale * .71), o.fill(), o.stroke(), o.fillStyle = "#89a54c", R(0, 0, e.scale * .55, o), o.fillStyle = "#a5c65b", R(0, 0, e.scale * .3, o, !0);
            else {
                /* fix: `r` is the outer game-loop entity reference var (a global), not the object
                   being rendered. Bush type-1 was drawing using whatever entity `r` pointed to
                   at render time, causing wrong/flickering scale. Changed to `e` (this object). */
                Bl(o, 6, e.scale, e.scale * .7), o.fillStyle = t ? "#e3f1f4" : "#89a54c", o.fill(), o.stroke(), o.fillStyle = t ? "#6a64af" : "#c15555";
                let d;
                const l = 4,
                    c = me / l;
                for (var n = 0; n < l; ++n) d = M.randInt(r.scale / 3.5, r.scale / 2.3), R(d * Math.cos(c * n), d * Math.sin(c * n), M.randInt(10, 12), o)
            }
        else(e.type == 2 || e.type == 3) && (o.fillStyle = e.type == 2 ? t == 2 ? "#938d77" : "#939393" : "#e0c655", Q(o, 3, e.scale, e.scale), o.fill(), o.stroke(), o.fillStyle = e.type == 2 ? t == 2 ? "#b2ab90" : "#bcbcbc" : "#ebdca3", Q(o, 3, e.scale * .55, e.scale * .65), o.fill());
        s = a, gn[i] = s
    }
    return s
}
const wn = [];

function Di(e, t) {
    let i = wn[e.id];
    if (!i || t) {
        const l = document.createElement("canvas");
        l.width = l.height = e.scale * 2.5 + Le + (b.list[e.id].spritePadding || 0);
        const c = l.getContext("2d");
        if (c.translate(l.width / 2, l.height / 2), c.rotate(t ? 0 : Math.PI / 2), c.strokeStyle = vt, c.lineWidth = Le * (t ? l.width / 81 : 1), e.name == "apple") {
            c.fillStyle = "#c15555", R(0, 0, e.scale, c), c.fillStyle = "#89a54c";
            const m = -(Math.PI / 2);
            Rl(e.scale * Math.cos(m), e.scale * Math.sin(m), 25, m + Math.PI / 2, c)
        } else if (e.name == "cookie") {
            c.fillStyle = "#cca861", R(0, 0, e.scale, c), c.fillStyle = "#937c4b";
            for (var s = 4, n = me / s, a, o = 0; o < s; ++o) a = M.randInt(e.scale / 2.5, e.scale / 1.7), R(a * Math.cos(n * o), a * Math.sin(n * o), M.randInt(4, 5), c, !0)
        } else if (e.name == "cheese") {
            c.fillStyle = "#f4f3ac", R(0, 0, e.scale, c), c.fillStyle = "#c3c28b";
            for (var s = 4, n = me / s, a, o = 0; o < s; ++o) a = M.randInt(e.scale / 2.5, e.scale / 1.7), R(a * Math.cos(n * o), a * Math.sin(n * o), M.randInt(4, 5), c, !0)
        } else if (e.name == "wood wall" || e.name == "stone wall" || e.name == "castle wall") {
            c.fillStyle = e.name == "castle wall" ? "#83898e" : e.name == "wood wall" ? "#a5974c" : "#939393";
            const m = e.name == "castle wall" ? 4 : 3;
            Q(c, m, e.scale * 1.1, e.scale * 1.1), c.fill(), c.stroke(), c.fillStyle = e.name == "castle wall" ? "#9da4aa" : e.name == "wood wall" ? "#c9b758" : "#bcbcbc", Q(c, m, e.scale * .65, e.scale * .65), c.fill()
        } else if (e.name == "spikes" || e.name == "greater spikes" || e.name == "poison spikes" || e.name == "spinning spikes") {
            c.fillStyle = e.name == "poison spikes" ? "#7b935d" : "#939393";
            var d = e.scale * .6;
            Q(c, e.name == "spikes" ? 5 : 6, e.scale, d), c.fill(), c.stroke(), c.fillStyle = "#a5974c", R(0, 0, d, c), c.fillStyle = "#c9b758", R(0, 0, d / 2, c, !0)
        } else if (e.name == "windmill" || e.name == "faster windmill" || e.name == "power mill") c.fillStyle = "#a5974c", R(0, 0, e.scale, c), c.fillStyle = "#c9b758", Qt(0, 0, e.scale * 1.5, 29, 4, c), c.fillStyle = "#a5974c", R(0, 0, e.scale * .5, c);
        else if (e.name == "mine") c.fillStyle = "#939393", Q(c, 3, e.scale, e.scale), c.fill(), c.stroke(), c.fillStyle = "#bcbcbc", Q(c, 3, e.scale * .55, e.scale * .65), c.fill();
        else if (e.name == "sapling")
            for (var o = 0; o < 2; ++o) {
                var d = e.scale * (o ? .5 : 1);
                Q(c, 7, d, d * .7), c.fillStyle = o ? "#b4db62" : "#9ebf57", c.fill(), o || c.stroke()
            } else if (e.name == "pit trap") c.fillStyle = "#a5974c", Q(c, 3, e.scale * 1.1, e.scale * 1.1), c.fill(), c.stroke(), c.fillStyle = vt, Q(c, 3, e.scale * .65, e.scale * .65), c.fill();
            else if (e.name == "boost pad") c.fillStyle = "#7e7f82", Re(0, 0, e.scale * 2, e.scale * 2, c), c.fill(), c.stroke(), c.fillStyle = "#dbd97d", Ol(e.scale * 1, c);
        else if (e.name == "turret") {
            c.fillStyle = "#a5974c", R(0, 0, e.scale, c), c.fill(), c.stroke(), c.fillStyle = "#939393";
            const m = 50;
            Re(0, -m / 2, e.scale * .9, m, c), R(0, 0, e.scale * .6, c), c.fill(), c.stroke()
        } else if (e.name == "platform") {
            c.fillStyle = "#cebd5f";
            const m = 4,
                g = e.scale * 2,
                h = g / m;
            let u = -(e.scale / 2);
            for (var o = 0; o < m; ++o) Re(u - h / 2, 0, h, e.scale * 2, c), c.fill(), c.stroke(), u += g / m
        } else e.name == "healing pad" ? (c.fillStyle = "#7e7f82", Re(0, 0, e.scale * 2, e.scale * 2, c), c.fill(), c.stroke(), c.fillStyle = "#db6e6e", Qt(0, 0, e.scale * .65, 20, 4, c, !0)) : e.name == "spawn pad" ? (c.fillStyle = "#7e7f82", Re(0, 0, e.scale * 2, e.scale * 2, c), c.fill(), c.stroke(), c.fillStyle = "#71aad6", R(0, 0, e.scale * .6, c)) : e.name == "blocker" ? (c.fillStyle = "#7e7f82", R(0, 0, e.scale, c), c.fill(), c.stroke(), c.rotate(Math.PI / 4), c.fillStyle = "#db6e6e", Qt(0, 0, e.scale * .65, 20, 4, c, !0)) : e.name == "teleporter" && (c.fillStyle = "#7e7f82", R(0, 0, e.scale, c), c.fill(), c.stroke(), c.rotate(Math.PI / 4), c.fillStyle = "#d76edb", R(0, 0, e.scale * .5, c, !0));
        i = l, t || (wn[e.id] = i)
    }
    return i
}

function Rl(e, t, i, s, n) {
    const a = e + i * Math.cos(s),
        o = t + i * Math.sin(s),
        d = i * .4;
    n.moveTo(e, t), n.beginPath(), n.quadraticCurveTo((e + a) / 2 + d * Math.cos(s + Math.PI / 2), (t + o) / 2 + d * Math.sin(s + Math.PI / 2), a, o), n.quadraticCurveTo((e + a) / 2 - d * Math.cos(s + Math.PI / 2), (t + o) / 2 - d * Math.sin(s + Math.PI / 2), e, t), n.closePath(), n.fill(), n.stroke()
}

function R(e, t, i, s, n, a) {
    s = s || k, s.beginPath(), s.arc(e, t, i, 0, 2 * Math.PI), a || s.fill(), n || s.stroke()
}

function Q(e, t, i, s) {
    let n = Math.PI / 2 * 3;
    const a = Math.PI / t;
    e.beginPath();
    for (let o = 0; o < t; o++) e.lineTo(Math.cos(n) * i, Math.sin(n) * i), n += a, e.lineTo(Math.cos(n) * s, Math.sin(n) * s), n += a;
    e.closePath()
}

function Re(e, t, i, s, n, a) {
    n.fillRect(e - i / 2, t - s / 2, i, s), a || n.strokeRect(e - i / 2, t - s / 2, i, s)
}

function Qt(e, t, i, s, n, a, o) {
    a.save(), a.translate(e, t), n = Math.ceil(n / 2);
    for (let d = 0; d < n; d++) Re(0, 0, i * 2, s, a, o), a.rotate(Math.PI / n);
    a.restore()
}

function Bl(e, t, i, s) {
    let n = Math.PI / 2 * 3;
    const a = Math.PI / t;
    let o;
    e.beginPath(), e.moveTo(0, -s);
    for (let d = 0; d < t; d++) o = M.randInt(i + .9, i * 1.2), e.quadraticCurveTo(Math.cos(n + a) * o, Math.sin(n + a) * o, Math.cos(n + a * 2) * s, Math.sin(n + a * 2) * s), n += a * 2;
    e.lineTo(0, -s), e.closePath()
}

function Ol(e, t) {
    t = t || k;
    const i = e * (Math.sqrt(3) / 2);
    t.beginPath(), t.moveTo(0, -i / 2), t.lineTo(-e / 2, i / 2), t.lineTo(e / 2, i / 2), t.lineTo(0, -i / 2), t.fill(), t.closePath()
}

function Hl() {
    const e = y.mapScale / 2;
    X.add(0, e, e + 200, 0, y.treeScales[3], 0), X.add(1, e, e - 480, 0, y.treeScales[3], 0), X.add(2, e + 300, e + 450, 0, y.treeScales[3], 0), X.add(3, e - 950, e - 130, 0, y.treeScales[2], 0), X.add(4, e - 750, e - 400, 0, y.treeScales[3], 0), X.add(5, e - 700, e + 400, 0, y.treeScales[2], 0), X.add(6, e + 800, e - 200, 0, y.treeScales[3], 0), X.add(7, e - 260, e + 340, 0, y.bushScales[3], 1), X.add(8, e + 760, e + 310, 0, y.bushScales[3], 1), X.add(9, e - 800, e + 100, 0, y.bushScales[3], 1), X.add(10, e - 800, e + 300, 0, b.list[4].scale, b.list[4].id, b.list[10]), X.add(11, e + 650, e - 390, 0, b.list[4].scale, b.list[4].id, b.list[10]), X.add(12, e - 400, e - 450, 0, y.rockScales[2], 2)
}

function Vl(e) {
    for (let t = 0; t < e.length;) X.add(e[t], e[t + 1], e[t + 2], e[t + 3], e[t + 4], e[t + 5], b.list[e[t + 6]], !0, e[t + 7] >= 0 ? {
        sid: e[t + 7]
    } : null), t += 8
}

function Wl(e, t) {
    r = ns(t), r && (r.xWiggle += y.gatherWiggle * Math.cos(e), r.yWiggle += y.gatherWiggle * Math.sin(e))
}

function _l(e, t) {
    r = ns(e), r && (r.dir = t, r.xWiggle += y.gatherWiggle * Math.cos(t + Math.PI), r.yWiggle += y.gatherWiggle * Math.sin(t + Math.PI))
}

function Ll(e, t, i, s, n, a, o, d) {
    if (xi) {
        Rn.addProjectile(e, t, i, s, n, a, null, null, o).sid = d;
        // Track ranged weapon reload when projectile spawns near player
        if (v && v.alive && M.getDistance(e, t, v.x, v.y) < 120 && b.weapons[v.weaponIndex]) {
            v.reloadMax = b.weapons[v.weaponIndex].speed;
            v.reloadTimer = v.reloadMax;
        }
    }
}

function ql(e, t) {
    for (let i = 0; i < Ve.length; ++i) Ve[i].sid == e && (Ve[i].range = t)
}

function Fl(e) {
    r = is(e), r && r.startAnim()
}

function Xl(e) {
    for (var t = 0; t < N.length; ++t) N[t].forcePos = !N[t].visible, N[t].visible = !1;
    if (e) {
        const i = Date.now();
        for (var t = 0; t < e.length;) r = is(e[t]), r ? (r.index = e[t + 1], r.t1 = r.t2 === void 0 ? i : r.t2, r.t2 = i, r.x1 = r.x, r.y1 = r.y, r.x2 = e[t + 2], r.y2 = e[t + 3], r.d1 = r.d2 === void 0 ? e[t + 4] : r.d2, r.d2 = e[t + 4], r.health = e[t + 5], r.dt = 0, r.visible = !0) : (r = Gi.spawn(e[t + 2], e[t + 3], e[t + 4], e[t + 1]), r.x2 = r.x, r.y2 = r.y, r.d2 = r.dir, r.health = e[t + 5], Gi.aiTypes[e[t + 1]].name || (r.name = y.cowNames[e[t + 6]]), r.forcePos = !0, r.sid = e[t], r.visible = !0), t += 7
    }
}
const yn = {};

function Gl(e, t) {
    const i = e.index;
    let s = yn[i];
    if (!s) {
        const n = new Image;
        n.onload = function() {
            this.isLoaded = !0, this.onload = null
        }, n.src = "./img/animals/" + e.src + ".png", s = n, yn[i] = s
    }
    if (s.isLoaded) {
        const n = e.scale * 1.2 * (e.spriteMlt || 1);
        t.drawImage(s, -n, -n, n * 2, n * 2)
    }
}

function ts(e, t, i) {
    return e + i >= 0 && e - i <= _ && t + i >= 0 && t - i <= L
}

function Nl(e, t) {
    let i = Ql(e[0]);
    i || (i = new ua(e[0], e[1], y, M, Rn, X, E, N, b, Ze, Ue), E.push(i)), i.spawn(t ? xt : null), i.visible = !1, i.x2 = void 0, i.y2 = void 0, i.setData(e), t && (v = i, oe = v.x, ae = v.y, Nn(), Zn(), jn(), Un(0), ki.style.display = "block")
}

function zl(e) {
    for (let t = 0; t < E.length; t++)
        if (E[t].id == e) {
            E.splice(t, 1);
            break
        }
}

function Yl(e, t) {
    v && (v.itemCounts[e] = t)
}

function Kl(e, t, i) {
    v && (v[e] = t, i && Zn())
}

/* ══════════════════════════════════════════════════════════════════
   NON-INVASIVE AUTO-HEAL (Mirrors Reference Script)
   ══════════════════════════════════════════════════════════════════ */

let lastHitTime = 0;
let localShame = 0;
let lastHealedHp = 100;

function eatFood(deficit) {
    if (!v || !v.alive) return;
    const maxHP = v.maxHealth || 100;
    if (v.health >= maxHP) return;

    const foodId = (v.items && v.items[0] != null) ? v.items[0] : 0;
    const healAmt = ({ 0: 20, 1: 40, 2: 30 })[foodId] || 20;
    const count = Math.max(1, Math.ceil(deficit / healAmt));

    const holdingBuildItem = v.buildIndex >= 0;
    const restoreId = holdingBuildItem 
        ? v.buildIndex 
        : (v.weaponIndex != null ? v.weaponIndex : ((v.weapons && v.weapons[0]) || 0));
    const isWeapon = !holdingBuildItem;
    const angle = (typeof Ci === "function") ? Ci() : 0;

    // 1. Select food and consume
    O.send("z", foodId, false);
    for (let i = 0; i < count; i++) {
        O.send("F", 1, angle);
        O.send("F", 0, angle);
    }

    // 2. Defer restore
    queueMicrotask(function() {
        if (!v || !v.alive) return;
        O.send("z", restoreId, isWeapon);
        if (U === 1) {
            O.send("F", 1, angle);
        }
    });
}

// Reactive heal: Fires the exact instant the server sends damage (Packet "O")
function $l(e, t) {
    r = Rt(e);
    if (r) {
        const prevHealth = r.health;
        r.health = t;

        if (r === v) {
            if (t < prevHealth) {
                const now = Date.now();
                if (now - lastHitTime <= 120) {
                    localShame++;
                } else {
                    localShame = Math.max(0, localShame - 2);
                }
                lastHitTime = now;

                const maxHP = v.maxHealth || 100;
                if (t < maxHP && localShame < 7) {
                    eatFood(maxHP - t);
                }
            } else if (t >= 100) {
                localShame = 0;
            }
        }
    }
}

function Jl(e) {
    const t = Date.now();
    for (var i = 0; i < E.length; ++i) E[i].forcePos = !E[i].visible, E[i].visible = !1;
    for (var i = 0; i < e.length;) r = Rt(e[i]), r && (r.t1 = r.t2 === void 0 ? t : r.t2, r.t2 = t, r.x1 = r.x, r.y1 = r.y, r.x2 = e[i + 1], r.y2 = e[i + 2], r.d1 = r.d2 === void 0 ? e[i + 3] : r.d2, r.d2 = e[i + 3], r.dt = 0, r.buildIndex = e[i + 4], r.weaponIndex = e[i + 5], r.weaponVariant = e[i + 6], r.team = e[i + 7], r.isLeader = e[i + 8], r.skinIndex = e[i + 9], r.tailIndex = e[i + 10], r.iconIndex = e[i + 11], r.zIndex = e[i + 12], r.visible = !0), i += 13;

    // ── SERVER-TICK SYNCHRONIZED EXECUTION ──
    if (v && v.alive) {
        // 1. Process TICK 2 of Double-Hit (Secondary shot/swing)
        if (_doubleHitState === 1) {
            const secId = v.weapons[1];
            const primId = v.weapons[0];
            const angle = Ci();

            O.send("z", secId, true);
            O.send("F", 1, angle);
            O.send("F", 0, angle);

            // Re-equip Primary
            O.send("z", primId, true);

            markWeaponUsed(1, secId);
            _doubleHitState = 0;

            // Reset gear back to base hat
            _updateBaseEquip();
        } else {
            // Normal base hat check (only runs once per 111ms tick, zero flicker!)
            _updateBaseEquip();
        }

        // 2. Process held placement keys exactly once per server tick
        for (const key in _hkHeld) {
            if (_hkHeld[key] !== undefined && Jn()) {
                _hkDoPlace(_hkHeld[key]);
            }
        }

        // 3. Process health/bleed checks in direct sync with the tick
        if (v.health < (v.maxHealth || 100) && localShame < 7) {
            eatFood((v.maxHealth || 100) - v.health);
        }
    }
}

function Ql(e) {
    for (let t = 0; t < E.length; ++t)
        if (E[t].id == e) return E[t];
    return null
}

function Rt(e) {
    for (let t = 0; t < E.length; ++t)
        if (E[t].sid == e) return E[t];
    return null
}

function is(e) {
    for (let t = 0; t < N.length; ++t)
        if (N[t].sid == e) return N[t];
    return null
}

function ns(e) {
    for (let t = 0; t < ge.length; ++t)
        if (ge[t].sid == e) return ge[t];
    return null
}
let ss = -1;

function Zl() {
    const e = Date.now() - ss;
    window.pingTime = e, tt.innerText = "Ping: " + e + " ms"
}
let Zt;

function os() {
    Zt && clearTimeout(Zt), gi() && (ss = Date.now(), O.send("0")), Zt = setTimeout(os, 2500)
}

function Ul(e) {
    if (e < 0) return;
    const t = Math.floor(e / 60);
    let i = e % 60;
    i = ("0" + i).slice(-2), Ji.innerText = "Server restarting in " + t + ":" + i, Ji.hidden = !1
}
window.requestAnimFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
        window.setTimeout(e, 1e3 / 60)
    }
}();

function as() {
    He = Date.now(), K = He - Xi, Xi = He, bi(), Cl(), _checkAttackLoop(), requestAnimFrame(as)
}
Hl();
as();

function ls(e) {
    window.open(e, "_blank")
}
window.openLink = ls;
window.aJoinReq = li;
window.follmoo = Da;
window.kickFromClan = Ln;
window.sendJoin = qn;
window.leaveAlliance = Fn;
window.createAlliance = ri;
window.storeBuy = Xn;
window.storeEquip = di;

// ── AUTO-BUY HATS/ACCESSORIES (ordered priority list) ──
// Buys the first item in the list that the player doesn't own yet, as soon as gold allows.
// Checks every 1 second. Does NOT skip ahead — if Monkey Tail isn't bought yet, nothing
// further in the list is attempted until it is owned.
const _autoBuyHatList = [
    { id: 11, isAcc: true,  price: 2000,  name: "Monkey Tail"    },
    { id: 6,  isAcc: false, price: 4000,  name: "Soldier Helmet" },
    { id: 31, isAcc: false, price: 2500,  name: "Flipper Hat"    },
    { id: 12, isAcc: false, price: 6000,  name: "Booster Hat"    },
    { id: 22, isAcc: false, price: 6000,  name: "Emp Helmet"     },
    { id: 7,  isAcc: false, price: 6000,  name: "Bull Helmet"    },
    { id: 40, isAcc: false, price: 15000, name: "Tank Gear"      },
    { id: 19, isAcc: true,  price: 15000, name: "Shadow Wings"   },
    { id: 53, isAcc: false, price: 10000, name: "Turret Gear"    },
];

setInterval(function _tickAutoBuyHat() {
    if (!v || !v.alive || !et) return;
    for (let _i = 0; _i < _autoBuyHatList.length; _i++) {
        const _h     = _autoBuyHatList[_i];
        // owned check: hats → v.skins[id], accessories → v.tails[id]
        const _owned = _h.isAcc
            ? (v.tails  && v.tails[_h.id])
            : (v.skins  && v.skins[_h.id]);
        if (_owned) continue; // already have it, check the next in list
        // Not owned yet — buy if affordable, then stop regardless
        if ((v.points || 0) >= _h.price) {
            Xn(_h.id, _h.isAcc ? 1 : 0); // Xn = O.send("c", 1, id, isAccessory)
        }
        break; // only attempt the first un-owned item this tick
    }
}, 1000);

// ═══════════════════════════════════════════════════════════════════════════════
// AUTOMATED COMBAT, RELOAD & ACCESSORY MACRO SYSTEM
// ═══════════════════════════════════════════════════════════════════════════════

const _DAMAGE_DEALING_WEAPONS = [1, 2, 3, 4, 5, 7]; // Hand Axe, Great Axe, Short Sword, Katana, Spear, Daggers

let _tKeyHeld = false;
let _hatOverrideTimer = null;
let _accOverrideTimer = null;
let _nextAttackTime = 0;
let _lastEquippedHat = -1;
let _lastEquippedAcc = -1;
let _awaitingAttackAck = false;
let _doubleHitState = 0; // 0 = idle, 1 = waiting for next tick to fire secondary

const weaponReadyAt = {
    0: 0, // Timestamp when Primary is ready
    1: 0  // Timestamp when Secondary is ready
};

function getWeaponCooldown(weaponId) {
    const wpn = b.weapons[weaponId];
    if (!wpn) return 300;
    const hat = Ze.find(h => h.id === v.skinIndex);
    const atkSpdMult = (hat && hat.atkSpd) ? hat.atkSpd : 1.0;
    return (wpn.speed || 300) * atkSpdMult;
}

function canAttack(slotIndex) {
    return Date.now() >= (weaponReadyAt[slotIndex] || 0);
}

function markWeaponUsed(slotIndex, weaponId) {
    const cooldown = getWeaponCooldown(weaponId);
    weaponReadyAt[slotIndex] = Date.now() + cooldown;
}

function _isInRiver(p) {
    if (!p || p.zIndex > 0) return false;
    const riverTop = (y.mapScale / 2) - (y.riverWidth / 2);
    const riverBottom = (y.mapScale / 2) + (y.riverWidth / 2);
    return p.y >= riverTop && p.y <= riverBottom;
}

function tryDoubleHit() {
    if (!v || !v.alive || !Jn() || _doubleHitState !== 0) return;

    const primId = v.weapons[0];
    const secId = v.weapons[1];
    if (primId == null || secId == null) return;

    if (!canAttack(0) || !canAttack(1)) return;

    const angle = Ci();

    // TICK 1: Primary Hit with Damage Gear
    if (_isOwnedHat(7)) _equipHat(7, true);   // Bull Helmet
    if (_isOwnedAcc(19)) _equipAcc(19, true); // Shadow Wings

    O.send("z", primId, true);
    O.send("F", 1, angle);
    O.send("F", 0, angle);

    markWeaponUsed(0, primId);

    // Queue tick 2 for Jl
    _doubleHitState = 1;
}

function _getBestBreakingWeapon() {
    if (!v || !v.weapons || v.weapons.length === 0) return 0;
    let bestWpn = v.weapons[0];
    let bestDmgRate = -1;
    for (let i = 0; i < v.weapons.length; i++) {
        const wId = v.weapons[i];
        const w = b && b.weapons && b.weapons[wId];
        if (!w) continue;
        const dmg = (w.dmg || 1);
        const sDmg = (w.sDmg || 1);
        const spd = (w.speed || 300) / 1000;
        const rate = (dmg * sDmg) / spd;
        if (rate > bestDmgRate) {
            bestDmgRate = rate;
            bestWpn = wId;
        }
    }
    return bestWpn;
}

function _hasDamageDealingPrimary(player) {
    if (!player) return false;
    const primId = (player.weapons && player.weapons[0] != null) ? player.weapons[0] : 0;
    return _DAMAGE_DEALING_WEAPONS.indexOf(primId) !== -1;
}

function _isOwnedHat(id) {
    if (id === 0) return true;
    if (!v) return false;
    return Boolean((v.skins && v.skins[id]) || (v.skinIndex === id) || y.inSandbox);
}

function _isOwnedAcc(id) {
    if (id === 0) return true;
    if (!v) return false;
    return Boolean((v.tails && v.tails[id]) || (v.tailIndex === id) || y.inSandbox);
}

function _equipHat(id, force) {
    if (!v || !v.alive) return;
    if (!force && !_isOwnedHat(id)) return;
    if (v.skinIndex === id && _lastEquippedHat === id) return;
    v.skinIndex = id;
    _lastEquippedHat = id;
    O.send("c", 0, id, 0);
}

function _equipAcc(id, force) {
    if (!v || !v.alive) return;
    if (!force && !_isOwnedAcc(id)) return;
    if (v.tailIndex === id && _lastEquippedAcc === id) return;
    v.tailIndex = id;
    _lastEquippedAcc = id;
    O.send("c", 0, id, 1);
}

function _oneTickHat(hatId) {
    if (!v || !v.alive) return;
    _equipHat(hatId, true);
    _awaitingAttackAck = true;
}

function _oneTickAcc(accId) {
    if (!v || !v.alive) return;
    _equipAcc(accId, true);
    _awaitingAttackAck = true;
}

function _getBaseHat() {
    if (!v || !v.alive) return 0;

    const spearRangeThreshold = 280;

    // 1. Check for Turrets
    let turretInRange = false;
    if (ge) {
        for (let i = 0; i < ge.length; i++) {
            const obj = ge[i];
            if (!obj || !obj.active) continue;
            const isTurret = obj.projectile === 1 || (obj.group && obj.group.id === 7) || obj.id === 17;
            if (isTurret && obj.owner && obj.owner.sid !== v.sid && !(v.team && obj.owner.team && obj.owner.team === v.team)) {
                if (M.getDistance(v.x, v.y, obj.x, obj.y) <= 700) {
                    turretInRange = true;
                    break;
                }
            }
        }
    }

    // 2. Check for Enemies
    let enemyWithinSpear = false;
    let enemyWithMeleeWithinSpear = false;
    if (E) {
        for (let i = 0; i < E.length; i++) {
            const p = E[i];
            if (!p || p === v || !p.alive || !p.visible) continue;
            if (v.team && p.team && p.team === v.team) continue;
            const dist = M.getDistance(v.x, v.y, p.x, p.y);
            if (dist <= spearRangeThreshold) {
                enemyWithinSpear = true;
                if (_hasDamageDealingPrimary(p)) {
                    enemyWithMeleeWithinSpear = true;
                }
            }
        }
    }

    // 3. Base Selection: Flipper in river, Booster on land
    let targetHat = _isInRiver(v) ? 31 : 12;

    if (turretInRange) {
        targetHat = enemyWithMeleeWithinSpear ? 6 : 22;
    } else if (enemyWithinSpear) {
        targetHat = 6;
    }

    if (_isOwnedHat(targetHat)) return targetHat;
    if (_isInRiver(v) && _isOwnedHat(31)) return 31;
    if (_isOwnedHat(12)) return 12;
    if (_isOwnedHat(6)) return 6;
    return 0;
}

function _getBaseAcc() {
    if (!v || !v.alive) return 0;
    if (_isOwnedAcc(11)) return 11; // Monkey Tail default
    return 0;
}

function _updateBaseEquip() {
    if (!v || !v.alive) return;
    if (!_awaitingAttackAck) {
        const baseHat = _getBaseHat();
        if (_isOwnedHat(baseHat) && (v.skinIndex !== baseHat || _lastEquippedHat !== baseHat)) {
            _equipHat(baseHat, false);
        }
        const baseAcc = _getBaseAcc();
        if (_isOwnedAcc(baseAcc) && (v.tailIndex !== baseAcc || _lastEquippedAcc !== baseAcc)) {
            _equipAcc(baseAcc, false);
        }
    }
}

function _triggerAttackSwing() {
    if (!v || !v.alive || v.buildIndex >= 0) return;
    const curWpnIdx = (v.weaponIndex != null) ? v.weaponIndex : 0;
    const curWpnId = (v.weapons && v.weapons[curWpnIdx] != null) ? v.weapons[curWpnIdx] : 0;

    if (canAttack(curWpnIdx)) {
        markWeaponUsed(curWpnIdx, curWpnId);
        _onAttackTick(curWpnIdx);
    }
}

function _checkAttackLoop() {
    if (!v || !v.alive || v.buildIndex >= 0) return;
    const isAttacking = (U === 1 || v.autoGather === 1 || _rmbHammerActive);
    if (isAttacking) {
        const curWpnIdx = (v.weaponIndex != null) ? v.weaponIndex : 0;
        if (canAttack(curWpnIdx)) {
            _triggerAttackSwing();
        }
    }
}

function _onAttackTick(weaponIndex) {
    if (!v || !v.alive) return;
    const curWpnIdx = (weaponIndex != null) ? weaponIndex : ((v.weaponIndex != null) ? v.weaponIndex : 0);
    const curWpnId = (v.weapons && v.weapons[curWpnIdx] != null) ? v.weapons[curWpnIdx] : 0;

    if (_rmbHammerActive || curWpnId === 10) {
        _oneTickHat(40); // Tank Gear on building break
        return;
    }

    if (_DAMAGE_DEALING_WEAPONS.indexOf(curWpnId) !== -1) {
        _oneTickAcc(19); // Shadow Wings on melee swing
        if (_tKeyHeld) {
            _oneTickHat(7); // Bull Helmet if T held
        }
    }
}

window.showItemInfo = $;
window.selectSkinColor = hl;
window.changeStoreIndex = sl;
window.config = y;

/* ════════════════════════════════════════════════════════════════════
   ◈ ULTRASTAR & LRC SMART SYNC ENGINE (#START Offset & Event Guard)
   ════════════════════════════════════════════════════════════════════ */
;(function () {
    var lyrics = [];
    var isPlaying = false;
    var lineTimers = [];

    // Substring roots matched anywhere inside a word
    var CURSE_SUBSTRINGS = [
        "fuck", "shit", "bitch", "nigg", "cunt", "dick",
        "cock", "pussy", "slut", "whore", "bastard", "damn", "crap",
        "kill", "rape", "pedo", "fag", "tits"
    ];

    // Priority visual lookalikes
    var VISUAL_RULES = [
        { match: /i/i, sub: '1' }, // (k1ll, sh1t, b1tch, d1ck, n1gg)
        { match: /s/i, sub: '$' }, // (pu$sy, $lut, ba$tard)
        { match: /o/i, sub: '0' }, // (c0ck, wh0re, ped0)
        { match: /u/i, sub: 'v' }, // (fvck, cvnt)
        { match: /e/i, sub: '3' }, // (r3pe, p3do)
        { match: /a/i, sub: '@' }, // (d@mn, cr@p, f@g)
        { match: /t/i, sub: '7' },
        { match: /l/i, sub: '1' },
        { match: /b/i, sub: '8' }
    ];

    function leetifyCurseWord(str) {
        if (!str) return str;
        for (var i = 0; i < VISUAL_RULES.length; i++) {
            if (VISUAL_RULES[i].match.test(str)) {
                return str.replace(VISUAL_RULES[i].match, VISUAL_RULES[i].sub);
            }
        }
        return str;
    }

    function filterBadWords(text) {
        if (!text) return "";
        var result = text;

        // Isolated check for "ass" compounds (protects 'class', 'grass', 'pass')
        result = result.replace(/(?:dumb|bad|kick|jack|smart|fat|half|tight|hard|lazy|bad-)?ass(?:es|hole|hat|clown|wipe|head|in)?\b/gi, function(match) {
            return leetifyCurseWord(match);
        });

        // Strict isolated check for "die"
        result = result.replace(/\b(die|dies|died|dying)\b/gi, function(match) {
            return leetifyCurseWord(match);
        });

        // Substring replacement
        CURSE_SUBSTRINGS.forEach(function(root) {
            var reg = new RegExp(root, "gi");
            result = result.replace(reg, function(match) {
                return leetifyCurseWord(match);
            });
        });

        return result;
    }

    // ── 1. Sanitize to ASCII & Filter ──
    function sanitizeText(text) {
        if (!text) return "";
        var clean = text
            .replace(/[\u2018\u2019]/g, "'") // Smart apostrophes
            .replace(/[\u201C\u201D]/g, '"') // Smart quotes
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Strip accents
            .replace(/[^\x20-\x7E]/g, "")    // Strip non-ASCII
            .replace(/\s+/g, " ")            // Normalize multiple spaces
            .trim();

        return filterBadWords(clean);
    }

    // ── 2. Word-Boundary Splitter (Under 30 chars per chunk) ──
    function splitIntoChunks(text, maxLen) {
        maxLen = maxLen || 30;
        if (!text || text.length <= maxLen) return [text];
        var words = text.split(/\s+/);
        var chunks = [];
        var current = "";

        for (var i = 0; i < words.length; i++) {
            var word = words[i];

            while (word.length > maxLen) {
                if (current) { chunks.push(current); current = ""; }
                chunks.push(word.slice(0, maxLen));
                word = word.slice(maxLen);
            }
            if (!word) continue;

            if ((current ? current + " " + word : word).length <= maxLen) {
                current = current ? current + " " + word : word;
            } else {
                if (current) chunks.push(current);
                current = word;
            }
        }
        if (current) chunks.push(current);
        return chunks;
    }

    // ── 3. UltraStar Parser (Supports #START offset & strips '~') ──
    function parseUltraStar(raw) {
        var lines = raw.replace(/\r/g, "").split("\n");
        var bpm = 120;
        var gap = 0;
        var startOffset = 0;
        var phrases = [];
        var currentPhrase = { time: null, text: "" };

        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            if (!line || !line.trim()) continue;

            var trimmedStart = line.replace(/^\s+/, "");

            if (trimmedStart.indexOf("#BPM:") === 0) {
                bpm = parseFloat(trimmedStart.split(":")[1].replace(",", "."));
            } else if (trimmedStart.indexOf("#GAP:") === 0) {
                gap = parseFloat(trimmedStart.split(":")[1].replace(",", "."));
            } else if (trimmedStart.indexOf("#START:") === 0) {
                var sVal = parseFloat(trimmedStart.split(":")[1].replace(",", "."));
                if (!isNaN(sVal)) {
                    // If start is in seconds (e.g. 45.0), convert to ms
                    startOffset = (sVal > 500 && gap > 0) ? sVal : sVal * 1000;
                }
            } else if (/^[:\*F]/.test(trimmedStart)) {
                var match = trimmedStart.match(/^([:\*F])\s+(-?\d+)\s+(\d+)\s+(-?\d+)(?:\s(.*))?$/);
                if (match) {
                    var startBeat = parseInt(match[2], 10);
                    var rawSyllable = match[5] !== undefined ? match[5] : "";
                    // Strip UltraStar melisma/pitch-hold tildes (e.g. '~ce' -> 'ce', '~ ' -> ' ')
                    var syllable = rawSyllable.replace(/~/g, "");

                    var effectiveGap = Math.max(0, gap - startOffset);
                    var timeMs = effectiveGap + (startBeat * (15000 / bpm));

                    if (currentPhrase.time === null) {
                        currentPhrase.time = timeMs;
                    }
                    currentPhrase.text += syllable;
                }
            } else if (/^-/.test(trimmedStart)) {
                if (currentPhrase.text.trim().length > 0) {
                    phrases.push(currentPhrase);
                }
                currentPhrase = { time: null, text: "" };
            }
        }

        if (currentPhrase.text.trim().length > 0) {
            phrases.push(currentPhrase);
        }

        return phrases;
    }

    // ── 4. Standard LRC Parser ──
    function parseLRC(raw) {
        var rawLines = raw.split("\n");
        var reg = /\[(\d{1,2}):(\d{1,2}(?:\.\d{1,3})?)\](.*)/;
        var out = [];

        rawLines.forEach(function(line) {
            var m = line.trim().match(reg);
            if (!m) return;
            var min = parseFloat(m[1]);
            var sec = parseFloat(m[2]);
            var text = m[3].trim();
            if (text && !text.startsWith("(") && !text.endsWith(")")) {
                out.push({ time: (min * 60 + sec) * 1000, text: text });
            }
        });
        return out;
    }

    // ── 5. Master Processor with 600ms Queue Scheduler ──
    function processRawInput(raw) {
        var rawPhrases = [];
        if (raw.indexOf("#BPM:") !== -1 || raw.match(/^[:\*F]\s+\d+/m)) {
            rawPhrases = parseUltraStar(raw);
        } else {
            rawPhrases = parseLRC(raw);
        }

        if (!rawPhrases.length) return [];

        var intermediate = [];
        for (var i = 0; i < rawPhrases.length; i++) {
            var item = rawPhrases[i];
            var clean = sanitizeText(item.text);
            if (!clean) continue;

            var chunks = splitIntoChunks(clean, 30);
            if (chunks.length === 1) {
                intermediate.push({ time: item.time, text: chunks[0] });
            } else {
                var nextTime = (i + 1 < rawPhrases.length) ? rawPhrases[i + 1].time : item.time + (chunks.length * 650);
                var windowDuration = Math.max(chunks.length * 600, nextTime - item.time);
                var step = Math.max(600, windowDuration / chunks.length);

                for (var c = 0; c < chunks.length; c++) {
                    intermediate.push({
                        time: item.time + (c * step),
                        text: chunks[c]
                    });
                }
            }
        }

        intermediate.sort(function(a, b) { return a.time - b.time; });

        // Strictly enforce 600ms rate-limit spacing
        var scheduled = [];
        var lastTime = -999999;
        var RATE_LIMIT_MS = 600;

        for (var k = 0; k < intermediate.length; k++) {
            var targetTime = intermediate[k].time;
            if (targetTime < lastTime + RATE_LIMIT_MS) {
                targetTime = lastTime + RATE_LIMIT_MS;
            }
            lastTime = targetTime;
            scheduled.push({
                time: Math.round(targetTime),
                text: intermediate[k].text
            });
        }

        return scheduled;
    }

    // ── 6. Playback Engine ──
    function startPlayback() {
        if (!lyrics.length) return;
        stopPlayback();
        isPlaying = true;
        applyPlayState();

        lyrics.forEach(function(line, idx) {
            var tid = setTimeout(function() {
                if (!isPlaying) return;

                activateLine(idx);
                on(line.text);

            }, Math.max(0, line.time));

            lineTimers.push(tid);
        });

        var totalDuration = lyrics[lyrics.length - 1].time + 2000;
        var endTid = setTimeout(stopPlayback, totalDuration);
        lineTimers.push(endTid);
    }

    function stopPlayback() {
        isPlaying = false;
        lineTimers.forEach(clearTimeout);
        lineTimers = [];
        applyPlayState();
        elCurrentLine.textContent = lyrics.length ? "— ready —" : "Paste UltraStar/LRC and press LOAD";
        elQueue.querySelectorAll(".lq-row").forEach(function(el) {
            el.classList.remove("lq-active", "lq-past");
        });
    }

    function applyPlayState() {
        elPlayBtn.textContent = isPlaying ? "▶ LIVE" : "▶ PLAY";
        elStatusDot.classList.toggle("lsd-on", isPlaying);
    }

    function activateLine(idx) {
        elCurrentLine.textContent = lyrics[idx].text;
        var rows = elQueue.querySelectorAll(".lq-row");
        rows.forEach(function(row, i) {
            row.classList.remove("lq-active", "lq-past");
            if (i < idx) row.classList.add("lq-past");
            else if (i === idx) {
                row.classList.add("lq-active");
                row.scrollIntoView({ block: "nearest", behavior: "smooth" });
            }
        });
    }

    // ── 7. UI Setup ──
    var panel = document.createElement("div");
    panel.id = "lsp-panel";
    panel.innerHTML = [
        '<div id="lsp-hdr"><div id="lsp-htitle"><span id="lsp-dot"></span><span>LYRIC SYNC</span></div><button id="lsp-x">&#x2715;</button></div>',
        '<div id="lsp-body">',
        '  <textarea id="lsp-ta" placeholder="Paste UltraStar (.txt) or [mm:ss.xx] LRC here..."></textarea>',
        '  <div id="lsp-btns">',
        '    <button id="lsp-load">LOAD</button>',
        '    <button id="lsp-play">PLAY</button>',
        '    <button id="lsp-stop">STOP</button>',
        '  </div>',
        '  <div id="lsp-cur">Paste UltraStar/LRC and press LOAD</div>',
        '  <div id="lsp-q"></div>',
        '</div>'
    ].join("");

    var style = document.createElement("style");
    style.textContent = `
        #lsp-panel { position:fixed; top:80px; right:20px; width:300px; height:390px; background:#0a0e14; border:1px solid #00cfff; border-radius:6px; z-index:999999; display:flex; flex-direction:column; font-family:sans-serif; color:#fff; overflow:hidden; }
        #lsp-hdr { display:flex; justify-content:space-between; align-items:center; background:#111822; padding:8px 10px; cursor:grab; border-bottom:1px solid #1a2636; user-select:none; }
        #lsp-htitle { display:flex; align-items:center; gap:8px; font-weight:bold; font-size:12px; color:#00cfff; }
        #lsp-dot { width:8px; height:8px; border-radius:50%; background:#444; display:inline-block; }
        #lsp-dot.lsd-on { background:#00ff7f; box-shadow:0 0 8px #00ff7f; }
        #lsp-x { background:none; border:none; color:#777; cursor:pointer; font-size:14px; }
        #lsp-body { padding:10px; display:flex; flex-direction:column; gap:8px; flex:1; overflow:hidden; }
        #lsp-ta { height:75px; background:#05070a; border:1px solid #1a2636; color:#a0c0d0; padding:6px; font-family:monospace; font-size:10px; resize:none; outline:none; }
        #lsp-btns { display:grid; grid-template-columns:1fr 1fr 1fr; gap:5px; }
        #lsp-btns button { background:#111822; border:1px solid #00cfff; color:#00cfff; padding:5px 0; cursor:pointer; font-size:11px; font-weight:bold; }
        #lsp-btns button:hover { background:#00cfff; color:#000; }
        #lsp-cur { background:#05070a; border-left:3px solid #00cfff; padding:6px; font-size:12px; color:#00ff7f; min-height:18px; word-break:break-word; }
        #lsp-q { flex:1; overflow-y:auto; font-size:11px; color:#556; line-height:1.6; }
        .lq-row.lq-active { color:#00ff7f; font-weight:bold; }
        .lq-row.lq-past { color:#334; }
    `;
    document.head.appendChild(style);
    document.body.appendChild(panel);

    var elStatusDot   = document.getElementById("lsp-dot");
    var elTextarea    = document.getElementById("lsp-ta");
    var elLoadBtn     = document.getElementById("lsp-load");
    var elPlayBtn     = document.getElementById("lsp-play");
    var elStopBtn     = document.getElementById("lsp-stop");
    var elCurrentLine = document.getElementById("lsp-cur");
    var elQueue       = document.getElementById("lsp-q");
    var elHdr         = document.getElementById("lsp-hdr");

    elLoadBtn.onclick = function() {
        stopPlayback();
        lyrics = processRawInput(elTextarea.value);
        elQueue.innerHTML = lyrics.map(function(l) {
            return '<div class="lq-row">[' + (l.time / 1000).toFixed(1) + 's] ' + l.text + '</div>';
        }).join("");
        elCurrentLine.textContent = lyrics.length ? (lyrics.length + " chunks prepared") : "No valid notes found";
    };

    elPlayBtn.onclick = function() {
        if (isPlaying) stopPlayback();
        else startPlayback();
    };

    elStopBtn.onclick = stopPlayback;
    document.getElementById("lsp-x").onclick = function() { panel.style.display = "none"; };

    // ── Prevent Game Canvas Zoom When Scrolling Over Panel ──
    window.addEventListener("wheel", function(e) {
        if (e.target && e.target.closest && e.target.closest("#lsp-panel")) {
            e.stopPropagation();
        }
    }, true); // Capture phase stops event before canvas zoom handler

    // Drag panel
    var drag = false, dx = 0, dy = 0;
    elHdr.onmousedown = function(e) {
        if (e.target.id === "lsp-x") return;
        drag = true;
        dx = e.clientX - panel.offsetLeft;
        dy = e.clientY - panel.offsetTop;
    };
    document.onmousemove = function(e) {
        if (!drag) return;
        panel.style.left = (e.clientX - dx) + "px";
        panel.style.top = (e.clientY - dy) + "px";
        panel.style.right = "auto";
    };
    document.onmouseup = function() { drag = false; };

    // ── Keybind 'L' Toggle (Active ONLY when not typing in any input/chat/textarea) ──
    window.addEventListener("keydown", function(e) {
        if (e.key === "l" || e.key === "L") {
            var active = document.activeElement;
            var tag = active ? active.tagName.toLowerCase() : "";
            var isTyping = active && (
                active.isContentEditable ||
                tag === "input" ||
                tag === "textarea" ||
                tag === "select"
            );
            if (!isTyping) {
                panel.style.display = (panel.style.display === "none") ? "flex" : "none";
            }
        }
    });

    elTextarea.addEventListener("keydown", function(e) { e.stopPropagation(); });
    elTextarea.addEventListener("keyup", function(e) { e.stopPropagation(); });
})();
