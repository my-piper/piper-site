# Piper Site - UI/UX Testing Checklist

## Overview
This document outlines the comprehensive testing tasks for the Piper website (https://piper.my). The site is a bilingual (English/Russian) marketing platform for an AI canvas tool.

---

## 1. Visual & UI Testing

### Layout & Design
- [ ] Verify all sections are visually aligned and properly spaced
- [ ] Check for consistent padding and margins across all components
- [ ] Ensure text hierarchy is clear (headings, subheadings, body text)
- [ ] Verify color scheme consistency throughout the site
- [ ] Check that glassmorphism effects render correctly
- [ ] Confirm gradient backgrounds display properly
- [ ] Verify all icons and images load correctly

### Typography
- [ ] Confirm Inter font loads properly across all pages
- [ ] Check for consistent font weights (300, 400, 500, 600, 700)
- [ ] Verify text is readable on all backgrounds
- [ ] Check for proper line heights and letter spacing

### Components
- [ ] **Navbar**: Test scroll behavior (should become compact on scroll)
- [ ] **Hero Section**: Verify workflow animation displays correctly
- [ ] **All Models Section**: Check model cards display properly in grid layout
- [ ] **Use Cases**: Verify all 10 case cards render with images and text
- [ ] **Footer**: Check all links work and layout is correct
- [ ] **Cookie Banner**: Verify it appears on first visit and respects user consent

---

## 2. Responsive Design Testing

### Mobile (< 768px)
- [ ] Test on iPhone (iOS Safari)
- [ ] Test on Android device (Chrome)
- [ ] Verify navbar collapses properly
- [ ] Check that all text is readable
- [ ] Confirm buttons are easily tappable (min 44px touch target)
- [ ] Verify cookie banner is full-width without margins/border-radius
- [ ] Check that grid layouts stack vertically
- [ ] Test smooth scrolling behavior

### Tablet (768px - 1024px)
- [ ] Test on iPad or similar tablet
- [ ] Verify grid layouts show 2-3 columns appropriately
- [ ] Check navigation responsiveness
- [ ] Confirm all interactive elements are accessible

### Desktop (> 1024px)
- [ ] Test on standard laptop (1366px, 1440px, 1920px)
- [ ] Test on ultra-wide monitors (2560px+)
- [ ] Verify max-width constraints prevent over-stretching
- [ ] Check that cookie banner has proper width limits and margins
- [ ] Confirm navbar is fully expanded

---

## 3. Functionality Testing

### Navigation
- [ ] Test all navbar links work correctly
- [ ] Verify smooth scroll to sections
- [ ] Check language switcher (EN/RU) works properly
- [ ] Test "Try/Попробовать" button redirects to https://app.piper.my
- [ ] Verify all footer links navigate correctly

### Language Switching
- [ ] Switch from English to Russian - verify all content translates
- [ ] Switch from Russian to English - verify content reverts
- [ ] Check that URL changes to /en/ or /ru/
- [ ] Verify that page refresh maintains selected language
- [ ] Test that fallback English text appears if translation is missing

### Cookie Consent
- [ ] Verify banner appears on first visit
- [ ] Click "Accept" - confirm banner disappears
- [ ] Refresh page - confirm banner doesn't reappear
- [ ] Clear cookies - verify banner reappears
- [ ] Click "Learn more" link - verify it navigates to Privacy Policy
- [ ] Test on mobile - confirm banner is edge-to-edge with no rounded corners

### Forms & Interactions
- [ ] Test all hover effects on buttons and links
- [ ] Verify all clickable elements have appropriate cursor (pointer)
- [ ] Check animation smoothness (framer-motion animations)
- [ ] Test any interactive workflow demonstrations

---

## 4. Cross-Browser Testing

Test the site on:
- [ ] **Chrome** (latest version) - Desktop & Mobile
- [ ] **Safari** (latest version) - Desktop & Mobile
- [ ] **Firefox** (latest version) - Desktop
- [ ] **Edge** (latest version) - Desktop
- [ ] **Samsung Internet** - Mobile (if available)

Check for:
- Layout consistency
- Font rendering
- Animation performance
- JavaScript functionality

---

## 5. SEO & Meta Tags Verification

### Basic SEO
- [ ] Right-click → View Page Source
- [ ] Verify `<title>` tag: "Piper — open source AI canvas for creators"
- [ ] Check meta description is present and descriptive
- [ ] Confirm meta keywords are included
- [ ] Verify robots meta tag is set to "index, follow"

### Open Graph Tags (Social Sharing)
- [ ] Verify og:title, og:description, og:image are present
- [ ] Check og:url points to https://piper.my
- [ ] Confirm og:locale includes en_US and ru_RU
- [ ] Verify og:image points to /og-image.png (1200x630px)
- [ ] Test sharing on Facebook (use [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/))
- [ ] Test sharing on LinkedIn

### Twitter Cards
- [ ] Verify twitter:card meta tags are present
- [ ] Check twitter:image is set
- [ ] Test sharing on Twitter (use [Twitter Card Validator](https://cards-dev.twitter.com/validator))

### Canonical & Other
- [ ] Verify canonical URL is set
- [ ] Check theme-color meta tag (#000000)

---

## 6. Performance Testing

### Load Speed
- [ ] Test initial page load time (should be < 3 seconds)
- [ ] Check for render-blocking resources
- [ ] Verify images are optimized
- [ ] Test with slow 3G connection (throttle in DevTools)

### Lighthouse Audit
Run Lighthouse in Chrome DevTools and verify scores:
- [ ] **Performance**: Target > 90
- [ ] **Accessibility**: Target > 90
- [ ] **Best Practices**: Target > 90
- [ ] **SEO**: Target > 90

### Animation Performance
- [ ] Check for smooth 60fps animations
- [ ] Verify no janky scrolling
- [ ] Test on lower-end devices if possible

---

## 7. Accessibility Testing

### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Verify focus indicators are visible
- [ ] Check that all buttons/links are reachable via keyboard
- [ ] Test Enter/Space keys activate buttons

### Screen Reader Testing
- [ ] Test with VoiceOver (Mac) or NVDA (Windows)
- [ ] Verify all images have alt text
- [ ] Check heading structure is logical (H1 → H2 → H3)
- [ ] Confirm links have descriptive text

### Color Contrast
- [ ] Use browser extension or tool to check contrast ratios
- [ ] Verify text meets WCAG AA standards (4.5:1 for normal text)
- [ ] Check that focus states have sufficient contrast

### ARIA Labels
- [ ] Verify buttons have proper aria-labels
- [ ] Check that decorative elements are hidden from screen readers

---

## 8. Content Verification

### English Content
- [ ] Verify all text is grammatically correct
- [ ] Check for typos and spelling errors
- [ ] Confirm brand name "Piper" is consistently capitalized
- [ ] Verify all CTAs are clear and compelling

### Russian Content
- [ ] Verify all translations are accurate
- [ ] Check for proper Russian grammar and punctuation
- [ ] Confirm no machine-translation artifacts
- [ ] Verify Cyrillic characters render correctly

### Links & Resources
- [ ] Test all external links (especially https://app.piper.my)
- [ ] Verify Privacy Policy page loads
- [ ] Check Terms of Use page
- [ ] Verify GDPR page
- [ ] Check Company page

---

## 9. Browser Console Errors

- [ ] Open DevTools Console on each page
- [ ] Verify no JavaScript errors
- [ ] Check for no 404 errors for missing resources
- [ ] Confirm no CORS issues
- [ ] Look for any warning messages

---

## 10. Edge Cases & Stress Testing

- [ ] Test with ad blockers enabled
- [ ] Test with JavaScript disabled (graceful degradation)
- [ ] Test with very long usernames/content (if applicable)
- [ ] Verify no horizontal scrolling on any viewport
- [ ] Test rapid language switching
- [ ] Test navigation while page is still loading

---

## Reporting Issues

When reporting bugs or issues, please include:

1. **Description**: Clear description of the issue
2. **Steps to Reproduce**: Exact steps to recreate the problem
3. **Expected Behavior**: What should happen
4. **Actual Behavior**: What actually happens
5. **Browser/Device**: Browser version, OS, device type
6. **Screenshots**: Visual evidence of the issue
7. **Severity**: Critical / High / Medium / Low

---

## Testing Environment

- **URL**: https://piper.my (production) or local development server
- **Languages**: English (EN), Russian (RU)
- **Pages to Test**:
  - Homepage (/)
  - Company (/en/company, /ru/company)
  - Privacy Policy (/en/privacy-policy, /ru/privacy-policy)
  - Terms of Use (/en/terms-of-use, /ru/terms-of-use)
  - GDPR (/en/gdpr, /ru/gdpr)

---

## Sign-off

- [ ] All critical issues resolved
- [ ] All high-priority issues addressed
- [ ] Site ready for production deployment
