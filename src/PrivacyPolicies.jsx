const policies = [
  {
    app: 'Synapse Brain Games',
    description:
      'Synapse Brain Games does not collect, store, or share personal data from users.',
  },
  {
    app: 'Antonyms',
    description:
      'Antonyms does not collect, store, or share personal data from users.',
  },
];

function PrivacyPolicies() {
  return (
    <div>
      <div className="glass-effect">
        <div className="block">
          <div className="content">
            <h1>Privacy Policies</h1>
            <p>Last updated: 8/4/23</p>
            {policies.map((policy) => (
              <section key={policy.app}>
                <h2>Privacy Policy | {policy.app}</h2>
                <p>{policy.description}</p>
                <p>
                  If you have questions or suggestions about this privacy policy, contact
                  admin@lockboxlabs.com.
                </p>
              </section>
            ))}
          </div>
        </div>
      </div>
      <footer>&copy; Copyright lockboxlabs, LLC.</footer>
    </div>
  );
}

export default PrivacyPolicies;
