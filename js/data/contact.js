// =====================================================================
// CONTACT & SOCIAL DATA
// ---------------------------------------------------------------------
// Powers the Contact page and the footer.
//
// - Leave a social link as an empty string ('') to hide that icon —
//   the site only displays social links that have been filled in.
// - `whatsappNumber` should be in international format with no
//   spaces or symbols, e.g. '447123456789' (used to build the
//   wa.me link). Leave empty to hide the WhatsApp button.
// =====================================================================

const contact = {
  email: '[EMAIL]',
  phone: '[PHONE]',
  whatsappNumber: '', // e.g. '447123456789' — leave blank to hide the WhatsApp button
  whatsappDisplay: '[WHATSAPP]',
  location: 'Abbottabad, Pakistan',
  inPersonAreas: 'Abbottabad',
  teachingMode: 'Online & In-Person',

  social: {
    linkedin: '',
    instagram: '',
    facebook: '',
    youtube: '',
  },

  // Tuition types offered. Each value is either `true`/`false`, or a
  // short string when there's a caveat worth showing (e.g. "depending
  // on free slots & fee").
  tuition: {
    oLevelIgcse: true,
    aLevel: true,
    individual: 'Yes (depending upon free slots & fee)',
    group: true,
    online: true,
    inPerson: true,
  },

  // Preferred teaching availability.
  availability: {
    days: 'Monday – Wednesday',
    slots: ['10:00 AM – 1:00 PM', '2:30 PM – 4:30 PM'],
    timezone: 'PST',
  },
}

export default contact
