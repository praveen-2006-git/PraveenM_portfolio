import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  // Existing fields (kept for backward compatibility)
  title: { type: String, required: true },
  description: { type: String, required: true },
  githubUrl: { type: String, default: '' },
  demoUrl: { type: String, default: '' },
  tags: [{ type: String }],
  order: { type: Number, default: 0 },

  // Rich Case Study Metadata
  caseStudy: {
    problem: { type: String, default: '' },
    context: { type: String, default: '' },
    role: { type: String, default: '' },
    architecture: {
      type: String,
      default: ''
    },
    diagramUrl: { type: String, default: '' },
    technicalDecisions: [{
      decision: { type: String },
      rationale: { type: String },
      alternatives: { type: String }
    }],
    challenges: [{
      challenge: { type: String },
      solution: { type: String }
    }],
    outcomes: [{
      metric: { type: String },
      value: { type: String }
    }],
    learnings: [{ type: String }]
  },

  screenshots: [{ type: String }]
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);
export default Project;

