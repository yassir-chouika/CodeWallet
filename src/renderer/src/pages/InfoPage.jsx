const InfoPage = () => {
  return (
    <div className="container">
      <h1>ℹ️ About CodeWallet</h1>

      <section style={{ marginBottom: '2rem' }}>
        <h2>What is CodeWallet?</h2>
        <p>
          <strong>CodeWallet</strong> is a free desktop app built for developers who want a simple
          way to store, tag, and reuse code snippets. It’s cross-platform, lightweight, and saves
          your work locally — even after a restart.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Features</h2>
        <ul style={{ paddingLeft: '1.5rem', listStyle: 'disc' }}>
          <li>💾 Save, edit, and delete snippets</li>
          <li>🏷️ Add tags for easy filtering</li>
          <li>🌙 Light/dark mode </li>
          <li>🧠 Persistent local storage</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Developer</h2>
        <p>
          Created by <strong>Yassir Chouika</strong> as part of a school project. Built with
          Electron, React, and coffee.
        </p>
      </section>

      <section>
        <h2>Legal</h2>
        <p style={{ fontSize: '0.95rem', color: '#666' }}>
          This app is provided as-is for educational purposes. CodeWallet does not collect or store
          any personal data. Icons and logos are used under fair use.
        </p>
      </section>
    </div>
  )
}

export default InfoPage
