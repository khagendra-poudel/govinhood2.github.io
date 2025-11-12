# Form Integration Guide for GitHub Pages

Since GitHub Pages only supports static hosting, the PHP form handlers in this project won't work. Here are recommended alternatives:

## Option 1: Formspree (Recommended - Free tier available)

1. Sign up at https://formspree.io/
2. Create a new form
3. Replace the form action in `index-4.html`:

```html
<form id="form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- Keep existing form fields -->
    <input type="text" name="name" placeholder="Name:" required />
    <input type="email" name="email" placeholder="E-mail:" required />
    <input type="tel" name="phone" placeholder="Phone:" required />
    <textarea name="message" placeholder="Message:" required></textarea>
    <button type="submit" class="btn bt__2">Submit</button>
</form>
```

## Option 2: Web3Forms (Free, No registration required)

1. Get your access key from https://web3forms.com/
2. Update the form:

```html
<form action="https://api.web3forms.com/submit" method="POST">
    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
    <input type="text" name="name" placeholder="Name:" required>
    <input type="email" name="email" placeholder="E-mail:" required>
    <input type="tel" name="phone" placeholder="Phone:" required>
    <textarea name="message" placeholder="Message:" required></textarea>
    <button type="submit" class="btn bt__2">Submit</button>
</form>
```

## Option 3: EmailJS (Client-side email service)

1. Sign up at https://www.emailjs.com/
2. Set up email service and template
3. Add EmailJS SDK to your HTML:

```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
    emailjs.init('YOUR_PUBLIC_KEY');
</script>
```

4. Update form submission handler in JavaScript

## Option 4: Netlify Forms (If you migrate to Netlify)

If you decide to host on Netlify instead of GitHub Pages:

1. Add `netlify` attribute to form tag:
```html
<form name="contact" method="POST" data-netlify="true">
    <!-- form fields -->
</form>
```

2. Netlify automatically processes the form submissions

## Newsletter Subscription

For the newsletter subscription form, consider:

1. **Mailchimp** - Popular email marketing service
2. **ConvertKit** - For creators and bloggers
3. **Buttondown** - Simple newsletter service
4. **Substack** - Newsletter platform

## Testing Forms Locally

When testing locally, forms won't work without a backend. Use these tools for local development:

1. **Mailtrap** - https://mailtrap.io/ (Email sandbox)
2. **MailHog** - Local SMTP testing tool
3. **Formcarry** - Form backend as a service

## Current Form Files (Non-functional on GitHub Pages)

- `bat/MailHandler.php` - Contact form handler
- `bat/MailHandler-sub.php` - Newsletter subscription handler

These files are kept for reference but won't execute on GitHub Pages.

## Recommended Action

Choose one of the options above and update:
1. `index-4.html` - Contact form
2. All pages (footer) - Newsletter subscription form

Remember to:
- Update form action URLs
- Add any required hidden fields
- Test form submissions
- Update privacy policy if collecting user data
