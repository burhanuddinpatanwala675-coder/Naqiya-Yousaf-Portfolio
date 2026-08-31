// =====================================================================
// CERTIFICATE GALLERY DATA
// ---------------------------------------------------------------------
// To add a new certificate:
//   1. Place the certificate file (PDF, JPG, or PNG) inside /certificates/
//   2. Add one object below pointing to that file.
//
// `preview` is optional — if omitted, a generic certificate icon card
// is shown instead of an image thumbnail. Use a JPG/PNG preview image
// for the best-looking gallery card (a PDF cannot be thumbnailed
// automatically in a static site).
//
// Example:
// {
//   title: 'Postgraduate Certificate in Education',
//   institution: 'University of Example',
//   year: '2020',
//   file: 'certificates/pgce-certificate.pdf',
//   preview: 'certificates/pgce-certificate-preview.jpg',
// }
//
// Shipped empty by default so the gallery never links to a certificate
// file that doesn't actually exist yet.
// =====================================================================

const certificates = []

export default certificates
