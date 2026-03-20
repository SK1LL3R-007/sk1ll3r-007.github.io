export default function Skills({
  locale,
  t,
}: {
  locale: string;
  t: Record<string, any>;
}) {
  const skillCategories = [
    { category: t.skills.tools, skills: ["Metasploit", "Burp Suite", "Wireshark", "Nmap", "Fortress", "Splunk", "Snort", "Suricata"] },
    { category: t.skills.languages, skills: ["Python", "Bash", "PowerShell", "Java", "C++", "Go", "Ruby", "JavaScript"] },
    { category: t.skills.network, skills: ["Network Architecture", "Firewall Management", "VPN", "IDS/IPS", "SIEM", "DNS", "TCP/IP", "BGP"] },
    { category: t.skills.cloud, skills: ["AWS Security", "Azure Security", "GCP Security", "Container Security", "Kubernetes", "Cloud IAM"] },
    { category: t.skills.frameworks, skills: ["ISO 27001", "NIST", "CIS Controls", "GDPR", "HIPAA", "SOC 2", "PCI-DSS", "COBIT"] },
    { category: t.skills.threat, skills: ["Threat Modeling", "Risk Assessment", "Vulnerability Management", "OSINT", "APT Analysis", "Malware Research"] },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4"><span className="bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent">{t.skills.title}</span></h2>
          <p className="text-slate-400 text-lg font-mono">$ {t.skills.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="bg-gradient-to-br from-zinc-900/60 to-black border border-green-500/20 rounded-lg p-6 hover:border-green-400/45 transition-all">
              <h3 className="text-lg font-semibold text-green-400 mb-4 font-mono">{cat.category}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, skillIdx) => (
                  <span key={skillIdx} className="px-4 py-2 bg-green-500/10 text-green-300 rounded border border-green-500/20 hover:bg-green-500/15 hover:border-green-400/45 transition-all text-sm font-medium font-mono">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
