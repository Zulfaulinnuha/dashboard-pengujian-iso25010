import { issuesData } from './issuesData';

export const systemIssues = issuesData.sections.find(s => s.id === 'system-issues').items;
export const myReports = issuesData.sections.find(s => s.id === 'my-reports').items;
export const explanations = issuesData.sections.find(s => s.id === 'explanations').items;
export const myCourses = issuesData.sections.find(s => s.id === 'my-courses').items;
export const leaderboardData = issuesData.sections.find(s => s.id === 'leaderboard').items;
