import { useState } from 'react';

const PasswordGenerator = () => {
  // 1. Alle States genau wie im Video
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(10);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [copied, setCopied] = useState(false);

  // 2. Die Generierungs-Logik
  const generatePassword = () => {
    let charset = "";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    if (charset === "") return;

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const at = Math.floor(Math.random() * charset.length);
      generatedPassword += charset.charAt(at);
    }
    setPassword(generatedPassword);
    setCopied(false); // Reset "Copied" Status bei neuem Passwort
  };

  // 3. Kopier-Funktion
  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#18171F] font-mono p-4">
      <div className="w-full max-w-[475px]">
        <h1 className="text-[#817D92] text-center mb-8 text-2xl">Password Generator</h1>

        {/* Passwort Anzeige */}
        <div className="flex justify-between items-center bg-[#24232C] p-5 mb-6">
          <span className={`text-2xl ${password ? 'text-[#E6E5EA]' : 'text-[#817D92]'}`}>
            {password || 'P4$5W0rD!'}
          </span>
          <div className="flex items-center gap-4">
            {copied && <span className="text-[#A4FFAF] text-sm uppercase">Copied</span>}
            <button onClick={copyToClipboard} className="text-[#A4FFAF] hover:text-white transition-colors">
              <svg width="21" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.341 3.047 17.114.05a.594.594 0 0 0-.323-.149H9.329c-.731 0-1.324.591-1.324 1.325v1.822H1.324C.592 3.048 0 3.64 0 4.373v18.302C0 23.408.592 24 1.324 24h12.441c.731 0 1.324-.591 1.324-1.325V20.85h5.252c.731 0 1.324-.591 1.324-1.325V3.393c0-.122-.032-.245-.094-.346ZM13.765 22.675H1.324V4.373h6.681v13.827c0 .732.593 1.325 1.324 1.325h4.436v3.15Zm5.252-3.15h-9.69V1.325h6.141v3.047a.593.593 0 0 0 .593.593h3.047v14.56h-.091Z" fill="currentColor"/></svg>
            </button>
          </div>
        </div>

        {/* Einstellungen Box */}
        <div className="bg-[#24232C] p-6 space-y-6">
          <div className="flex justify-between items-center">
            <span className="text-[#E6E5EA]">Character Length</span>
            <span className="text-[#A4FFAF] text-3xl font-bold">{length}</span>
          </div>
          
          <input 
            type="range" min="0" max="20" value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-full h-2 bg-[#18171F] appearance-none cursor-pointer accent-[#A4FFAF]"
            style={{
              background: `linear-gradient(to right, #A4FFAF ${(length/20)*100}%, #18171F ${(length/20)*100}%)`
            }}
          />

          <div className="space-y-4">
            {[
              { label: 'Include Uppercase Letters', state: includeUppercase, setState: setIncludeUppercase },
              { label: 'Include Lowercase Letters', state: includeLowercase, setState: setIncludeLowercase },
              { label: 'Include Numbers', state: includeNumbers, setState: setIncludeNumbers },
              { label: 'Include Symbols', state: includeSymbols, setState: setIncludeSymbols },
            ].map((opt) => (
              <label key={opt.label} className="flex items-center gap-5 cursor-pointer group">
                <input 
                  type="checkbox" checked={opt.state} onChange={() => opt.setState(!opt.state)}
                  className="w-5 h-5 appearance-none border-2 border-[#E6E5EA] checked:bg-[#A4FFAF] checked:border-[#A4FFAF] cursor-pointer transition-all relative checked:after:content-['✓'] checked:after:absolute checked:after:text-[#18171F] checked:after:text-sm checked:after:font-bold checked:after:left-[3px] checked:after:top-[-2px]"
                />
                <span className="text-[#E6E5EA] group-hover:text-white">{opt.label}</span>
              </label>
            ))}
          </div>

          <button 
            onClick={generatePassword}
            className="w-full bg-[#A4FFAF] text-[#24232C] font-bold py-4 flex items-center justify-center gap-4 hover:bg-transparent hover:text-[#A4FFAF] border-2 border-[#A4FFAF] transition-all group"
          >
            GENERATE 
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" className="group-hover:fill-[#A4FFAF]"><path fill="currentColor" d="m5.106 12 5.66-5.66a.5.5 0 0 0 0-.707L5.106 0 4.399.707 9.435 5.742H0v1h9.435L4.399 11.293z"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;