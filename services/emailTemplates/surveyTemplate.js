module.exports = survey => `
  <html>
    <body>
      <div style="text-align: center;">
        <h1>We'd like your input!</h1>
        <h3>Please answer the following question.</h3>
        <p>${survey.body}</p>
        <div>
          <a href="http://localhost:3000">Yes</a>
        </div>
        <div>
          <a href="http://localhost:3000">No</a>
        </div>
      </div>
    </body>
  </html>

    `;
