import { createRoot } from 'react-dom/client';
import Resume from '@/components/Resume';
import { createElement } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const downloadResume = () => {
  // Create a new window for printing
  const printWindow = window.open('', '_blank');
  
  if (!printWindow) {
    alert('Please allow popups to download the resume');
    return;
  }

  // HTML template for the resume
  const resumeHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Syed Mujtaba Abbas - Resume</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        @media print {
          body { margin: 0; }
          .no-print { display: none; }
        }
        
        .resume-container {
          font-family: 'Arial', sans-serif;
          max-width: 210mm;
          margin: 0 auto;
          background: white;
          color: #1f2937;
          padding: 2rem;
          line-height: 1.5;
        }
        
        .header {
          text-align: center;
          border-bottom: 3px solid #2563eb;
          padding-bottom: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .section-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 1rem;
          border-left: 4px solid #2563eb;
          padding-left: 1rem;
        }
        
        .skill-tag {
          display: inline-block;
          padding: 0.25rem 0.5rem;
          margin: 0.125rem;
          border-radius: 0.25rem;
          font-size: 0.875rem;
        }
        
        .skill-frontend { background-color: #dbeafe; color: #1e40af; }
        .skill-backend { background-color: #dcfce7; color: #166534; }
        .skill-database { background-color: #f3e8ff; color: #7c2d12; }
        .skill-ai { background-color: #fce7f3; color: #be185d; }
        .skill-general { background-color: #f3f4f6; color: #374151; }
      </style>
    </head>
    <body>
      <div class="resume-container">
        <!-- Header -->
        <div class="header">
          <h1 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 0.5rem;">Syed Mujtaba Abbas</h1>
          <h2 style="font-size: 1.25rem; color: #2563eb; margin-bottom: 1rem;">Full Stack Developer & AI Engineer</h2>
          <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem; font-size: 0.875rem; color: #6b7280;">
            <span>📧 syedmujtabaabbas@email.com</span>
            <span>📱 +92 300 1234567</span>
            <span>📍 Pakistan</span>
            <span>🔗 github.com/syedmujtabaabbas</span>
          </div>
        </div>

        <!-- Professional Summary -->
        <div style="margin-bottom: 2rem;">
          <h3 class="section-title">Professional Summary</h3>
          <p style="color: #374151; line-height: 1.6;">
            Passionate Full Stack Developer and AI Engineer with 3+ years of experience in building scalable web applications 
            and intelligent systems. Expert in modern JavaScript frameworks, backend technologies, and cutting-edge AI development. 
            Specialized in React, Node.js, and agentic AI systems with a strong focus on clean code and innovative solutions.
          </p>
        </div>

        <!-- Technical Skills -->
        <div style="margin-bottom: 2rem;">
          <h3 class="section-title">Technical Skills</h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
            <div>
              <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Frontend Development</h4>
              <div>
                <span class="skill-tag skill-frontend">HTML5</span>
                <span class="skill-tag skill-frontend">CSS3</span>
                <span class="skill-tag skill-frontend">JavaScript</span>
                <span class="skill-tag skill-frontend">TypeScript</span>
                <span class="skill-tag skill-frontend">React</span>
                <span class="skill-tag skill-frontend">Next.js</span>
                <span class="skill-tag skill-frontend">Tailwind CSS</span>
              </div>
            </div>
            <div>
              <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Backend Development</h4>
              <div>
                <span class="skill-tag skill-backend">Node.js</span>
                <span class="skill-tag skill-backend">Express</span>
                <span class="skill-tag skill-backend">API Routes</span>
                <span class="skill-tag skill-backend">Python</span>
              </div>
            </div>
            <div>
              <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Databases</h4>
              <div>
                <span class="skill-tag skill-database">MongoDB</span>
                <span class="skill-tag skill-database">Supabase</span>
                <span class="skill-tag skill-database">Firebase</span>
              </div>
            </div>
            <div>
              <h4 style="font-weight: 600; margin-bottom: 0.5rem;">AI & Automation</h4>
              <div>
                <span class="skill-tag skill-ai">Prompt Engineering</span>
                <span class="skill-tag skill-ai">Agentic AI Development</span>
                <span class="skill-tag skill-ai">OpenAI API</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Experience -->
        <div style="margin-bottom: 2rem;">
          <h3 class="section-title">Professional Experience</h3>
          <div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
              <div>
                <h4 style="font-weight: 600;">Full Stack Developer & AI Engineer</h4>
                <p style="color: #2563eb;">Freelance</p>
              </div>
              <span style="color: #6b7280; font-size: 0.875rem;">2021 - Present</span>
            </div>
            <ul style="margin-left: 1rem; color: #374151;">
              <li>• Developed 50+ modern web applications using React, Next.js, and Node.js</li>
              <li>• Implemented AI-powered features using OpenAI API and prompt engineering</li>
              <li>• Built scalable backend systems with Express.js and various databases</li>
              <li>• Created agentic AI systems capable of autonomous task execution</li>
              <li>• Optimized application performance and implemented responsive designs</li>
            </ul>
          </div>
        </div>

        <!-- Projects -->
        <div style="margin-bottom: 2rem;">
          <h3 class="section-title">Featured Projects</h3>
          <div style="margin-bottom: 1rem;">
            <h4 style="font-weight: 600;">AI-Powered Task Manager</h4>
            <p style="color: #374151; font-size: 0.875rem; margin-bottom: 0.5rem;">
              Full-stack application with intelligent task prioritization and automated scheduling using OpenAI API.
            </p>
            <div>
              <span class="skill-tag skill-general">React</span>
              <span class="skill-tag skill-general">Node.js</span>
              <span class="skill-tag skill-general">OpenAI API</span>
              <span class="skill-tag skill-general">Supabase</span>
            </div>
          </div>
          
          <div style="margin-bottom: 1rem;">
            <h4 style="font-weight: 600;">E-Commerce Platform</h4>
            <p style="color: #374151; font-size: 0.875rem; margin-bottom: 0.5rem;">
              Modern e-commerce solution with payment integration, inventory management, and admin dashboard.
            </p>
            <div>
              <span class="skill-tag skill-general">Next.js</span>
              <span class="skill-tag skill-general">Express</span>
              <span class="skill-tag skill-general">MongoDB</span>
              <span class="skill-tag skill-general">Stripe API</span>
            </div>
          </div>
          
          <div>
            <h4 style="font-weight: 600;">Agentic AI Assistant</h4>
            <p style="color: #374151; font-size: 0.875rem; margin-bottom: 0.5rem;">
              Intelligent assistant capable of planning, reasoning, and executing complex multi-step tasks.
            </p>
            <div>
              <span class="skill-tag skill-general">Python</span>
              <span class="skill-tag skill-general">React</span>
              <span class="skill-tag skill-general">OpenAI API</span>
              <span class="skill-tag skill-general">LangChain</span>
            </div>
          </div>
        </div>

        <!-- Education -->
        <div style="margin-bottom: 2rem;">
          <h3 class="section-title">Education & Certifications</h3>
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <div>
              <h4 style="font-weight: 600;">Computer Science</h4>
              <p style="color: #2563eb;">Self-Taught Developer</p>
            </div>
            <span style="color: #6b7280; font-size: 0.875rem;">2020 - 2023</span>
          </div>
          <ul style="margin-left: 1rem; color: #374151;">
            <li>• Intensive self-study in modern web development technologies</li>
            <li>• Completed multiple online courses in AI and machine learning</li>
            <li>• Active contributor to open-source projects</li>
            <li>• Continuous learning through practical project development</li>
          </ul>
        </div>

        <!-- Achievements -->
        <div>
          <h3 class="section-title">Key Achievements</h3>
          <ul style="margin-left: 1rem; color: #374151;">
            <li>• Successfully delivered 50+ projects with 100% client satisfaction rate</li>
            <li>• Expertise in cutting-edge AI technologies and prompt engineering</li>
            <li>• Strong focus on clean, maintainable, and scalable code architecture</li>
            <li>• Passionate about innovation and staying updated with latest tech trends</li>
          </ul>
        </div>
      </div>
      
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
  // Create a temporary container for the resume
  const tempContainer = document.createElement('div');
  tempContainer.style.position = 'absolute';
  tempContainer.style.left = '-9999px';
  tempContainer.style.top = '0';
  tempContainer.style.width = '210mm';
  tempContainer.style.backgroundColor = 'white';
  
  // Resume content for PDF
  const resumeContent = `
    <div style="font-family: Arial, sans-serif; max-width: 210mm; margin: 0 auto; background: white; color: #1f2937; padding: 2rem; line-height: 1.5;">
      <!-- Header -->
      <div style="text-align: center; border-bottom: 3px solid #2563eb; padding-bottom: 1.5rem; margin-bottom: 2rem;">
        <h1 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 0.5rem; margin-top: 0;">Syed Mujtaba Abbas</h1>
        <h2 style="font-size: 1.25rem; color: #2563eb; margin-bottom: 1rem; margin-top: 0;">Full Stack Developer & AI Engineer</h2>
        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem; font-size: 0.875rem; color: #6b7280;">
          <span>📧 syedmujtabaabbas@email.com</span>
          <span>📱 +92 300 1234567</span>
          <span>📍 Pakistan</span>
          <span>🔗 github.com/syedmujtabaabbas</span>
        </div>
      </div>

      <!-- Professional Summary -->
      <div style="margin-bottom: 2rem;">
        <h3 style="font-size: 1.5rem; font-weight: bold; color: #1f2937; margin-bottom: 1rem; border-left: 4px solid #2563eb; padding-left: 1rem;">Professional Summary</h3>
        <p style="color: #374151; line-height: 1.6; margin: 0;">
          Passionate Full Stack Developer and AI Engineer with 3+ years of experience in building scalable web applications 
          and intelligent systems. Expert in modern JavaScript frameworks, backend technologies, and cutting-edge AI development. 
          Specialized in React, Node.js, and agentic AI systems with a strong focus on clean code and innovative solutions.
        </p>
      </div>

      <!-- Technical Skills -->
      <div style="margin-bottom: 2rem;">
        <h3 style="font-size: 1.5rem; font-weight: bold; color: #1f2937; margin-bottom: 1rem; border-left: 4px solid #2563eb; padding-left: 1rem;">Technical Skills</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
          <div>
            <h4 style="font-weight: 600; margin-bottom: 0.5rem; margin-top: 0;">Frontend Development</h4>
            <div>
              <span style="display: inline-block; padding: 0.25rem 0.5rem; margin: 0.125rem; border-radius: 0.25rem; font-size: 0.875rem; background-color: #dbeafe; color: #1e40af;">HTML5</span>
              <span style="display: inline-block; padding: 0.25rem 0.5rem; margin: 0.125rem; border-radius: 0.25rem; font-size: 0.875rem; background-color: #dbeafe; color: #1e40af;">CSS3</span>
              <span style="display: inline-block; padding: 0.25rem 0.5rem; margin: 0.125rem; border-radius: 0.25rem; font-size: 0.875rem; background-color: #dbeafe; color: #1e40af;">JavaScript</span>
              <span style="display: inline-block; padding: 0.25rem 0.5rem; margin: 0.125rem; border-radius: 0.25rem; font-size: 0.875rem; background-color: #dbeafe; color: #1e40af;">TypeScript</span>
              <span style="display: inline-block; padding: 0.25rem 0.5rem; margin: 0.125rem; border-radius: 0.25rem; font-size: 0.875rem; background-color: #dbeafe; color: #1e40af;">React</span>
              <span style="display: inline-block; padding: 0.25rem 0.5rem; margin: 0.125rem; border-radius: 0.25rem; font-size: 0.875rem; background-color: #dbeafe; color: #1e40af;">Next.js</span>
              <span style="display: inline-block; padding: 0.25rem 0.5rem; margin: 0.125rem; border-radius: 0.25rem; font-size: 0.875rem; background-color: #dbeafe; color: #1e40af;">Tailwind CSS</span>
            </div>
          </div>
          <div>
            <h4 style="font-weight: 600; margin-bottom: 0.5rem; margin-top: 0;">Backend Development</h4>
            <div>
              <span style="display: inline-block; padding: 0.25rem 0.5rem; margin: 0.125rem; border-radius: 0.25rem; font-size: 0.875rem; background-color: #dcfce7; color: #166534;">Node.js</span>
              <span style="display: inline-block; padding: 0.25rem 0.5rem; margin: 0.125rem; border-radius: 0.25rem; font-size: 0.875rem; background-color: #dcfce7; color: #166534;">Express</span>
              <span style="display: inline-block; padding: 0.25rem 0.5rem; margin: 0.125rem; border-radius: 0.25rem; font-size: 0.875rem; background-color: #dcfce7; color: #166534;">API Routes</span>
              <span style="display: inline-block; padding: 0.25rem 0.5rem; margin: 0.125rem; border-radius: 0.25rem; font-size: 0.875rem; background-color: #dcfce7; color: #166534;">Python</span>
            </div>
          </div>
          <div>
            <h4 style="font-weight: 600; margin-bottom: 0.5rem; margin-top: 0;">Databases</h4>
            <div>
              <span style="display: inline-block; padding: 0.25rem 0.5rem; margin: 0.125rem; border-radius: 0.25rem; font-size: 0.875rem; background-color: #f3e8ff; color: #7c2d12;">MongoDB</span>
              <span style="display: inline-block; padding: 0.25rem 0.5rem; margin: 0.125rem; border-radius: 0.25rem; font-size: 0.875rem; background-color: #f3e8ff; color: #7c2d12;">Supabase</span>
              <span style="display: inline-block; padding: 0.25rem 0.5rem; margin: 0.125rem; border-radius: 0.25rem; font-size: 0.875rem; background-color: #f3e8ff; color: #7c2d12;">Firebase</span>
            </div>
          </div>
          <div>
            <h4 style="font-weight: 600; margin-bottom: 0.5rem; margin-top: 0;">AI & Automation</h4>
            <div>
              <span style="display: inline-block; padding: 0.25rem 0.5rem; margin: 0.125rem; border-radius: 0.25rem; font-size: 0.875rem; background-color: #fce7f3; color: #be185d;">Prompt Engineering</span>
              <span style="display: inline-block; padding: 0.25rem 0.5rem; margin: 0.125rem; border-radius: 0.25rem; font-size: 0.875rem; background-color: #fce7f3; color: #be185d;">Agentic AI Development</span>
              <span style="display: inline-block; padding: 0.25rem 0.5rem; margin: 0.125rem; border-radius: 0.25rem; font-size: 0.875rem; background-color: #fce7f3; color: #be185d;">OpenAI API</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Experience -->
      <div style="margin-bottom: 2rem;">
        <h3 style="font-size: 1.5rem; font-weight: bold; color: #1f2937; margin-bottom: 1rem; border-left: 4px solid #2563eb; padding-left: 1rem;">Professional Experience</h3>
        <div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <div>
              <h4 style="font-weight: 600; margin: 0;">Full Stack Developer & AI Engineer</h4>
              <p style="color: #2563eb; margin: 0;">Freelance</p>
            </div>
            <span style="color: #6b7280; font-size: 0.875rem;">2021 - Present</span>
          </div>
          <ul style="margin-left: 1rem; color: #374151; margin-bottom: 0;">
            <li>• Developed 50+ modern web applications using React, Next.js, and Node.js</li>
            <li>• Implemented AI-powered features using OpenAI API and prompt engineering</li>
            <li>• Built scalable backend systems with Express.js and various databases</li>
            <li>• Created agentic AI systems capable of autonomous task execution</li>
            <li>• Optimized application performance and implemented responsive designs</li>
          </ul>
        </div>
      </div>

      <!-- Projects -->
      <div style="margin-bottom: 2rem;">
        <h3 style="font-size: 1.5rem; font-weight: bold; color: #1f2937; margin-bottom: 1rem; border-left: 4px solid #2563eb; padding-left: 1rem;">Featured Projects</h3>
        <div style="margin-bottom: 1rem;">
          <h4 style="font-weight: 600; margin: 0 0 0.25rem 0;">AI-Powered Task Manager</h4>
          <p style="color: #374151; font-size: 0.875rem; margin-bottom: 0.5rem; margin-top: 0;">
            Full-stack application with intelligent task prioritization and automated scheduling using OpenAI API.
          </p>
          <div>
            <span style="display: inline-block; padding: 0.25rem 0.5rem; margin: 0.125rem; border-radius: 0.25rem; font-size: 0.875rem; background-color: #f3f4f6; color: #374151;">React</span>
            <span style="display: inline-block; padding: 0.25rem 0.5rem; margin: 0.125rem; border-radius: 0.25rem; font-size: 0.875rem; background-color: #f3f4f6; color: #374151;">Node.js</span>
            <span style="display: inline-block; padding: 0.25rem 0.5rem; margin: 0.125rem; border-radius: 0.25rem; font-size: 0.875rem; background-color: #f3f4f6; color: #374151;">OpenAI API</span>
            <span style="display: inline-block; padding: 0.25rem 0.5rem; margin: 0.125rem; border-radius: 0.25rem; font-size: 0.875rem; background-color: #f3f4f6; color: #374151;">Supabase</span>
          </div>
        </div>
        
        <div style="margin-bottom: 1rem;">
          <h4 style="font-weight: 600; margin: 0 0 0.25rem 0;">E-Commerce Platform</h4>
          <p style="color: #374151; font-size: 0.875rem; margin-bottom: 0.5rem; margin-top: 0;">
            Modern e-commerce solution with payment integration, inventory management, and admin dashboard.
          </p>
          <div>
            <span style="display: inline-block; padding: 0.25rem 0.5rem; margin: 0.125rem; border-radius: 0.25rem; font-size: 0.875rem; background-color: #f3f4f6; color: #374151;">Next.js</span>
            <span style="display: inline-block; padding: 0.25rem 0.5rem; margin: 0.125rem; border-radius: 0.25rem; font-size: 0.875rem; background-color: #f3f4f6; color: #374151;">Express</span>
            <span style="display: inline-block; padding: 0.25rem 0.5rem; margin: 0.125rem; border-radius: 0.25rem; font-size: 0.875rem; background-color: #f3f4f6; color: #374151;">MongoDB</span>
            <span style="display: inline-block; padding: 0.25rem 0.5rem; margin: 0.125rem; border-radius: 0.25rem; font-size: 0.875rem; background-color: #f3f4f6; color: #374151;">Stripe API</span>
          </div>
        </div>
        
        <div>
          <h4 style="font-weight: 600; margin: 0 0 0.25rem 0;">Agentic AI Assistant</h4>
          <p style="color: #374151; font-size: 0.875rem; margin-bottom: 0.5rem; margin-top: 0;">
            Intelligent assistant capable of planning, reasoning, and executing complex multi-step tasks.
          </p>
          <div>
            <span style="display: inline-block; padding: 0.25rem 0.5rem; margin: 0.125rem; border-radius: 0.25rem; font-size: 0.875rem; background-color: #f3f4f6; color: #374151;">Python</span>
            <span style="display: inline-block; padding: 0.25rem 0.5rem; margin: 0.125rem; border-radius: 0.25rem; font-size: 0.875rem; background-color: #f3f4f6; color: #374151;">React</span>
            <span style="display: inline-block; padding: 0.25rem 0.5rem; margin: 0.125rem; border-radius: 0.25rem; font-size: 0.875rem; background-color: #f3f4f6; color: #374151;">OpenAI API</span>
            <span style="display: inline-block; padding: 0.25rem 0.5rem; margin: 0.125rem; border-radius: 0.25rem; font-size: 0.875rem; background-color: #f3f4f6; color: #374151;">LangChain</span>
          </div>
        </div>
      </div>

      <!-- Education -->
      <div style="margin-bottom: 2rem;">
        <h3 style="font-size: 1.5rem; font-weight: bold; color: #1f2937; margin-bottom: 1rem; border-left: 4px solid #2563eb; padding-left: 1rem;">Education & Certifications</h3>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
          <div>
            <h4 style="font-weight: 600; margin: 0;">Computer Science</h4>
            <p style="color: #2563eb; margin: 0;">Self-Taught Developer</p>
          </div>
          <span style="color: #6b7280; font-size: 0.875rem;">2020 - 2023</span>
        </div>
        <ul style="margin-left: 1rem; color: #374151; margin-bottom: 0;">
          <li>• Intensive self-study in modern web development technologies</li>
          <li>• Completed multiple online courses in AI and machine learning</li>
          <li>• Active contributor to open-source projects</li>
          <li>• Continuous learning through practical project development</li>
        </ul>
      </div>

      <!-- Achievements -->
      <div>
        <h3 style="font-size: 1.5rem; font-weight: bold; color: #1f2937; margin-bottom: 1rem; border-left: 4px solid #2563eb; padding-left: 1rem;">Key Achievements</h3>
        <ul style="margin-left: 1rem; color: #374151; margin-bottom: 0;">
          <li>• Successfully delivered 50+ projects with 100% client satisfaction rate</li>
          <li>• Expertise in cutting-edge AI technologies and prompt engineering</li>
          <li>• Strong focus on clean, maintainable, and scalable code architecture</li>
          <li>• Passionate about innovation and staying updated with latest tech trends</li>
        </ul>
      </div>
    </div>
  `;
  
  tempContainer.innerHTML = resumeContent;
  document.body.appendChild(tempContainer);
  
  try {
    // Generate canvas from the HTML element
    const canvas = await html2canvas(tempContainer, {
      width: 794, // A4 width in pixels at 96 DPI
      height: 1123, // A4 height in pixels at 96 DPI
      scale: 2, // Higher resolution
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff'
    });
    
    // Create PDF
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgData = canvas.toDataURL('image/png');
    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save('Syed-Mujtaba-Abbas-Resume.pdf');
    
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Error generating PDF. Please try again.');
  } finally {
    // Clean up
    document.body.removeChild(tempContainer);
  }
};