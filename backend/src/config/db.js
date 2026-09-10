import mongoose from 'mongoose';
import Project from '../models/Project.js';

export const initialProjects = [
  {
    title: 'Academic Syllabus Management Platform',
    description: 'Centralized institutional syllabus curation and approval platform with Role-Based Access Control, Multer file streaming, and atomic versioning.',
    githubUrl: 'https://github.com/praveen-2006-git',
    demoUrl: 'https://sylubus-management-system.vercel.app/login',
    tags: ['MongoDB', 'Express.js', 'React 19', 'Node.js', 'Multer', 'RBAC Security'],
    order: 1,
    caseStudy: {
      problem: 'Academic departments relied on scattered document folders and email attachments. Unapproved syllabus edits were frequent, students routinely accessed outdated course outlines, and faculty lacked an authenticated workflow for file submissions.',
      context: 'Institutional academic administration at Bannari Amman Institute of Technology.',
      role: 'Sole Full-Stack Architect',
      architecture: '4-Tier Decoupled MERN Architecture: React 19 Client with optimistic state -> Express JWT RBAC Middleware -> Multer Streaming File Engine -> Compound Indexed MongoDB Cluster.',
      technicalDecisions: [
        {
          decision: 'Role-based API middleware vs client route guards',
          rationale: 'Enforcing authorization at the Express route handler level guarantees zero data leakage even against forged HTTP requests.',
          alternatives: 'Client-only React Router guards (vulnerable to direct curl/REST payload tampering).'
        },
        {
          decision: 'Disk stream storage via Multer vs raw MongoDB base64 blobs',
          rationale: 'Streaming PDF files directly to disk maintains constant low Node.js RAM footprint and prevents BSON 16MB document exhaustion.',
          alternatives: 'Direct MongoDB GridFS / Base64 string encoding in document.'
        }
      ],
      challenges: [
        {
          challenge: 'Handling simultaneous faculty revisions without document overwrites.',
          solution: 'Implemented an immutable revision audit log where each approved upload increments an atomic syllabus version tag (v1.0 -> v1.1).'
        }
      ],
      outcomes: [
        { metric: 'Role Isolation', value: '100% across Admin, Faculty, and Student tiers' },
        { metric: 'Catalog Search Latency', value: '< 85ms on compound indexed queries' },
        { metric: 'Integrity', value: 'Zero unauthorized modifications during evaluations' }
      ],
      learnings: [
        'Designing strict JSON API envelopes prevents client-side rendering edge cases.',
        'Compound indexes { courseCode: 1, version: -1 } dramatically speed up revision catalog queries.'
      ]
    }
  },
  {
    title: 'Real-Time Asset & Warranty Lifecycle Engine',
    description: 'Automated hardware asset and warranty governance dashboard designed to proactively prevent costly repair liabilities caused by silently expiring coverage.',
    githubUrl: 'https://github.com/praveen-2006-git',
    demoUrl: '',
    tags: ['React 19', 'Node.js', 'Express.js', 'MongoDB', 'Lifecycle Alerts', 'REST API'],
    order: 2,
    caseStudy: {
      problem: 'Hardware assets across labs and personal registries fell out of coverage unnoticed due to static spreadsheet tracking, causing costly out-of-pocket repair bills.',
      context: 'Personal and institutional device registry lifecycle management.',
      role: 'Full-Stack Developer',
      architecture: 'Full-Stack Automated Daemon: React Dashboard -> Express Service Layer -> Scheduled Node Cron Expiration Daemon -> Compound Indexed MongoDB Database.',
      technicalDecisions: [
        {
          decision: 'Database-indexed date threshold scans vs full collection memory loops',
          rationale: 'Filtering assets using compound indexes on { expiryDate: 1, userId: 1 } reduces query complexity to O(log N).',
          alternatives: 'Iterating entire MongoDB collection in Node.js runtime memory.'
        },
        {
          decision: 'Dynamic status classification on API response vs persisted status column',
          rationale: 'Warranties age continuously over time. Calculating status dynamically from verified UTC expiry date eliminates stale database flags.',
          alternatives: 'Daily database cron writing status strings to disk.'
        }
      ],
      challenges: [
        {
          challenge: 'Timezone boundary discrepancies causing alert notifications to fire early or late.',
          solution: 'Normalized all timestamp inputs to UTC midnight upon persistence.'
        }
      ],
      outcomes: [
        { metric: 'Notification Lead Time', value: 'Automated 30-day and 7-day proactive warning alerts' },
        { metric: 'Query Efficiency', value: 'O(log N) indexed date range scans' },
        { metric: 'Asset Health Tracking', value: 'Real-time color-coded categorization' }
      ],
      learnings: [
        'UTC normalization is critical for scheduled daemon reliability.',
        'Mongoose virtual fields provide zero-storage computed properties.'
      ]
    }
  },
  {
    title: 'Community Surplus Food Ingredient Inventory Routing Portal',
    description: 'Full-stack web application using React on the front end and Node.js/Express on the back end to manage raw ingredient listings and logistics for local soup kitchens.',
    githubUrl: 'https://github.com/praveen-2006-git',
    demoUrl: 'https://community-food-portal-4ht8v9lzq-praveens-projects-559cf653.vercel.app/login',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'Concurrency Control'],
    order: 3,
    caseStudy: {
      problem: 'Local soup kitchens and community food shelters struggled to coordinate raw perishable ingredient donations. Without a unified system, donor listings suffered from concurrent double-claims and uncertain custody handoffs.',
      context: 'Community food logistics and hunger relief operations.',
      role: 'Full-Stack Developer',
      architecture: 'MERN Stack Architecture: React Frontend -> Express REST API -> Concurrency-Safe Transaction Layer -> MongoDB Document Store.',
      technicalDecisions: [
        {
          decision: 'Atomic database claims vs optimistic client updates',
          rationale: 'Using atomic update operations in MongoDB ensures that concurrent claim attempts from different kitchens cannot double-book the same perishable batch.',
          alternatives: 'Client-side reservation timers prone to race conditions.'
        },
        {
          decision: 'Single-use verification codes vs insecure static receipts',
          rationale: 'Generates dynamic, single-use custody transfer tokens with rate limiting to prevent unauthorized handoffs or brute-force code guessing.',
          alternatives: 'Static paper confirmation slips.'
        }
      ],
      challenges: [
        {
          challenge: 'Handling simultaneous ingredient claims from multiple soup kitchens without inventory conflicts.',
          solution: 'Designed database transaction logic with status checks that atomically lock and transition claimed inventory items.'
        }
      ],
      outcomes: [
        { metric: 'Claim Safety', value: 'Zero double-booking conflicts across concurrent requests' },
        { metric: 'Handoff Security', value: '100% single-use verification code validation' },
        { metric: 'Logistics', value: 'Streamlined route mapping for local ingredient transfers' }
      ],
      learnings: [
        'Atomic database locks are essential when handling concurrent real-world inventory.',
        'Single-use token systems require strict rate-limiting against automated brute-force attacks.'
      ]
    }
  }
];

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    
    // Seed or enrich projects on startup
    const projectCount = await Project.countDocuments();
    if (projectCount === 0) {
      console.log('Seeding initial projects with comprehensive case studies...');
      await Project.insertMany(initialProjects);
      console.log('Database successfully seeded with comprehensive case studies!');
    }
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
    console.warn('Server running without active MongoDB connection; API routes will return appropriate status codes.');
  }
};

export default connectDB;
