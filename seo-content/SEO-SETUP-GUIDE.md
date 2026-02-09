# Google Search Console & SEO Setup Guide
## Step-by-Step Tutorial for Car Rental Delhi Website

**Website:** https://carrentaldelhi.me  
**Last Updated:** February 2026

---

## Table of Contents
1. [Generate Sitemap](#1-generate-sitemap)
2. [Set Up Google Search Console](#2-set-up-google-search-console)
3. [Submit Sitemap](#3-submit-sitemap)
4. [Request Indexing for Priority Pages](#4-request-indexing-for-priority-pages)
5. [Monitor Performance](#5-monitor-performance)
6. [Optional: Add Internal Links](#6-optional-add-internal-links)

---

## 1. Generate Sitemap

First, we need to create a sitemap.xml file for your website.

### Option A: Manual Sitemap (Quick Method)

Create a file called `sitemap.xml` in your `public/` folder:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>https://carrentaldelhi.me/</loc>
    <lastmod>2026-02-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Airport Transfer Pages (High Priority) -->
  <url>
    <loc>https://carrentaldelhi.me/airport/delhi/</loc>
    <lastmod>2026-02-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://carrentaldelhi.me/airport/to-gurgaon/</loc>
    <lastmod>2026-02-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://carrentaldelhi.me/airport/to-noida/</loc>
    <lastmod>2026-02-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://carrentaldelhi.me/airport/to-south-delhi/</loc>
    <lastmod>2026-02-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://carrentaldelhi.me/airport/to-connaught-place/</loc>
    <lastmod>2026-02-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://carrentaldelhi.me/airport/to-dwarka/</loc>
    <lastmod>2026-02-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://carrentaldelhi.me/airport/from-gurgaon/</loc>
    <lastmod>2026-02-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://carrentaldelhi.me/airport/from-noida/</loc>
    <lastmod>2026-02-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Corporate Pages -->
  <url>
    <loc>https://carrentaldelhi.me/corporate/gurgaon/</loc>
    <lastmod>2026-02-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://carrentaldelhi.me/corporate/noida/</loc>
    <lastmod>2026-02-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://carrentaldelhi.me/corporate/aerocity/</loc>
    <lastmod>2026-02-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://carrentaldelhi.me/corporate/delhi-gurgaon-commute/</loc>
    <lastmod>2026-02-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://carrentaldelhi.me/corporate/connaught-place/</loc>
    <lastmod>2026-02-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Full-Day Hire Pages -->
  <url>
    <loc>https://carrentaldelhi.me/hire/south-delhi/</loc>
    <lastmod>2026-02-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://carrentaldelhi.me/hire/dwarka/</loc>
    <lastmod>2026-02-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://carrentaldelhi.me/hire/guest-transportation/</loc>
    <lastmod>2026-02-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Outstation Pages -->
  <url>
    <loc>https://carrentaldelhi.me/outstation/delhi-to-jaipur/</loc>
    <lastmod>2026-02-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://carrentaldelhi.me/outstation/delhi-to-agra/</loc>
    <lastmod>2026-02-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Events Pages -->
  <url>
    <loc>https://carrentaldelhi.me/events/wedding-car-rental/</loc>
    <lastmod>2026-02-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

After creating this file, run:
```bash
npm run generate
git add .
git commit -m "Add sitemap.xml"
git push
npx gh-pages --dotfiles -d .output/public
```

Your sitemap will be available at: **https://carrentaldelhi.me/sitemap.xml**

---

## 2. Set Up Google Search Console

### Step 2.1: Go to Google Search Console
1. Open your browser
2. Go to: **https://search.google.com/search-console**
3. Sign in with your Google account (use the same account you want to manage the website with)

### Step 2.2: Add Your Property
1. Click **"Add property"** (or "Start now" if first time)
2. You'll see two options:
   - **Domain** - Covers all subdomains (requires DNS verification)
   - **URL prefix** - Covers just the specific URL

3. Select **"URL prefix"**
4. Enter: `https://carrentaldelhi.me`
5. Click **"Continue"**

### Step 2.3: Verify Ownership
Google will show you several verification methods. Choose **HTML file** (easiest):

1. Download the HTML verification file Google provides
   - It will be named something like: `googlexxxxxxxxxx.html`
   
2. Put this file in your `public/` folder:
   ```
   /home/gaurav/Documents/car rental/website/public/googlexxxxxxxxxx.html
   ```

3. Rebuild and redeploy:
   ```bash
   npm run generate
   git add .
   git commit -m "Add Google verification file"
   git push
   npx gh-pages --dotfiles -d .output/public
   ```

4. Wait 1-2 minutes for deploy to complete

5. Go back to Google Search Console and click **"Verify"**

6. You should see: **"Ownership verified"** ✅

### Alternative: DNS Verification (if you prefer)
1. Choose "DNS record" verification method
2. Copy the TXT record Google provides
3. Go to your domain registrar (where you bought carrentaldelhi.me)
4. Add a TXT record with the value Google gave you
5. Wait 5-10 minutes, then click "Verify" in Search Console

---

## 3. Submit Sitemap

### Step 3.1: Navigate to Sitemaps
1. In Google Search Console, click on your property (carrentaldelhi.me)
2. In the left sidebar, click **"Sitemaps"**

### Step 3.2: Add Sitemap URL
1. In the "Add a new sitemap" field, enter: `sitemap.xml`
   - Full URL shown should be: `https://carrentaldelhi.me/sitemap.xml`
   
2. Click **"Submit"**

### Step 3.3: Verify Submission
1. You should see your sitemap appear in the list
2. Status will initially show "Pending"
3. After a few minutes/hours, it should show:
   - **Status:** Success
   - **Discovered URLs:** 20 (or however many pages you have)

### Troubleshooting
If you get an error:
- Make sure the sitemap.xml file exists at https://carrentaldelhi.me/sitemap.xml
- Test it by opening the URL in your browser
- Check for XML syntax errors

---

## 4. Request Indexing for Priority Pages

Google will automatically crawl pages from your sitemap, but you can speed up indexing for important pages.

### Step 4.1: Go to URL Inspection
1. In Google Search Console, use the **search bar at the top**
2. This is the "URL Inspection" tool

### Step 4.2: Submit Priority Pages
Submit these pages in order of priority:

**🔴 HIGH PRIORITY (Submit First)**
1. `https://carrentaldelhi.me/` (Homepage)
2. `https://carrentaldelhi.me/airport/delhi/`
3. `https://carrentaldelhi.me/airport/to-gurgaon/`
4. `https://carrentaldelhi.me/airport/to-noida/`
5. `https://carrentaldelhi.me/corporate/gurgaon/`

**🟡 MEDIUM PRIORITY (Submit Next)**
6. `https://carrentaldelhi.me/airport/to-south-delhi/`
7. `https://carrentaldelhi.me/airport/to-connaught-place/`
8. `https://carrentaldelhi.me/airport/from-gurgaon/`
9. `https://carrentaldelhi.me/corporate/noida/`
10. `https://carrentaldelhi.me/corporate/aerocity/`

**🟢 LOWER PRIORITY (Submit Later)**
- All other pages

### Step 4.3: How to Request Indexing
For each URL:

1. Paste the URL in the search bar at the top
2. Press Enter
3. Wait for Google to fetch the page info
4. You'll see one of two results:
   - **"URL is on Google"** - Great! Already indexed
   - **"URL is not on Google"** - Click **"Request Indexing"**

5. Wait for the request to process (takes 1-2 minutes)
6. You'll see: **"Indexing requested"** ✅

### Important Notes:
- ⚠️ **Daily Limit:** You can only request indexing for ~10-20 URLs per day
- ⏱️ **Processing Time:** It can take 1-14 days for pages to appear in search results
- 📊 **Priority:** Focus on your top 5 pages first

---

## 5. Monitor Performance

### Step 5.1: Check Index Status (After 1-3 Days)
1. Go to **"Pages"** in the left sidebar (under "Indexing")
2. Look at:
   - **Indexed pages** - Pages that appear in Google
   - **Not indexed** - Pages with issues

3. If pages aren't indexed, click on them to see why:
   - "Discovered - currently not indexed" = Google found it but hasn't indexed yet (normal, wait more)
   - "Crawled - currently not indexed" = Google crawled but chose not to index (may need content improvements)

### Step 5.2: Check Performance (After 1-2 Weeks)
1. Go to **"Performance"** in the left sidebar
2. Set date range to "Last 7 days" or "Last 28 days"
3. Look at:
   - **Total clicks** - How many people clicked your search results
   - **Total impressions** - How many times your pages appeared in search
   - **Average CTR** - Click-through rate (aim for 3-5%+)
   - **Average position** - Your ranking position (lower is better, 1 = top)

### Step 5.3: Check Keywords
1. In the Performance report, scroll down to see **"Queries"**
2. This shows what keywords people are searching to find your site
3. Look for your target keywords:
   - "delhi airport car rental"
   - "airport to gurgaon cab"
   - "car rental with driver delhi"
   - etc.

### Step 5.4: Track Progress Weekly
Create a simple tracking sheet:

| Date | Indexed Pages | Total Clicks | Total Impressions | Avg Position |
|------|---------------|--------------|-------------------|--------------|
| Feb 9, 2026 | 0 | 0 | 0 | - |
| Feb 16, 2026 | ? | ? | ? | ? |
| Feb 23, 2026 | ? | ? | ? | ? |
| Mar 2, 2026 | ? | ? | ? | ? |

---

## 6. Optional: Add Internal Links

Internal links help Google discover and understand your pages better.

### Add Links to Homepage Footer
You can add links to your SEO landing pages in the homepage footer.

Edit `/pages/index.vue` and add a new footer section:

```vue
<!-- Add this in the footer section -->
<div class="mt-8 pt-8 border-t border-white/5">
  <h4 class="font-semibold text-white mb-4">Popular Services</h4>
  <div class="flex flex-wrap gap-2">
    <NuxtLink to="/airport/delhi" class="text-sm text-white/50 hover:text-accent">
      Delhi Airport Transfer
    </NuxtLink>
    <NuxtLink to="/airport/to-gurgaon" class="text-sm text-white/50 hover:text-accent">
      Airport to Gurgaon
    </NuxtLink>
    <NuxtLink to="/corporate/gurgaon" class="text-sm text-white/50 hover:text-accent">
      Corporate Gurgaon
    </NuxtLink>
    <NuxtLink to="/outstation/delhi-to-jaipur" class="text-sm text-white/50 hover:text-accent">
      Delhi to Jaipur
    </NuxtLink>
    <!-- Add more links as needed -->
  </div>
</div>
```

### Add Navigation Links to Header
You can also add dropdown menus in the header for different service categories.

---

## Expected Timeline

| Week | What to Expect |
|------|----------------|
| Week 1 | Pages start getting crawled. Some may appear in index. |
| Week 2 | More pages indexed. First impressions start appearing. |
| Week 3-4 | Rankings stabilize. You'll see consistent impressions. |
| Month 2+ | Rankings improve as Google understands your content. |

---

## Quick Reference: All Your Landing Page URLs

### Airport Transfer Pages (8)
- https://carrentaldelhi.me/airport/delhi/
- https://carrentaldelhi.me/airport/to-gurgaon/
- https://carrentaldelhi.me/airport/to-noida/
- https://carrentaldelhi.me/airport/to-south-delhi/
- https://carrentaldelhi.me/airport/to-connaught-place/
- https://carrentaldelhi.me/airport/to-dwarka/
- https://carrentaldelhi.me/airport/from-gurgaon/
- https://carrentaldelhi.me/airport/from-noida/

### Corporate Pages (5)
- https://carrentaldelhi.me/corporate/gurgaon/
- https://carrentaldelhi.me/corporate/noida/
- https://carrentaldelhi.me/corporate/aerocity/
- https://carrentaldelhi.me/corporate/delhi-gurgaon-commute/
- https://carrentaldelhi.me/corporate/connaught-place/

### Full-Day Hire Pages (3)
- https://carrentaldelhi.me/hire/south-delhi/
- https://carrentaldelhi.me/hire/dwarka/
- https://carrentaldelhi.me/hire/guest-transportation/

### Outstation Pages (2)
- https://carrentaldelhi.me/outstation/delhi-to-jaipur/
- https://carrentaldelhi.me/outstation/delhi-to-agra/

### Events Pages (1)
- https://carrentaldelhi.me/events/wedding-car-rental/

---

## Checklist ✅

Use this checklist to track your progress:

- [ ] Created sitemap.xml in public/ folder
- [ ] Deployed sitemap to live site
- [ ] Verified sitemap works: https://carrentaldelhi.me/sitemap.xml
- [ ] Created Google Search Console account
- [ ] Added property: carrentaldelhi.me
- [ ] Downloaded HTML verification file
- [ ] Added verification file to public/ folder
- [ ] Deployed verification file
- [ ] Verified ownership in Search Console
- [ ] Submitted sitemap in Search Console
- [ ] Requested indexing for homepage
- [ ] Requested indexing for top 5 airport pages
- [ ] Requested indexing for top 5 corporate pages
- [ ] Set up weekly check reminder
- [ ] Checked index status after 3 days
- [ ] Checked performance after 2 weeks

---

## Need Help?

If you get stuck:
1. **Google's Documentation:** https://support.google.com/webmasters
2. **Sitemap Validator:** https://www.xml-sitemaps.com/validate-xml-sitemap.html
3. **Check if page is indexed:** Search `site:carrentaldelhi.me/airport/delhi` in Google

---

*Good luck with your SEO! 🚀*
