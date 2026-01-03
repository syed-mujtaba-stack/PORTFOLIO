import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

/**
 * Generates the unified HTML content for the resume used in both print and PDF.
 * This ensures consistency across both download methods.
 */
const getResumeHTML = () => {
  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "TailwindCSS", "Vite"],
    backend: ["Node.js", "Python", "FastAPI", "Flask", "PostgreSQL"],
    ai: ["OpenAI SDK", "Prompt Engineering", "Agents", "LangChain"],
    databases: ["Supabase", "Neon", "Sanity", "Firebase"]
  };

  return `
    <div style="font-family: 'Inter', -apple-system, sans-serif; max-width: 210mm; margin: 0 auto; background: white; color: #0f172a; padding: 40px; line-height: 1.5; box-sizing: border-box; min-height: 297mm;">
      <!-- Header -->
      <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 4px solid #2563eb; padding-bottom: 24px; margin-bottom: 32px;">
        <div style="flex: 1;">
          <h1 style="font-size: 36px; font-weight: 800; text-transform: uppercase; margin: 0 0 4px 0; color: #0f172a; letter-spacing: -0.025em;">Syed Mujtaba Abbas</h1>
          <h2 style="font-size: 20px; color: #2563eb; margin: 0 0 16px 0; font-weight: 500;">Full Stack Developer & AI Engineer</h2>
          <div style="font-size: 11px; color: #475569; display: flex; gap: 16px; font-weight: 500;">
            <span style="display: flex; align-items: center; gap: 4px;">✉ abbasmjtaba125@gmail.com</span>
            <span style="display: flex; align-items: center; gap: 4px;">📞 +92 300 1234567</span>
            <span style="display: flex; align-items: center; gap: 4px;">📍 Karachi, Pakistan</span>
          </div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 40px;">
        <!-- Left Column -->
        <div>
          <section style="margin-bottom: 32px;">
            <h3 style="font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 16px; color: #0f172a;">Skills</h3>
            
            <div style="margin-bottom: 16px;">
              <h4 style="font-size: 9px; font-weight: 800; color: #2563eb; text-transform: uppercase; margin-bottom: 8px;">Frontend</h4>
              <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                ${skills.frontend.map(s => `<span style="background: #f1f5f9; padding: 2px 8px; border-radius: 4px; font-size: 9px; font-weight: 700; color: #334155;">${s}</span>`).join('')}
              </div>
            </div>

            <div style="margin-bottom: 16px;">
              <h4 style="font-size: 9px; font-weight: 800; color: #2563eb; text-transform: uppercase; margin-bottom: 8px;">Backend</h4>
              <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                ${skills.backend.map(s => `<span style="background: #f1f5f9; padding: 2px 8px; border-radius: 4px; font-size: 9px; font-weight: 700; color: #334155;">${s}</span>`).join('')}
              </div>
            </div>

            <div style="margin-bottom: 16px;">
              <h4 style="font-size: 9px; font-weight: 800; color: #2563eb; text-transform: uppercase; margin-bottom: 8px;">AI & Agents</h4>
              <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                ${skills.ai.map(s => `<span style="background: #f1f5f9; padding: 2px 8px; border-radius: 4px; font-size: 9px; font-weight: 700; color: #334155;">${s}</span>`).join('')}
              </div>
            </div>

            <div style="margin-bottom: 16px;">
              <h4 style="font-size: 9px; font-weight: 800; color: #2563eb; text-transform: uppercase; margin-bottom: 8px;">Databases</h4>
              <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                ${skills.databases.map(s => `<span style="background: #f1f5f9; padding: 2px 8px; border-radius: 4px; font-size: 9px; font-weight: 700; color: #334155;">${s}</span>`).join('')}
              </div>
            </div>
          </section>

          <section>
            <h3 style="font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 16px; color: #0f172a;">Education</h3>
            <div>
              <h4 style="font-size: 11px; font-weight: 700; color: #1e293b; margin: 0;">Computer Science Specialist</h4>
              <p style="font-size: 10px; color: #2563eb; font-style: italic; margin: 2px 0;">Self-Directed Learning</p>
              <p style="font-size: 10px; color: #94a3b8; margin: 0;">2021 - Present</p>
            </div>
          </section>
        </div>

        <!-- Right Column -->
        <div>
          <section style="margin-bottom: 32px;">
            <h3 style="font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 16px; color: #0f172a;">Professional Summary</h3>
            <p style="font-size: 11.5px; color: #475569; margin: 0; font-weight: 300; text-align: justify;">
              Dynamic Full Stack Developer and AI Engineer with a proven track record. Specialized in React, Next.js, and autonomous Agentic AI systems. Delivered 50+ projects with a focus on Clean Code and high-performance solutions that bridge the gap between modern web development and intelligent automation.
            </p>
          </section>

          <section style="margin-bottom: 32px;">
            <h3 style="font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 16px; color: #0f172a;">Experience</h3>
            <div>
              <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px;">
                <h4 style="font-size: 13px; font-weight: 700; color: #1e293b; margin: 0;">Full Stack & AI Specialist</h4>
                <span style="font-size: 9px; font-weight: 700; color: #94a3b8; text-transform: uppercase;">Freelance | 2021 - Present</span>
              </div>
              <ul style="font-size: 11.5px; color: #475569; margin: 0; padding-left: 18px; font-weight: 300;">
                <li style="margin-bottom: 6px;">Engineered 50+ scalable web applications using React and Next.js, ensuring 99.9% uptime and optimal performance.</li>
                <li style="margin-bottom: 6px;">Architected agentic AI systems for workflow automation, reducing manual tasks by 70%.</li>
                <li style="margin-bottom: 6px;">Integrated complex high-load APIs including OpenRouter, Stripe, and OpenAI.</li>
                <li style="margin-bottom: 6px;">Mentored junior developers on "Clean Code" principles and modern stack best practices.</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 style="font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 16px; color: #0f172a;">Featured Projects</h3>
            <div style="background: #f8fafc; padding: 14px; border-radius: 8px; margin-bottom: 12px; border: 1px solid #f1f5f9;">
              <h4 style="font-size: 12px; font-weight: 700; color: #1e293b; margin: 0;">Agentic AI Task Assistant</h4>
              <p style="font-size: 10px; color: #475569; margin: 4px 0;">Autonomous system for planning and executing complex multi-step development tasks.</p>
              <p style="font-size: 9px; color: #2563eb; font-weight: 700; margin: 0; font-family: monospace;">React • Python • LangChain • FastAPI</p>
            </div>
            <div style="background: #f8fafc; padding: 14px; border-radius: 8px; border: 1px solid #f1f5f9;">
              <h4 style="font-size: 12px; font-weight: 700; color: #1e293b; margin: 0;">E-Commerce Ecosystem</h4>
              <p style="font-size: 10px; color: #475569; margin: 4px 0;">Full-featured platform with inventory, payments, and real-time analytics dashboard.</p>
              <p style="font-size: 9px; color: #2563eb; font-weight: 700; margin: 0; font-family: monospace;">Next.js • Supabase • Stripe • TailwindCSS</p>
            </div>
          </section>
        </div>
      </div>

      <div style="margin-top: 48px; border-top: 1px solid #f1f5f9; padding-top: 16px; text-align: center;">
        <p style="font-size: 9px; color: #94a3b8; font-weight: 500; margin: 0;">This resume was generated dynamically from syedmujtaba.portfolio</p>
      </div>
    </div>
  `;
};

export const downloadResume = () => {
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Please allow popups to download the resume');
    return;
  }

  const resumeHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Syed Mujtaba Abbas - Resume</title>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;800&display=swap" rel="stylesheet">
      <style>
        body { margin: 0; padding: 0; background: #f1f5f9; }
        @media print {
          body { background: white; }
          .no-print { display: none; }
        }
      </style>
    </head>
    <body>
      ${getResumeHTML()}
      <script>
        window.onload = function() {
          setTimeout(function() {
            window.print();
            window.close();
          }, 500);
        }
      </script>
    </body>
    </html>
  `;

  printWindow.document.write(resumeHTML);
  printWindow.document.close();
};

export const downloadResumeAsPDF = async () => {
  const tempContainer = document.createElement('div');
  tempContainer.style.position = 'absolute';
  tempContainer.style.left = '-9999px';
  tempContainer.style.top = '0';
  tempContainer.style.width = '210mm';
  tempContainer.style.backgroundColor = 'white';

  tempContainer.innerHTML = getResumeHTML();
  document.body.appendChild(tempContainer);

  try {
    const canvas = await html2canvas(tempContainer, {
      width: 794,
      height: 1123,
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff'
    });

    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgData = canvas.toDataURL('image/png');
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save('Syed-Mujtaba-Abbas-Resume.pdf');

  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Error generating PDF. Please try again.');
  } finally {
    document.body.removeChild(tempContainer);
  }
}