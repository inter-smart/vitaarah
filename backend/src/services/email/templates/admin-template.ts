export function AdminNotificationTemplate(title: string, fields: { label: string; value: any }[]) {
  const rows = fields
    .map(
      (field) => `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #ECE7D7; font-weight: bold; color: #5D5D5D; width: 35%;">${field.label}</td>
        <td style="padding: 10px; border-bottom: 1px solid #ECE7D7; color: #1F1F1F;">${field.value || '-'}</td>
      </tr>
    `
    )
    .join('');

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>${title}</title>
      </head>
      <body style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #FFF8F4; margin: 0; padding: 20px; -webkit-font-smoothing: antialiased;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border: 1px solid #ECE7D7; border-radius: 4px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); overflow: hidden;">
          <!-- Header -->
          <tr>
            <td style="background-color: #A14962; padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: normal;">Vitaarah</h1>
            </td>
          </tr>
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="color: #A14962; margin-top: 0; margin-bottom: 20px; font-size: 20px; border-bottom: 2px solid #E9CBA3; padding-bottom: 10px;">${title}</h2>
              <p style="color: #5d5d5d; font-size: 16px; line-height: 1.5; margin-bottom: 30px;">A new submission has been received. Please review the details below:</p>
              <table cellpadding="0" cellspacing="0" width="100%" style="font-size: 15px; border-collapse: collapse;">
                ${rows}
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color: #FDFBFAF5; padding: 20px; text-align: center; font-size: 13px; color: #7C7C7C; border-top: 1px solid #ECE7D7;">
              © ${new Date().getFullYear()} Vitaarah. All rights reserved.
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}
