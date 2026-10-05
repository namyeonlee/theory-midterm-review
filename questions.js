// Review questions are new examples, not a reproduction of the exam.
export const categories = ['Research Basics','Measurement','Qualitative Research','Experiments','Content Analysis'];
const rows = [
 [
  ['A hypothesis is…', ['A testable prediction','A sampling method','A final result'], 'A · A testable prediction', 'A hypothesis predicts a relationship that can be tested with evidence.'],
  ['Put these in order, from abstract to measurable.', ['Variable → construct → concept','Concept → construct → variable','Construct → variable → concept'], 'B · Concept → construct → variable', 'A broad idea becomes a study-specific construct, then a measured variable.'],
  ['A researcher measures “news knowledge” with a 10-question quiz. What process is this?', [], 'Operationalization', 'The researcher turns an abstract construct into observable, measurable indicators.'],
  ['A theory explains a pattern with three ideas instead of twenty. Which evaluation criterion does this illustrate?', [], 'Parsimony', 'Parsimony means using the fewest necessary concepts and assumptions while retaining an accurate explanation.'],
  ['“Do students who use news apps know more about current events?” Turn this into a directional hypothesis.', [], 'More news-app use → higher current-events knowledge.', 'Accept a clear, testable directional relationship between app use and knowledge. This predicts an association; it does not establish causation.']
 ],
 [
  ['A student’s major is what level of measurement?', ['Nominal','Ordinal','Ratio'], 'A · Nominal', 'Majors are categories without an inherent rank. Numeric category codes would still be labels.'],
  ['First, second, and third place use which level of measurement?', ['Nominal','Ordinal','Interval'], 'B · Ordinal', 'Ranks have an order, but the gaps between positions are not necessarily equal.'],
  ['What distinguishes ratio measurement from interval measurement?', [], 'A meaningful, true zero', 'Both have equal intervals. Ratio scales also have a true zero, allowing meaningful ratio comparisons.'],
  ['A scale always reads 8 pounds too low. Is it reliable, valid, both, or neither?', [], 'Reliable, but not valid', 'It is consistent, but systematically inaccurate for measuring weight.'],
  ['A researcher uses follower count to measure trust in an influencer. Identify the validity concern and a better measure.', [], 'Followers ≠ trust. Measure trust directly.', 'Follower count may reflect popularity or exposure. Accept a trust questionnaire with items about honesty, dependability, or credibility; consistency alone cannot establish validity.']
 ],
 [
  ['Who guides a focus-group discussion?', ['Moderator','Confederate','Coder'], 'A · Moderator', 'The moderator facilitates discussion, invites participation, and keeps the group focused.'],
  ['A researcher joins a fan community for a semester to understand its routines. Which approach fits?', ['Experiment','Ethnography','Survey'], 'B · Ethnography', 'Ethnography examines culture and everyday interactions in their natural setting, from members’ perspectives.'],
  ['“Fans go silent during this chant as a shared sign of respect.” Thin or thick description? Why?', [], 'Thick description', 'It explains the cultural meaning of the behavior, rather than merely reporting that fans became silent.'],
  ['Name one benefit and one limitation of focus groups.', [], 'Rich interaction; limited generalizability', 'Accept benefits such as follow-up questions or participants building on ideas. Accept limitations such as conformity, dominant voices, moderator influence, or limited statistical generalizability.'],
  ['Eight interviewees describe why they avoid the news. Can this establish how common news avoidance is among all college students? Explain.', [], 'No · Depth does not establish prevalence.', 'Interviews can reveal reasons and experiences. A small purposive sample does not estimate population prevalence; a suitable representative survey would better address that question.']
 ],
 [
  ['Which research method is best suited to testing cause and effect?', ['Content analysis','Experiment','Focus group'], 'B · Experiment', 'Experiments manipulate an independent variable and control alternative explanations.'],
  ['Students see a humorous or serious campus ad. The researcher measures recall. What is the IV?', ['Ad tone','Recall','Campus'], 'A · Ad tone', 'Tone is manipulated: humorous versus serious. Recall is the measured outcome.'],
  ['An experiment varies a video’s length and measures how many facts viewers remember. What is the DV?', [], 'Number of facts remembered', 'The dependent variable is the measured outcome. Video length is the independent variable.'],
  ['Why include a control group?', [], 'To provide a comparison baseline', 'It helps distinguish a treatment effect from what would happen without that treatment, within a properly controlled design.'],
  ['One group sees a humorous 15-second ad. Another sees a serious 60-second ad. Can a recall difference be attributed to humor alone? Explain.', [], 'No · Tone and length both changed.', 'Video length is confounded with tone. Hold length and other features constant and randomly assign participants to isolate the effect of tone.']
 ],
 [
  ['Which document defines coding categories?', ['Codebook','Moderator’s guide','Consent form'], 'A · Codebook', 'A codebook states variable definitions and coding rules so coders apply the same standards.'],
  ['A study assigns one overall tone code to each Instagram post. What is the unit of analysis?', ['One account','One post','One follower'], 'B · One post', 'Each post is the entity analyzed and coded.'],
  ['For one tone variable, every post must fit exactly one category. Name the two category requirements.', [], 'Mutually exclusive + exhaustive', 'Mutually exclusive means categories do not overlap. Exhaustive means all units have an applicable category.'],
  ['Two trained coders classify the same posts independently. What are researchers checking by comparing their codes?', [], 'Intercoder reliability', 'Agreement indicates whether coding rules are applied consistently. Agreement must be checked before discussion resolves disagreements.'],
  ['A content analysis finds many violent scenes in popular shows. Does this show that viewing those shows makes people aggressive? Explain.', [], 'No · Content is not an audience effect.', 'The analysis describes the messages. It does not measure viewers’ responses or establish a causal effect of exposure.']
 ]
];
export const questions = rows.flatMap((row,c) => row.map((r,i) => ({id:`${c}-${i}`,category:c,value:(i+1)*100,prompt:r[0],options:r[1],answer:r[2],explanation:r[3]})));
