import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'makhoulsham@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Sham, I am reaching out to you because...',

    // upworkProfile: 'https://www.upwork.com/freelancers/tajmirul',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/s3h9a20m20' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/tajmirul' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },

        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },

        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
        {
            name: 'Css',
            icon: '/logo/Css.png',
        },
        {
            name: 'Flutter',
            icon: '/logo/flutter.png',
        },
        {
            name: 'Dart',
            icon: '/logo/dart.png',
        },
    ],
    // backend: [
    //     {
    //         name: 'Node.js',
    //         icon: '/logo/node.png',
    //     },
    //     {
    //         name: 'NestJS',
    //         icon: '/logo/nest.svg',
    //     },
    //     {
    //         name: 'Express.js',
    //         icon: '/logo/express.png',
    //     },
    // ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'SQLlight',
            icon: '/logo/postgreSQL.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Figma',
            icon: '/logo/Figma.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'DT-Teeth',
        slug: 'dt-teeth',
        sourceCode: 'https://github.com/s3h9a20m20/DT-Teeth-System',
        liveUrl: '',
        year: 2026,
        description: `
        A comprehensive Dental Clinic Management System that connects patients, doctors, secretaries, lab, and warehouse in one integrated platform.<br/><br/>
        
        <strong>Key Features:</strong>
        <ul>
          <li>Patient Mobile App for appointments, medical records, prescriptions, and billing</li>
          <li>Web Dashboard for Admin, Doctor, and Secretary</li>
          <li>Lab & Warehouse management module</li>
          <li>Role-based access control and notifications</li>
          <li>Bilingual support (Arabic / English) with RTL</li>
          <li>Offline capabilities for critical data</li>
        </ul>
        `,
        role: `
        Frontend Developer (Web Dashboard)<br/>
        <ul>
          <li>Designed and developed the complete Web Dashboard for Admin, Doctor, and Secretary using React.js</li>
          <li>Implemented appointment management, medical records, treatments, prescriptions, and billing interfaces</li>
          <li>Built responsive and bilingual UI with role-based views</li>
          <li>Integrated with Laravel Backend via REST APIs</li>
        </ul>
        `,
        techStack: [
            'React.js',
            'JavaScript',
            'Tailwind CSS',
            'HTML5',
            'CSS3',
            'REST APIs',
            'Laravel',
        ],
        thumbnail: '/projects/images/dt-teeth-15.png',
        longThumbnail: '/projects/images/dt-teeth-18.png',
        images: [
            '/projects/images/dt-teeth-1.png',
            '/projects/images/dt-teeth-2.png',
            '/projects/images/dt-teeth-3.png',
            '/projects/images/dt-teeth-4.png',
            '/projects/images/dt-teeth-5.png',
            '/projects/images/dt-teeth-9.png',
            '/projects/images/dt-teeth-10.png',
            '/projects/images/dt-teeth-11.png',
            '/projects/images/dt-teeth-12.png',
            '/projects/images/dt-teeth-13.png',
            '/projects/images/dt-teeth-14.png',
            '/projects/images/dt-teeth-15.png',
            '/projects/images/dt-teeth-16.png',
            '/projects/images/dt-teeth-17.png',
            '/projects/images/dt-teeth-18.png',
        ],
    },
    {
        title: 'Eshtikily – Government Complaints System',
        slug: 'eshtikily-complaints',
        sourceCode: 'https://github.com/s3h9a20m20/complaints-system',
        liveUrl: '',
        year: 2025,
        description: `
        A digital platform that allows citizens to submit government-related complaints through a mobile application, while government employees and system administrators manage and track these complaints via a powerful Web Dashboard.<br/><br/>
        
        <strong>Key Features:</strong>
        <ul>
          <li>Citizen complaint submission with attachments</li>
          <li>Status tracking (New – In Progress – Completed – Rejected)</li>
          <li>Role-based access for Employees and Admin</li>
          <li>Notes, additional information requests, and reports (PDF/CSV)</li>
          <li>Focus on non-functional requirements: concurrency control, versioning, and security</li>
        </ul>
        `,
        role: `
        Frontend Developer (Web Dashboard)<br/>
        <ul>
          <li>Developed the complete React.js Web Dashboard for government staff and Admin</li>
          <li>Implemented complaint management, filtering, status updates, and reporting features</li>
          <li>Designed clean and user-friendly interfaces focused on usability and performance</li>
        </ul>
        `,
        techStack: [
            'React.js',
            'JavaScript',
            'HTML5',
            'CSS3',
            'REST APIs',
            'Laravel',
        ],
        thumbnail: '/projects/images/eshtikily-6.png',
        longThumbnail: '/projects/images/eshtikily-7.png',

        images: [
            '/projects/images/eshtikily-1.png',
            '/projects/images/eshtikily-2.png',
            '/projects/images/eshtikily-3.png',
            '/projects/images/eshtikily-4.png',
            '/projects/images/eshtikily-5.png',
            '/projects/images/eshtikily-7.png',
            '/projects/images/eshtikily-8.png',
        ],
    },
    {
        title: 'Information Retrieval System',
        slug: 'information-retrieval',
        sourceCode:
            'https://github.com/s3h9a20m20/information-retrieval-system-2026',
        liveUrl: '',
        year: 2026,
        description: `
        A full-scale Information Retrieval engine built on 522,931 documents from the Quora dataset. The system implements and benchmarks multiple retrieval models using a Service-Oriented Architecture.<br/><br/>
        
        <strong>Key Features:</strong>
        <ul>
          <li>Five retrieval models: TF-IDF, BM25, Semantic Embeddings, Hybrid Serial, Hybrid Parallel (RRF)</li>
          <li>Interactive Gradio web interface with live BM25 parameter tuning</li>
          <li>Query Refinement (Spell Correction + Synonym Expansion)</li>
          <li>Full evaluation on 10,000 queries using Precision@10, Recall, MAP, and nDCG</li>
        </ul>
        `,
        role: `
        Developer & Researcher<br/>
        <ul>
          <li>Participated in building and evaluating multiple retrieval strategies</li>
          <li>Worked on the overall system architecture (SOA) and evaluation pipeline</li>
          <li>Contributed to documentation and performance analysis</li>
        </ul>
        `,
        techStack: [
            'Python',
            'scikit-learn',
            'FAISS',
            'Sentence Transformers',
            'Rank-BM25',
            'Gradio',
            'NLTK',
        ],
        thumbnail: '/projects/images/ir-system-13.png',
        longThumbnail: '/projects/images/ir-system-11.png',
        images: [
            '/projects/images/ir-system-1.png',
            '/projects/images/ir-system-2.png',
            '/projects/images/ir-system-3.png',
            '/projects/images/ir-system-4.png',
            '/projects/images/ir-system-5.png',
            '/projects/images/ir-system-6.png',
            '/projects/images/ir-system-7.png',
            '/projects/images/ir-system-8.png',
            '/projects/images/ir-system-9.png',
            '/projects/images/ir-system-10.png',
            '/projects/images/ir-system-11.png',
            '/projects/images/ir-system-13.png',
            '/projects/images/ir-system-14.png',
            '/projects/images/ir-system-15.png',
            '/projects/images/ir-system-16.png',
        ],
    },
    {
        title: 'Advanced Banking System',
        slug: 'advanced-banking-system',
        sourceCode: '',
        liveUrl: '',
        year: 2025,
        description: `
        A complete banking system implementing advanced Object-Oriented Design Patterns to manage accounts, transactions, interest calculation, role-based access, and notifications.<br/><br/>
        
        <strong>Design Patterns Used:</strong>
        <ul>
          <li>Composite, State, Strategy, Proxy, Chain of Responsibility, Observer, Singleton</li>
        </ul>
        `,
        role: `
        Backend Developer<br/>
        <ul>
          <li>Implemented multiple Design Patterns in a real banking domain</li>
          <li>Developed transaction processing, interest strategies, and notification system</li>
          <li>Wrote comprehensive Unit, Integration, Security, and Performance tests (5000 concurrent operations)</li>
        </ul>
        `,
        techStack: [
            'Java',
            'JUnit 5',
            'Mockito',
            'H2 Database',
            'Design Patterns',
        ],
        thumbnail: '/projects/images/banking-system-2.png',
        longThumbnail: '/projects/images/banking-system-4.png',
        images: [
            '/projects/images/banking-system-1.png',
            '/projects/images/banking-system-2.png',
            '/projects/images/banking-system-3.png',
            '/projects/images/banking-system-4.png',
            '/projects/images/banking-system-5.png',
            '/projects/images/banking-system-6.png',
            '/projects/images/banking-system-7.jpg',
        ],
    },
    {
        title: 'Smart Hospital ERP System',
        slug: 'smart-hospital-erp',
        sourceCode: 'https://github.com/s3h9a20m20/Smart-Hospital-ERP-System',
        liveUrl: '',
        year: 2025,
        description: `
        A complete Smart Mobile Hospital ERP solution built on Odoo for managing rapid-response medical services, mobile clinics, intelligent ambulance fleets, and emergency field operations.<br/><br/>
        
        <strong>Key Modules:</strong>
        <ul>
          <li>Tele-Triage Hub & Patient Helpdesk (CRM)</li>
          <li>Fleet Logistics & Maintenance</li>
          <li>Pharmaceutical Supply Chain</li>
          <li>Offline Point of Sale (PoS)</li>
          <li>Crisis Recruitment + Skills Matrix</li>
          <li>Custom Odoo Module for Medical License Tracking + Simulated IoT Triage</li>
        </ul>
        `,
        role: `
        Odoo Developer & Configurator<br/>
        <ul>
          <li>Configured and integrated multiple Odoo modules for emergency medical operations</li>
          <li>Developed a custom Odoo module (Python + XML) for medical license tracking</li>
          <li>Implemented Role-Based Access Control and multi-user workflows</li>
        </ul>
        `,
        techStack: ['Odoo', 'Python', 'XML', 'PostgreSQL'],
        thumbnail: '/projects/images/smart-hospital-11.png',
        longThumbnail: '/projects/images/smart-hospital-18.png',
        images: [
            '/projects/images/smart-hospital-1.png',
            '/projects/images/smart-hospital-2.png',
            '/projects/images/smart-hospital-3.png',
            '/projects/images/smart-hospital-4.png',
            '/projects/images/smart-hospital-5.png',
            '/projects/images/smart-hospital-6.png',
            '/projects/images/smart-hospital-7.png',
            '/projects/images/smart-hospital-8.png',
            '/projects/images/smart-hospital-9.png',
            '/projects/images/smart-hospital-10.png',
            '/projects/images/smart-hospital-12.png',
            '/projects/images/smart-hospital-13.png',
            '/projects/images/smart-hospital-14.png',
            '/projects/images/smart-hospital-15.png',
            '/projects/images/smart-hospital-16.png',
            '/projects/images/smart-hospital-17.png',
            '/projects/images/smart-hospital-19.png',
            '/projects/images/smart-hospital-20.png',
            '/projects/images/smart-hospital-24.png',
            '/projects/images/smart-hospital-25.png',
            '/projects/images/smart-hospital-26.png',
            '/projects/images/smart-hospital-27.png',
            '/projects/images/smart-hospital-28.png',
            '/projects/images/smart-hospital-29.png',
            '/projects/images/smart-hospital-30.png',
            '/projects/images/smart-hospital-31.png',
            '/projects/images/smart-hospital-32.png',
            '/projects/images/smart-hospital-33.png',
            '/projects/images/smart-hospital-34.png',
        ],
    },
    {
        title: 'Pharmacies & Inventories Management System',
        slug: 'PharMES',
        sourceCode: '',
        liveUrl: '',
        year: 2025,
        description: `
        A responsive web dashboard for managing pharmacies and inventories with real-time stock updates, barcode scanning, and automated reporting.<br/><br/>
        
        <strong>Key Features:</strong>
        <ul>
          <li>Real-time stock management with barcode scanning</li>
          <li>Low-stock alerts and offline mode using IndexedDB</li>
          <li>Automated weekly/monthly inventory reports with PDF export</li>
          <li>Reduced manual data entry errors by 95%</li>
        </ul>
        `,
        role: `
        React Developer<br/>
        <ul>
          <li>Designed and developed the complete responsive web dashboard using React.js</li>
          <li>Integrated RESTful APIs for live stock updates</li>
          <li>Implemented lazy loading, code splitting, and offline functionality</li>
        </ul>
        `,
        techStack: [
            'React.js',
            'JavaScript',
            'HTML5',
            'CSS3',
            'REST APIs',
            'IndexedDB',
        ],
        thumbnail: '/projects/images/pharmacy-inventory-7.png',
        longThumbnail: '/projects/images/pharmacy-inventory-6.png',
        images: [
            '/projects/images/pharmacy-inventory-1.png',
            '/projects/images/pharmacy-inventory-3.png',
            '/projects/images/pharmacy-inventory-4.png',
            '/projects/images/pharmacy-inventory-5.png',
            '/projects/images/pharmacy-inventory-6.png',
            '/projects/images/pharmacy-inventory-7.png',
            '/projects/images/pharmacy-inventory-8.png',
            '/projects/images/pharmacy-inventory-9.png',
        ],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Software Engineer ',
        company: '',
        duration: 'Aug 2026 - Present',
    },
    {
        title: 'Frontend Developer',
        company: '',
        duration: 'Oct 2024 - Present',
    },
];
