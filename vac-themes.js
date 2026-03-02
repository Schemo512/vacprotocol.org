/**
 * VAC Protocol — Theme System
 * Single source of truth for all verification surfaces.
 * 
 * Themes are applied via:
 *   1. URL param: ?theme=nist
 *   2. JS API: VACTheme.apply('nist')
 *   3. Backend email: POST /v1/vat/auth/capture { theme: "nist" }
 * 
 * Each theme defines CSS custom properties + metadata.
 * The verify page, auth page, and email templates all consume these.
 */

const VAC_THEMES = {

    // ─── DEFAULT: Investor / Demo / Jason ───
    default: {
        id: 'default',
        name: 'VAC Protocol',
        audience: 'Investors, founders, demo recipients',
        meta: {
            navBadgeText: 'VERIFIED',
            tagline: 'Math so neither party has to rely on trust alone.',
            footerOrg: 'Violet Shores Pty Ltd',
        },
        tokens: {
            '--bg':              '#080B12',
            '--bg-elevated':     '#0D1117',
            '--surface':         '#131921',
            '--surface-raised':  '#1A2233',
            '--surface-hover':   '#1F2937',
            '--border':          '#1E2A3A',
            '--border-light':    '#2A3A4E',
            '--border-focus':    '#4A5C73',
            '--text-primary':    '#F0F4F8',
            '--text-secondary':  '#B8C4D0',
            '--text-tertiary':   '#8899AA',
            '--text-muted':      '#5C6F82',
            '--accent':          '#7C6BF0',
            '--accent-light':    '#9B8DF7',
            '--accent-dim':      '#6455D4',
            '--accent-bg':       'rgba(124,107,240,0.06)',
            '--accent-bg-hover': 'rgba(124,107,240,0.12)',
            '--accent-border':   'rgba(124,107,240,0.2)',
            '--accent-glow':     'rgba(124,107,240,0.15)',
            '--teal':            '#2DD4BF',
            '--teal-dim':        '#14B8A6',
            '--teal-bg':         'rgba(45,212,191,0.06)',
            '--teal-border':     'rgba(45,212,191,0.15)',
            '--success':         '#34D399',
            '--success-dim':     '#10B981',
            '--success-bg':      'rgba(52,211,153,0.06)',
            '--success-border':  'rgba(52,211,153,0.15)',
            '--warning':         '#FBBF24',
            '--warning-bg':      'rgba(251,191,36,0.06)',
            '--warning-border':  'rgba(251,191,36,0.15)',
            '--error':           '#F87171',
            '--error-bg':        'rgba(248,113,113,0.06)',
            '--error-border':    'rgba(248,113,113,0.15)',
        },
        // Email-specific (inline styles — CSS vars don't work in email)
        email: {
            bgOuter:     '#080B12',
            bgCard:      '#0D1117',
            border:      '#1E2A3A',
            textPrimary: '#F0F4F8',
            textBody:    '#B8C4D0',
            textMuted:   '#5C6F82',
            accent:      '#7C6BF0',
            accentBtn:   '#7C6BF0',
            success:     '#34D399',
            codeColor:   '#7C6BF0',
            codeBg:      '#131921',
            codeBorder:  '#1E2A3A',
        },
        ambient: {
            gradient1: 'radial-gradient(ellipse 600px 400px at 30% 0%, rgba(124,107,240,0.07) 0%, transparent 70%)',
            gradient2: 'radial-gradient(ellipse 500px 350px at 70% 10%, rgba(45,212,191,0.04) 0%, transparent 70%)',
        },
        trustGradient: { from: '#7C6BF0', to: '#2DD4BF' },
    },

    // ─── NIST / Government / Federal ───
    nist: {
        id: 'nist',
        name: 'VAC Protocol \u2014 Federal',
        audience: 'NIST, DHS, DoD, government reviewers',
        meta: {
            navBadgeText: 'VERIFIED',
            tagline: 'Cryptographic human provenance for AI agent governance.',
            footerOrg: 'Violet Shores Pty Ltd \u00b7 NIST AI 600-1 Aligned',
        },
        tokens: {
            '--bg':              '#0A0E18',
            '--bg-elevated':     '#0F1420',
            '--surface':         '#141A28',
            '--surface-raised':  '#1B2236',
            '--surface-hover':   '#222B40',
            '--border':          '#1E2840',
            '--border-light':    '#2A3652',
            '--border-focus':    '#3D5070',
            '--text-primary':    '#E8ECF4',
            '--text-secondary':  '#A8B4C8',
            '--text-tertiary':   '#7888A0',
            '--text-muted':      '#506080',
            '--accent':          '#3B82F6',
            '--accent-light':    '#60A5FA',
            '--accent-dim':      '#2563EB',
            '--accent-bg':       'rgba(59,130,246,0.06)',
            '--accent-bg-hover': 'rgba(59,130,246,0.12)',
            '--accent-border':   'rgba(59,130,246,0.2)',
            '--accent-glow':     'rgba(59,130,246,0.12)',
            '--teal':            '#38BDF8',
            '--teal-dim':        '#0EA5E9',
            '--teal-bg':         'rgba(56,189,248,0.06)',
            '--teal-border':     'rgba(56,189,248,0.15)',
            '--success':         '#22C55E',
            '--success-dim':     '#16A34A',
            '--success-bg':      'rgba(34,197,94,0.06)',
            '--success-border':  'rgba(34,197,94,0.15)',
            '--warning':         '#EAB308',
            '--warning-bg':      'rgba(234,179,8,0.06)',
            '--warning-border':  'rgba(234,179,8,0.15)',
            '--error':           '#EF4444',
            '--error-bg':        'rgba(239,68,68,0.06)',
            '--error-border':    'rgba(239,68,68,0.15)',
        },
        email: {
            bgOuter:     '#0A0E18',
            bgCard:      '#0F1420',
            border:      '#1E2840',
            textPrimary: '#E8ECF4',
            textBody:    '#A8B4C8',
            textMuted:   '#506080',
            accent:      '#3B82F6',
            accentBtn:   '#2563EB',
            success:     '#22C55E',
            codeColor:   '#60A5FA',
            codeBg:      '#141A28',
            codeBorder:  '#1E2840',
        },
        ambient: {
            gradient1: 'radial-gradient(ellipse 600px 400px at 30% 0%, rgba(59,130,246,0.06) 0%, transparent 70%)',
            gradient2: 'radial-gradient(ellipse 500px 350px at 70% 10%, rgba(56,189,248,0.03) 0%, transparent 70%)',
        },
        trustGradient: { from: '#3B82F6', to: '#22C55E' },
    },

    // ─── ENTERPRISE / Corporate ───
    enterprise: {
        id: 'enterprise',
        name: 'VAC Protocol',
        audience: 'Enterprise buyers, CISOs, security teams',
        meta: {
            navBadgeText: 'VERIFIED',
            tagline: 'Every agent action traces to a verified human.',
            footerOrg: 'Violet Shores Pty Ltd',
        },
        tokens: {
            '--bg':              '#09090B',
            '--bg-elevated':     '#111113',
            '--surface':         '#18181B',
            '--surface-raised':  '#27272A',
            '--surface-hover':   '#303033',
            '--border':          '#27272A',
            '--border-light':    '#3F3F46',
            '--border-focus':    '#52525B',
            '--text-primary':    '#FAFAFA',
            '--text-secondary':  '#A1A1AA',
            '--text-tertiary':   '#71717A',
            '--text-muted':      '#52525B',
            '--accent':          '#A78BFA',
            '--accent-light':    '#C4B5FD',
            '--accent-dim':      '#8B5CF6',
            '--accent-bg':       'rgba(167,139,250,0.06)',
            '--accent-bg-hover': 'rgba(167,139,250,0.12)',
            '--accent-border':   'rgba(167,139,250,0.2)',
            '--accent-glow':     'rgba(167,139,250,0.1)',
            '--teal':            '#2DD4BF',
            '--teal-dim':        '#14B8A6',
            '--teal-bg':         'rgba(45,212,191,0.06)',
            '--teal-border':     'rgba(45,212,191,0.15)',
            '--success':         '#4ADE80',
            '--success-dim':     '#22C55E',
            '--success-bg':      'rgba(74,222,128,0.06)',
            '--success-border':  'rgba(74,222,128,0.15)',
            '--warning':         '#FACC15',
            '--warning-bg':      'rgba(250,204,21,0.06)',
            '--warning-border':  'rgba(250,204,21,0.15)',
            '--error':           '#F87171',
            '--error-bg':        'rgba(248,113,113,0.06)',
            '--error-border':    'rgba(248,113,113,0.15)',
        },
        email: {
            bgOuter:     '#09090B',
            bgCard:      '#111113',
            border:      '#27272A',
            textPrimary: '#FAFAFA',
            textBody:    '#A1A1AA',
            textMuted:   '#52525B',
            accent:      '#A78BFA',
            accentBtn:   '#8B5CF6',
            success:     '#4ADE80',
            codeColor:   '#C4B5FD',
            codeBg:      '#18181B',
            codeBorder:  '#27272A',
        },
        ambient: {
            gradient1: 'radial-gradient(ellipse 600px 400px at 30% 0%, rgba(167,139,250,0.05) 0%, transparent 70%)',
            gradient2: 'radial-gradient(ellipse 500px 350px at 70% 10%, rgba(45,212,191,0.03) 0%, transparent 70%)',
        },
        trustGradient: { from: '#A78BFA', to: '#2DD4BF' },
    },

    // ─── DEFENSE / Coalition ───
    defense: {
        id: 'defense',
        name: 'VAC Protocol \u2014 Defense',
        audience: 'Military, defense contractors, coalition ops',
        meta: {
            navBadgeText: 'CHAIN VALID',
            tagline: 'Cryptographic chain of command for autonomous systems.',
            footerOrg: 'Violet Shores Pty Ltd',
        },
        tokens: {
            '--bg':              '#060A0E',
            '--bg-elevated':     '#0A1018',
            '--surface':         '#0F1820',
            '--surface-raised':  '#162030',
            '--surface-hover':   '#1C2838',
            '--border':          '#152030',
            '--border-light':    '#203040',
            '--border-focus':    '#305060',
            '--text-primary':    '#D4E4E8',
            '--text-secondary':  '#90A8B8',
            '--text-tertiary':   '#607888',
            '--text-muted':      '#405868',
            '--accent':          '#10B981',
            '--accent-light':    '#34D399',
            '--accent-dim':      '#059669',
            '--accent-bg':       'rgba(16,185,129,0.06)',
            '--accent-bg-hover': 'rgba(16,185,129,0.12)',
            '--accent-border':   'rgba(16,185,129,0.2)',
            '--accent-glow':     'rgba(16,185,129,0.1)',
            '--teal':            '#22D3EE',
            '--teal-dim':        '#06B6D4',
            '--teal-bg':         'rgba(34,211,238,0.06)',
            '--teal-border':     'rgba(34,211,238,0.15)',
            '--success':         '#10B981',
            '--success-dim':     '#059669',
            '--success-bg':      'rgba(16,185,129,0.06)',
            '--success-border':  'rgba(16,185,129,0.15)',
            '--warning':         '#F59E0B',
            '--warning-bg':      'rgba(245,158,11,0.06)',
            '--warning-border':  'rgba(245,158,11,0.15)',
            '--error':           '#EF4444',
            '--error-bg':        'rgba(239,68,68,0.06)',
            '--error-border':    'rgba(239,68,68,0.15)',
        },
        email: {
            bgOuter:     '#060A0E',
            bgCard:      '#0A1018',
            border:      '#152030',
            textPrimary: '#D4E4E8',
            textBody:    '#90A8B8',
            textMuted:   '#405868',
            accent:      '#10B981',
            accentBtn:   '#059669',
            success:     '#10B981',
            codeColor:   '#34D399',
            codeBg:      '#0F1820',
            codeBorder:  '#152030',
        },
        ambient: {
            gradient1: 'radial-gradient(ellipse 600px 400px at 30% 0%, rgba(16,185,129,0.05) 0%, transparent 70%)',
            gradient2: 'radial-gradient(ellipse 500px 350px at 70% 10%, rgba(34,211,238,0.03) 0%, transparent 70%)',
        },
        trustGradient: { from: '#10B981', to: '#22D3EE' },
    },
};

/**
 * VACTheme — runtime theme application
 */
const VACTheme = {

    /**
     * Domain → theme mapping for auto-detection.
     * Checked against recipient email domain.
     * Most specific match wins (full domain before TLD).
     */
    DOMAIN_MAP: {
        // Government / Federal
        '.gov':        'nist',
        '.gov.au':     'nist',
        '.gov.nz':     'nist',
        '.gov.uk':     'nist',
        '.gc.ca':      'nist',
        'nist.gov':    'nist',
        'dhs.gov':     'nist',
        'dod.gov':     'defense',
        'army.mil':    'defense',
        'navy.mil':    'defense',
        'af.mil':      'defense',
        '.mil':        'defense',
        // Defense contractors
        'lockheedmartin.com': 'defense',
        'northropgrumman.com': 'defense',
        'raytheon.com': 'defense',
        'baesystems.com': 'defense',
        'l3harris.com': 'defense',
        'boeing.com':  'defense',
        // Enterprise (large corps — extend as needed)
        'microsoft.com': 'enterprise',
        'google.com':  'enterprise',
        'amazon.com':  'enterprise',
        'apple.com':   'enterprise',
        'meta.com':    'enterprise',
        'salesforce.com': 'enterprise',
        'ibm.com':     'enterprise',
        'oracle.com':  'enterprise',
        'stripe.com':  'enterprise',
        'anthropic.com': 'enterprise',
        'openai.com':  'enterprise',
    },

    /** Auto-detect theme from recipient email domain */
    detectFromEmail(email) {
        if (!email || !email.includes('@')) return 'default';
        const domain = email.split('@')[1].toLowerCase();

        // Check exact domain first
        if (this.DOMAIN_MAP[domain]) return this.DOMAIN_MAP[domain];

        // Check suffix matches (e.g. .gov, .mil, .gov.au)
        // Sort by length descending so .gov.au matches before .gov
        const suffixes = Object.keys(this.DOMAIN_MAP)
            .filter(k => k.startsWith('.'))
            .sort((a, b) => b.length - a.length);

        for (const suffix of suffixes) {
            if (domain.endsWith(suffix)) return this.DOMAIN_MAP[suffix];
        }

        return 'default';
    },

    /** Get theme from URL param, or fallback */
    detect() {
        const params = new URLSearchParams(window.location.search);
        return VAC_THEMES[params.get('theme')] || VAC_THEMES.default;
    },

    /** Apply theme to document */
    apply(themeOrId) {
        const theme = typeof themeOrId === 'string'
            ? (VAC_THEMES[themeOrId] || VAC_THEMES.default)
            : themeOrId;

        // Inject CSS custom properties
        const root = document.documentElement;
        for (const [prop, value] of Object.entries(theme.tokens)) {
            root.style.setProperty(prop, value);
        }

        // Apply ambient background
        const ambient = document.querySelector('.ambient');
        if (ambient && theme.ambient) {
            ambient.style.background = [theme.ambient.gradient1, theme.ambient.gradient2].join(', ');
        }

        // Update SVG gradient stops for trust ring
        const gradFrom = document.getElementById('trustGradFrom');
        const gradTo = document.getElementById('trustGradTo');
        if (gradFrom && theme.trustGradient) gradFrom.setAttribute('stop-color', theme.trustGradient.from);
        if (gradTo && theme.trustGradient) gradTo.setAttribute('stop-color', theme.trustGradient.to);

        // Update nav badge text
        const badge = document.getElementById('nav-badge');
        if (badge && theme.meta) badge.textContent = theme.meta.navBadgeText;

        // Store for JS access
        window._vacTheme = theme;
        return theme;
    },

    /** Get current theme */
    current() {
        return window._vacTheme || VAC_THEMES.default;
    },

    /** Get all theme IDs */
    list() {
        return Object.keys(VAC_THEMES);
    },

    /** Get email tokens for backend (serializable) */
    emailTokens(themeId) {
        const theme = VAC_THEMES[themeId] || VAC_THEMES.default;
        return { id: theme.id, ...theme.email, tagline: theme.meta.tagline, footerOrg: theme.meta.footerOrg };
    },
};

// Auto-detect and apply on load if in browser
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    // Don't auto-apply if this is loaded as a module by another script
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => VACTheme.apply(VACTheme.detect()));
    } else {
        VACTheme.apply(VACTheme.detect());
    }
}
