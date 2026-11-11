// Expansion pack, Units 1-2. Adds depth to existing topics, new topics, cards, questions and long-answer outlines.
(function(){
const U=window.UNITS;
U.forEach(u=>u.topics.forEach((t,i)=>t.k=i)); // keep old progress keys stable when topics are inserted
const D='<h4 class="deep">Go deeper</h4>';
window.X={
  more:(n,k,h)=>{U[n-1].topics.find(t=>t.k===k).h+=D+h},
  ins:(n,after,t)=>{const a=U[n-1].topics;a.splice(a.findIndex(x=>x.k===after)+1,0,t)},
  cards:(n,c)=>U[n-1].cards.push(...c),
  quiz:(n,q)=>U[n-1].quiz.push(...q),
  long:(n,l)=>{U[n-1].long=l}
};
const X=window.X;

/* ================= UNIT 1 ================= */
X.more(1,0,`
<p>The slides also give a fuller definition: research is the <b>systematic and empirical analysis and recording of controlled observation</b>, which may lead to theories, concepts, generalisations and principles, and so to <b>prediction and control</b> of activities that may have a cause-effect relationship.</p>
<h4>Kerlinger's four words, unpacked</h4>
<table><tr><th>Word</th><th>What it means in practice</th></tr>
<tr><td><b>Systematic</b></td><td>Steps are planned and follow an order. Nothing is left to whim.</td></tr>
<tr><td><b>Controlled</b></td><td>Conditions are arranged so rival explanations can be ruled out.</td></tr>
<tr><td><b>Empirical</b></td><td>Beliefs are checked against observable evidence, not authority or intuition.</td></tr>
<tr><td><b>Critical</b></td><td>Methods and findings are open to scrutiny by others. Science corrects itself.</td></tr></table>
<h4>Research vs common sense</h4>
<table><tr><th></th><th>Common sense</th><th>Scientific research</th></tr>
<tr><td>Concepts</td><td>Loose, undefined</td><td>Defined, usually operationally</td></tr>
<tr><td>Testing</td><td>Selective: notices what fits</td><td>Systematic: tests even what might disprove it</td></tr>
<tr><td>Control</td><td>None</td><td>Rules out other causes</td></tr>
<tr><td>Explanation</td><td>May accept untestable ideas</td><td>Only testable explanations</td></tr></table>
<p><b>Goals of science:</b> describe, explain, predict, control. A good exam answer on "meaning of research" ends with these.</p>`);

X.more(1,1,`
<h4>Objectives with examples</h4>
<ul><li><b>Exploratory:</b> "What do first-year students mean by exam stress?" Little is known, so the aim is insight.</li>
<li><b>Descriptive:</b> "What are the study habits of psychology undergraduates in Udupi?" The aim is an accurate picture.</li>
<li><b>Diagnostic:</b> "How often is social-media use associated with poor sleep?" The aim is frequency and association.</li>
<li><b>Hypothesis-testing:</b> "Does mindfulness training reduce test anxiety?" The aim is a causal claim.</li></ul>
<h4>Why each criterion matters</h4>
<ul><li><b>Defined purpose</b> stops the study drifting.</li><li><b>Replicable procedure</b> lets others verify the result.</li><li><b>Planned design</b> keeps the results objective.</li><li><b>Frankness about flaws</b> lets readers judge how far to trust the findings.</li><li><b>Reliability and validity</b> show the measurement is consistent and measures what it should.</li><li><b>Justified conclusions</b> prevent over-generalising.</li><li><b>Integrity of the researcher</b> adds confidence.</li></ul>`);

X.more(1,2,`
<h4>Reliability vs validity</h4>
<p><b>Reliability</b> is consistency: the same measure gives similar results again. <b>Validity</b> is accuracy: it measures what it claims to. A measure can be reliable without being valid (a scale that always reads 2 kg too heavy), but it cannot be valid without being reliable.</p>
<h4>Validity of a measure</h4>
<table><tr><th>Type</th><th>Question it answers</th></tr>
<tr><td><b>Content validity</b></td><td>Do the items cover the whole domain?</td></tr>
<tr><td><b>Criterion-related validity</b></td><td>Do scores agree with an outside criterion, now (concurrent) or later (predictive)?</td></tr>
<tr><td><b>Construct validity</b></td><td>Does the test really measure the theoretical construct?</td></tr></table>
<h4>Validity of a study</h4>
<p><b>Internal validity</b> is threatened by history, maturation, testing, instrumentation, regression, selection and mortality (full list in Unit 3). <b>External validity</b> is threatened when the sample, setting or procedure is too unlike the real world.</p>
<div class="tip">This block goes beyond your slides. It is standard material, added because the syllabus lists "Validity" as its own point.</div>`);

X.more(1,3,`
<h4>Two ways to define a construct (Kerlinger)</h4>
<table><tr><th>Definition</th><th>How</th><th>Example for "anxiety"</th></tr>
<tr><td><b>Constitutive</b></td><td>Defines a construct using other constructs</td><td>"A state of apprehension and tension"</td></tr>
<tr><td><b>Operational</b></td><td>Defines it by the activities needed to measure or manipulate it</td><td>"Score on the State-Trait Anxiety Inventory"</td></tr></table>
<h4>Two kinds of operational definition</h4>
<ul><li><b>Measured:</b> states how the variable will be measured. Intelligence = score on an intelligence test.</li>
<li><b>Experimental:</b> states how the variable will be manipulated. Hunger = 24 hours of food deprivation. Frustration = blocking a child from reaching a toy.</li></ul>
<h4>Why operational definitions matter</h4>
<ol><li>They make abstract ideas observable and testable.</li><li>They let another researcher replicate the study exactly.</li><li>They remove arguments about what a word means.</li></ol>
<p><b>Limit:</b> an operational definition captures only part of a construct. An IQ score is not the whole of intelligence.</p>`);

X.more(1,4,`
<h4>One study, every variable</h4>
<p><i>Study:</i> Does background music affect memory for a word list, and does it depend on whether the person is an introvert or extravert?</p>
<table><tr><th>Variable</th><th>In this study</th></tr>
<tr><td>Independent (Type E, environmental)</td><td>Music vs silence</td></tr>
<tr><td>Dependent</td><td>Number of words recalled</td></tr>
<tr><td>Moderator (attribute)</td><td>Introversion-extraversion</td></tr>
<tr><td>Intervening</td><td>Distraction or arousal (inferred, not seen)</td></tr>
<tr><td>Subject relevant (controlled)</td><td>Age, hearing ability</td></tr>
<tr><td>Situational relevant (controlled)</td><td>Room lighting, word-list difficulty</td></tr>
<tr><td>Sequence relevant (controlled)</td><td>Order of music and silence conditions</td></tr></table>
<h4>How extraneous variables are controlled</h4>
<ol><li><b>Elimination:</b> remove the variable (soundproof room).</li><li><b>Constancy of conditions:</b> keep it the same for everyone.</li><li><b>Balancing / matching:</b> make groups equal on it.</li><li><b>Counterbalancing:</b> vary the order of conditions (ABBA).</li><li><b>Randomisation:</b> let chance spread it evenly across groups.</li></ol>
<div class="tip">Quick test: if the researcher sets it, IV. If the researcher measures the outcome, DV. If the researcher holds it still, control.</div>`);

X.more(1,5,`
<h4>Induction and deduction</h4>
<p><b>Induction</b> moves from particular observations to a general statement. <b>Deduction</b> moves from a general statement to a particular prediction. The scientific method uses both: observe → build a hypothesis (induction) → derive predictions and test them (deduction). This cycle is the <b>hypothetico-deductive method</b>.</p>
<h4>What makes the method scientific</h4>
<ul><li><b>Objectivity:</b> results do not depend on who did the study.</li><li><b>Verifiability:</b> others can check them.</li><li><b>Repeatability:</b> the steps can be repeated to guard against one experimenter's mistake.</li><li><b>Theory linkage:</b> hypotheses are tied into theories, and theories generate new hypotheses.</li></ul>
<h4>The six steps on one example</h4>
<ol><li><b>Question:</b> Do students remember more when they test themselves?</li><li><b>Background:</b> Read work on retrieval practice.</li><li><b>Hypothesis:</b> Self-testing gives higher recall than re-reading.</li><li><b>Experiment:</b> Randomly assign students to self-test or re-read, then give the same test a week later.</li><li><b>Analyse:</b> Compare group means, draw a conclusion.</li><li><b>Communicate:</b> Write the report (Unit 5).</li></ol>`);

X.more(1,6,`
<h4>Each canon in a psychology example</h4>
<ul><li><b>Agreement:</b> every student who failed had skipped the revision class, and they had nothing else in common. Skipping is the suspected cause.</li>
<li><b>Difference:</b> two matched groups, one gets the drug and one does not; only the drug group improves. This is the control-group experiment.</li>
<li><b>Joint method:</b> cases with the factor show the effect and cases without it do not.</li>
<li><b>Residue:</b> a 10-point gain is found; practice explains 4 points, so the remaining 6 are credited to the training.</li>
<li><b>Concomitant variation:</b> as hours of sleep fall, errors rise. This is the logic of correlation.</li></ul>
<h4>Limits</h4>
<p>Agreement can mislead when the shared factor is a coincidence. Concomitant variation shows association, and association alone is not proof of causation.</p>
<h4>Three conditions for calling something a cause</h4>
<ol><li>Cause and effect vary together.</li><li>The cause comes before the effect.</li><li>Other explanations have been ruled out.</li></ol>`);

X.more(1,7,`
<h4>Pure vs applied vs action</h4>
<table><tr><th></th><th>Pure</th><th>Applied</th><th>Action</th></tr>
<tr><td>Aim</td><td>Build theory</td><td>Solve a practical problem</td><td>Fix a local problem now</td></tr>
<tr><td>Who does it</td><td>Scientists</td><td>Scientists and practitioners</td><td>The practitioner (teacher, counsellor)</td></tr>
<tr><td>Generalisation</td><td>Wide</td><td>Moderate</td><td>Limited to the setting</td></tr>
<tr><td>Example</td><td>How memory traces decay</td><td>A study method that improves exam scores</td><td>Why Class 9B is not doing homework this term</td></tr></table>
<h4>Exploratory research: three methods (Kothari)</h4>
<ol><li><b>Survey of the literature</b></li><li><b>Experience survey:</b> talk to people with practical experience of the problem</li><li><b>Analysis of insight-stimulating examples:</b> study selected cases intensively</li></ol>
<h4>Exploratory vs descriptive/diagnostic design (Kothari)</h4>
<table><tr><th></th><th>Exploratory</th><th>Descriptive / diagnostic</th></tr>
<tr><td>Overall design</td><td>Flexible</td><td>Rigid, protects against bias</td></tr>
<tr><td>Sampling</td><td>Non-probability (purposive)</td><td>Probability (random)</td></tr>
<tr><td>Statistical design</td><td>No pre-planned analysis</td><td>Pre-planned analysis</td></tr>
<tr><td>Observation</td><td>Unstructured instruments</td><td>Structured instruments</td></tr>
<tr><td>Operations</td><td>No fixed decisions</td><td>Decisions made in advance</td></tr></table>
<h4>Evaluative research</h4>
<p><b>Formative</b> evaluation happens while a programme is being developed, to improve it. <b>Summative</b> evaluation happens at the end, to judge whether it worked.</p>`);

X.ins(1,8,{k:'a1',t:'Experimental methods in depth: lab, field, ex post facto',s:'Slides',h:`
<h4>Laboratory experiment</h4>
<p>Some variables are manipulated, others are controlled, to see the effect on the DV. <b>Three purposes:</b> predict the DV under pure, uncontaminated conditions; make that prediction accurate; build theoretical systems.</p>
<table><tr><th>Strengths</th><th>Weaknesses</th></tr>
<tr><td>Pure, controlled situation</td><td>Lacks external validity</td></tr>
<tr><td>Replicable</td><td>Artificial and weak situations</td></tr>
<tr><td>Precise manipulation and randomisation</td><td>Complex designs weaken the manipulated variable</td></tr>
<tr><td>High internal validity</td><td>Some situations cannot be created; ethical limits; costly and slow</td></tr></table>
<h4>Field experiment vs field study</h4>
<table><tr><th></th><th>Field experiment</th><th>Field study</th></tr>
<tr><td>Kind</td><td>Experimental</td><td>Non-experimental (ex post facto in nature)</td></tr>
<tr><td>IV</td><td>Manipulated in a realistic situation</td><td>Not manipulated</td></tr>
<tr><td>Aim</td><td>Impact of IV on DV</td><td>Relations and interactions among variables in real life</td></tr>
<tr><td>Precision</td><td>More controlled</td><td>Less controlled</td></tr>
<tr><td>Notes</td><td>Strengths: real situations, stronger effects, high external validity. Weak: lower internal validity, hard to manipulate.</td><td>Katz's types: exploratory and hypothesis-testing. Weak: little control over extraneous variables.</td></tr></table>
<h4>Ex post facto vs experimental</h4>
<table><tr><th>Ex post facto</th><th>Experimental</th></tr>
<tr><td>IV has already occurred (smoking and cancer)</td><td>Investigator manipulates the IV</td></tr>
<tr><td>No direct control over the IV</td><td>Direct control</td></tr>
<tr><td>Randomisation is difficult</td><td>Randomisation is easy</td></tr>
<tr><td>IV-DV relationship is less clear</td><td>Relationship is clearer</td></tr></table>
<p><i>Ex post facto</i> is Latin for "after the fact".</p>`});

X.ins(1,'a1',{k:'a2',t:'Survey research in depth',s:'Slides + Kothari ch. 6',h:`
<p>The researcher studies a population on sociological and psychological variables. It depends on <b>direct contact</b> with respondents, their <b>willingness to cooperate</b>, and the researcher's <b>skill and insight</b>.</p>
<h4>Four forms</h4>
<table><tr><th>Form</th><th>How</th><th>Plus</th><th>Minus</th></tr>
<tr><td><b>Personal interview</b></td><td>Face-to-face conversation</td><td>Deep, flexible</td><td>Costly, interviewer bias. Needs accessibility, cognition and motivation (Cannel & Kahn).</td></tr>
<tr><td><b>Mail questionnaire</b></td><td>Items posted to respondents</td><td>Cheap, quick, no interviewer bias</td><td>High non-response, inflexible, cannot probe</td></tr>
<tr><td><b>Panel technique</b></td><td>Same sample re-interviewed over time</td><td>Sensitive measure of change</td><td>Sample loss, respondents become sensitised</td></tr>
<tr><td><b>Telephone survey</b></td><td>Interview by phone</td><td>Fast</td><td>Reaches only part of the population</td></tr></table>
<h4>Advantages and disadvantages</h4>
<table><tr><th>Advantages</th><th>Disadvantages</th></tr>
<tr><td>Large amount of quality information</td><td>Does not go deep into the problem</td></tr>
<tr><td>More accurate</td><td>Time-consuming and expensive</td></tr>
<tr><td>Interdisciplinary value</td><td>Subject to sampling error</td></tr>
<tr><td>Key tool for attitudes, beliefs, values</td><td>Makes respondents sensitive; needs an expert researcher</td></tr></table>
<h4>Survey vs experiment (Kothari)</h4>
<table><tr><th></th><th>Survey</th><th>Experiment</th></tr>
<tr><td>Type of research</td><td>Descriptive</td><td>Experimental</td></tr>
<tr><td>Sample</td><td>Larger</td><td>Smaller</td></tr>
<tr><td>Concern</td><td>Conditions that exist; no manipulation</td><td>Manipulating variables to see effects</td></tr>
<tr><td>Setting</td><td>Field research</td><td>Usually laboratory research</td></tr>
<tr><td>Main analysis</td><td>Correlational</td><td>Causal</td></tr>
<tr><td>Design</td><td>Rigid, guards against bias, maximises reliability</td><td>Reduces bias and allows causal inference</td></tr></table>`});

X.ins(1,'a2',{k:'a3',t:'Content analysis, case study and ethnography in depth',s:'Slides',h:`
<h4>Content analysis (document analysis)</h4>
<p>Systematic examination of communications and records: letters, diaries, reports, books, syllabi, court decisions, pictures, films, cartoons.</p>
<p><b>Purposes:</b> describe prevailing practices · identify a writer's concepts, beliefs and style · locate causal factors behind an outcome · analyse errors in students' work · judge the difficulty of textbooks · evaluate bias, prejudice or propaganda.</p>
<p><b>Berelson's method:</b> specify the universe, then choose the unit of analysis: <b>words, themes, items, characters, space-and-time measures</b>.</p>
<p><b>Quantification:</b> nominal (counting), ordinal (ranking) and rating.</p>
<p><b>Merits:</b> works on a wide variety of materials; validates other observation methods. <b>Demerit:</b> complex.</p>
<h4>Case study</h4>
<p>Organises social data so a social unit is seen as a whole: a person, family, group, institution or community. The aim is to understand the important aspects of the unit's life cycle. No variable is manipulated.</p>
<ul><li><b>Data from:</b> observation, questionnaires, opinionnaires, inventories, checklists, psychological tests, records, interviews.</li>
<li><b>By number:</b> individual case study (in-depth, generates hypotheses) and community case study (economy, climate, social structure, values, recreation).</li>
<li><b>By purpose:</b> deviant case analysis and isolated clinical case analysis.</li>
<li><b>Weaknesses:</b> deceptive simplicity, cost in time and money, subjective bias, post hoc fallacy.</li></ul>
<p><b>Post hoc fallacy:</b> assuming that because B came after A, A caused B.</p>
<h4>Ethnography</h4>
<p>Field observation of behaviour in a natural setting using <b>participant observation, conversation and informants</b>. Focus: language, marriage, child-rearing, religious beliefs, social relations, political institutions.</p>
<p><b>Assumption:</b> real-life behaviour is a dynamic process shaped by its setting and social structure.</p>
<p><b>What the researcher must do:</b> live with the group for a long time, interpret in the group's own concepts and values, learn the language, train informants to record data.</p>
<p><b>Advantages:</b> dependable facts, high external validity, freedom from conventional procedure. <b>Limits:</b> hard to stay neutral; needs time, patience and trained people.</p>`});

X.ins(1,'a3',{k:'a4',t:'Historical, archival and naturalistic research in depth',s:'Slides + AK Singh ch. 17',h:`
<h4>Historical research</h4>
<p>A systematic and objective study of past events to understand the present and anticipate the future.</p>
<ol><li>Identify and define the problem</li><li>Collect data from <b>primary sources</b> (eyewitness accounts, original documents, relics) and <b>secondary sources</b> (accounts by people who were not present)</li><li>Criticise the data: <b>external criticism</b> asks whether the document is genuine; <b>internal criticism</b> asks whether what it says is accurate and what it means</li><li>Interpret and report</li></ol>
<p><b>Limits:</b> the researcher cannot manipulate or re-observe events, sources may be incomplete or biased, and causal claims stay tentative.</p>
<h4>Archival research</h4>
<p>Uses data sets already collected by someone else, either for psychological questions or for other purposes (census data).</p>
<table><tr><th>Advantages</th><th>Disadvantages</th></tr>
<tr><td>Data are already collected</td><td>Format may be hard to use</td></tr>
<tr><td>Minimal ethics-board concerns</td><td>Variables of interest may be missing</td></tr>
<tr><td>Access to things hard to study directly, such as lifespan development</td><td>Measures may not match current literature</td></tr></table>
<p><b>How:</b> develop a hypothesis → find an archival source → operationalise definitions → analyse with correlation, multiple regression or path analysis.</p>
<h4>Naturalistic observation</h4>
<ul><li>The subject is observed in its natural habitat with no manipulation, in contrast to <b>analog observation</b> (a staged setting).</li><li><b>Unobtrusive</b> methods are used so behaviour is not disturbed.</li><li>Behaviour is more credible because the scenario is real.</li><li>Allows study of events that would be unethical to create experimentally; widely used with animals.</li><li><b>Overt:</b> participants know. <b>Covert:</b> they do not, which adds ethical obligations.</li></ul>`});

X.more(1,10,`
<p><b>Ethics</b> means a system of moral standards or values.</p>
<h4>Each issue explained</h4>
<table><tr><th>Issue</th><th>What it means for you as researcher</th></tr>
<tr><td><b>Stress and harm</b></td><td>Do not expose participants to physical or psychological harm greater than everyday life without strong justification.</td></tr>
<tr><td><b>Deception</b></td><td>Misleading participants about the study. Used only when there is no alternative and the value justifies it, and it must be followed by debriefing.</td></tr>
<tr><td><b>Informed consent</b></td><td>Participants agree after being told the purpose, procedure, risks, and their right to withdraw. Consent is also needed for filming or recording.</td></tr>
<tr><td><b>Debriefing</b></td><td>After the study: explain the real purpose, remove misconceptions, undo any negative effects.</td></tr>
<tr><td><b>Privacy and confidentiality</b></td><td>Data are not linked publicly to names. Anonymity means even the researcher cannot identify the person.</td></tr>
<tr><td><b>Special populations</b></td><td>Children, patients, prisoners and others who cannot freely consent need extra protection and consent from a guardian.</td></tr>
<tr><td><b>Experimenter's obligation</b></td><td>The researcher is responsible for participants' welfare and for keeping every promise made.</td></tr></table>
<h4>What the APA preamble commits psychologists to</h4>
<p>Develop valid, reliable knowledge · apply it across contexts · broaden understanding for public benefit · respect freedom of inquiry · help the public make informed choices · aim for the highest personal standards · respect human and civil rights.</p>
<h4>Alternatives to deception</h4>
<ul><li><b>Role playing:</b> participants are told the situation and asked to act as if it were real.</li><li><b>Simulation studies:</b> a real-world situation is recreated and participants know it.</li><li><b>Honest experiments:</b> participants are fully informed from the start.</li></ul>`);

X.cards(1,[
['Constitutive vs operational definition','Constitutive: defines a construct with other constructs. Operational: defines it by how it is measured or manipulated.'],
['Measured vs experimental operational definition','Measured: how the variable is measured (IQ score). Experimental: how it is manipulated (hours of food deprivation).'],
['Three purposes of a laboratory experiment','Predict the DV under pure conditions, make the prediction accurate, build theoretical systems.'],
['Berelson\'s five units of content analysis','Words, themes, items, characters, space-and-time measures'],
['Post hoc fallacy','Assuming A caused B just because B followed A. A weakness of case studies.'],
['Panel technique','The same sample is re-interviewed over time. Measures change well but risks sample loss and sensitisation.'],
['Formative vs summative evaluation','Formative: during development, to improve. Summative: at the end, to judge.'],
['Three methods of exploratory research (Kothari)','Survey of literature, experience survey, analysis of insight-stimulating examples'],
['Overt vs covert observation','Overt: participants know they are observed. Covert: they do not, which adds ethical duties.'],
['Reliability vs validity','Reliability: consistency. Validity: measuring what you claim to measure.'],
['Five ways to control extraneous variables','Elimination, constancy, balancing, counterbalancing, randomisation'],
['Goals of science','Describe, explain, predict, control']
]);
X.quiz(1,[
{q:'"Hunger is defined as 24 hours without food." This is',o:['A constitutive definition','A measured operational definition','An experimental operational definition','A hypothesis'],a:2,e:'It states how the variable is manipulated, so it is an experimental operational definition.'},
{q:'A scale gives the same wrong weight every time. It is',o:['Valid but not reliable','Reliable but not valid','Both reliable and valid','Neither'],a:1,e:'Consistent results mean reliability; wrong results mean it lacks validity.'},
{q:'Re-interviewing the same sample of voters every month is the',o:['Mail questionnaire','Panel technique','Telephone survey','Store audit'],a:1,e:'The panel technique measures change by going back to the same people.'},
{q:'Which is NOT one of Berelson\'s units of content analysis?',o:['Themes','Characters','Variables','Words'],a:2,e:'His units are words, themes, items, characters and space-and-time measures.'},
{q:'In a field study, as opposed to a field experiment, the independent variable is',o:['Manipulated in a real setting','Not manipulated','Manipulated in a laboratory','Randomly assigned'],a:1,e:'A field study is non-experimental: it only discovers relations among variables.'},
{q:'External criticism in historical research checks',o:['Whether the document is genuine','Whether the content is accurate','The sample size','Statistical significance'],a:0,e:'External criticism = authenticity. Internal criticism = accuracy and meaning.'},
{q:'According to Kothari, the design of an exploratory study should be',o:['Rigid','Flexible','Factorial','Pre-planned statistically'],a:1,e:'Exploratory designs must stay flexible so new aspects can be considered.'},
{q:'Evaluating a counselling programme while it is still being developed, to improve it, is',o:['Summative evaluation','Formative evaluation','Action research','Archival research'],a:1,e:'Formative evaluation feeds back into the programme during development.'},
{q:'Which is an alternative to deception?',o:['Covert observation','Role playing','Withholding debriefing','Panel technique'],a:1,e:'Role playing, simulation studies and honest experiments avoid deceiving participants.'},
{q:'Moving from many observations to a general statement is',o:['Deduction','Induction','Operationalisation','Replication'],a:1,e:'Induction goes from particular to general. Deduction goes the other way.'},
{q:'The main weakness of the method of concomitant variation is that it',o:['Needs a laboratory','Shows association, which alone does not prove causation','Cannot be quantified','Needs only one case'],a:1,e:'Two things varying together may both be caused by a third factor.'}
]);
X.long(1,[
['Define scientific research. Explain its characteristics and the criteria of good research.',`<ol><li><b>Open</b> with the meaning of research and Kerlinger's definition.</li><li><b>Unpack</b> systematic, controlled, empirical, critical.</li><li><b>Characteristics:</b> list all nine, with a line on the big ones (problem-solving, empirical, replicable, theory-building).</li><li><b>Objectives:</b> the four, each tied to its research type.</li><li><b>Criteria:</b> the seven, ending with "systematic, logical, empirical, replicable".</li><li><b>Close:</b> goals of science: describe, explain, predict, control.</li></ol>`],
['What is a variable? Describe the types of variables with examples.',`<ol><li>Define concept → construct → variable, with operational definition.</li><li>IV (Type E, Type S; task, environmental, subject) and DV.</li><li>Control variables: subject, situational, sequence relevant.</li><li>Moderator and intervening, with the lecture-method and frustration examples.</li><li>Active vs attribute; qualitative vs quantitative; continuous vs discrete.</li><li>Finish with one study in which you label every variable.</li></ol>`],
['Explain the scientific method: its assumptions, characteristics and steps.',`<ol><li>Definition of the scientific method.</li><li>Four basic assumptions of science.</li><li>Characteristics: objective, repeatable, testable hypotheses, theory linkage.</li><li>Induction and deduction.</li><li>Six steps, run through one example.</li><li>Link to causation and Mill's canons in two lines.</li></ol>`],
['Classify research by intent and by method.',`<ol><li>State the two bases of classification.</li><li><b>Intent:</b> pure, applied, action (comparison table), then exploratory, descriptive, diagnostic, evaluative.</li><li><b>Method:</b> experimental (lab, field) vs non-experimental (field study, ex post facto, survey, content analysis, case study, ethnography), plus analytical and historical.</li><li>One strength and one weakness for each major method.</li><li>Close with quantitative vs qualitative.</li></ol>`],
['Compare laboratory experiments, field experiments and ex post facto research.',`<ol><li>Define each.</li><li>Table: manipulation of IV, control, randomisation, setting, internal validity, external validity.</li><li>Strengths and weaknesses of lab experiments (four each).</li><li>Why ex post facto conclusions are weaker.</li><li>Conclude: choice depends on whether the IV can be manipulated ethically and practically.</li></ol>`],
['Discuss the ethical issues in research with human and animal participants.',`<ol><li>Define ethics; name the APA codes (1982, 1992).</li><li>Seven issues: stress and harm, deception and alternatives, informed consent, debriefing, privacy and confidentiality, special populations, experimenter's obligation.</li><li>Principles for human participants: planning, approval, consent, limits on inducement and deception, debriefing.</li><li>Animal research: humane treatment, expert supervision, training, minimising pain, anaesthesia, humane termination.</li><li>Close: ethics protects participants and the credibility of science.</li></ol>`]
]);

/* ================= UNIT 2 ================= */
X.more(2,0,`
<h4>Topic vs problem</h4>
<p>"Stress among students" is a topic. "Is academic workload related to stress among first-year students?" is a problem: it names variables and asks about their relationship.</p>
<h4>Good and bad statements</h4>
<table><tr><th>Statement</th><th>Verdict</th></tr>
<tr><td>"Does anxiety affect performance?"</td><td>Too general. Which anxiety, which performance, in whom?</td></tr>
<tr><td>"Is test anxiety related to mathematics scores among Class 10 students?"</td><td>Good: two variables, a population, testable.</td></tr>
<tr><td>"Is democracy good for education?"</td><td>Value judgement, not testable.</td></tr>
<tr><td>"How many students in College X scored above 60?"</td><td>Just counting: a descriptive problem with no relationship.</td></tr></table>
<h4>Why defining the problem matters</h4>
<p>A problem clearly stated is half solved. The statement decides what data to collect, which design to use and how to analyse. A fuzzy problem leaks into every later step.</p>`);

X.more(2,1,`
<h4>Kothari's cautions when selecting a problem</h4>
<ul><li>Avoid subjects that are overdone.</li><li>Avoid controversial subjects if you are an average researcher.</li><li>Avoid problems that are too narrow or too vague.</li><li>Choose something familiar and feasible, with sources within reach.</li><li>Consider your training, the costs and the time.</li><li>Do a preliminary study first.</li></ul>
<h4>Kothari's technique for defining a problem</h4>
<ol><li>State the problem in a general way</li><li>Understand the nature of the problem (discuss with people who raised it)</li><li>Survey the available literature</li><li>Develop ideas through discussion (an experience survey)</li><li>Rephrase it into a working proposition</li></ol>
<p>Also define technical terms, state the assumptions, give the criteria for selecting the problem, and note the time period and the data sources.</p>
<h4>Worked example of narrowing</h4>
<p>Broad field: <i>mental health</i> → sub-area: <i>student mental health</i> → narrower: <i>exam anxiety</i> → question: <i>Does a 4-week relaxation programme reduce exam anxiety in undergraduates?</i> → objective: <i>to examine the effect of relaxation training on exam anxiety scores</i>.</p>`);

X.more(2,2,`
<h4>How to do a review, step by step</h4>
<ol><li><b>Search:</b> start with review articles and abstracts, then follow their reference lists backwards.</li><li><b>Read and record:</b> for each source note the problem, sample, method, findings and limitations on an index card.</li><li><b>Organise:</b> group studies by theme or variable, not one paragraph per author.</li><li><b>Write:</b> introduce the area, discuss each theme, point out agreements, contradictions and gaps, and end with how your study follows from them.</li></ol>
<h4>Primary vs secondary sources</h4>
<p><b>Primary:</b> the original report by the person who did the study (a journal article). <b>Secondary:</b> someone else's summary (a textbook, a review). Prefer primary sources; secondary ones may distort.</p>
<h4>Which review type when?</h4>
<ul><li>Opening a thesis or article → <b>context</b> review</li><li>Showing how an idea developed → <b>historical</b></li><li>Summing up what is known → <b>integrative</b></li><li>Judging the quality of past methods → <b>methodological</b></li><li>Comparing explanations → <b>theoretical</b></li></ul>
<h4>Common mistakes</h4>
<ul><li>Listing studies without linking them</li><li>Leaning on secondary sources</li><li>Leaving out studies that disagree with you</li><li>Not connecting the review to your own problem and hypothesis</li></ul>`);

X.more(2,3,`
<h4>Why a hypothesis matters</h4>
<ul><li>Gives the study direction and stops aimless data collection</li><li>Tells you which facts are relevant</li><li>Links theory to observation</li><li>Provides the framework for drawing conclusions</li></ul>
<h4>Kothari's version of a good hypothesis</h4>
<p>Clear and precise · capable of being tested · states a relationship between variables · limited in scope and specific · in simple terms · consistent with most known facts · testable within a reasonable time · explains the facts that gave rise to it.</p>
<h4>From problem to hypothesis</h4>
<table><tr><th>Problem</th><th>Hypothesis</th></tr>
<tr><td>Does practice improve typing speed?</td><td>If practice increases, then typing speed increases.</td></tr>
<tr><td>Is noise related to errors in proofreading?</td><td>Participants working in noise make more proofreading errors than those working in quiet.</td></tr></table>`);

X.more(2,4,`
<h4>Sources of hypotheses (Goode & Hatt)</h4>
<ol><li><b>General culture</b> in which the science develops</li><li><b>Scientific theory</b>: deductions from existing theory</li><li><b>Analogies</b> with other fields</li><li><b>Personal experience</b> of the researcher</li></ol>
<h4>Directional vs non-directional</h4>
<p><b>Directional:</b> states which way the difference goes ("Group A scores higher than Group B"). Tested with a <b>one-tailed</b> test. <b>Non-directional:</b> says only that a difference exists. Tested with a <b>two-tailed</b> test.</p>
<h4>Testing a hypothesis (Kothari)</h4>
<ol><li>State H₀ and H₁</li><li>Choose the level of significance (usually .05 or .01)</li><li>Decide the test and its sampling distribution</li><li>Draw the sample and compute the statistic</li><li>Find the probability of that result if H₀ were true</li><li>Compare with the significance level; reject or retain H₀</li></ol>
<table><tr><th></th><th>H₀ is true</th><th>H₀ is false</th></tr>
<tr><td>Reject H₀</td><td><b>Type I error</b> (α)</td><td>Correct</td></tr>
<tr><td>Retain H₀</td><td>Correct</td><td><b>Type II error</b> (β)</td></tr></table>
<p>Type I = false alarm. Type II = a miss. Lowering one tends to raise the other for a fixed sample size.</p>`);

X.more(2,5,`
<h4>Census vs sample</h4>
<p>A <b>census</b> covers every element of the population. It is accurate in theory but costs time, money and effort, and is impossible for infinite populations. A <b>sample</b> studies a part and generalises.</p>
<h4>Why sample? (advantages)</h4>
<ul><li><b>Economy:</b> less money and effort</li><li><b>Speed:</b> results arrive sooner</li><li><b>Accuracy:</b> a smaller volume of work can be supervised better</li><li><b>Scope:</b> more detailed information from each unit</li><li>The only option when testing destroys the unit or the population is infinite</li></ul>
<h4>What decides sample size</h4>
<ul><li>How varied the population is (more varied → larger sample)</li><li>How precise the estimate must be</li><li>The sampling method used</li><li>Number of subgroups to be analysed</li><li>Money, time and staff available</li></ul>
<h4>Aims in selecting a sample (AK Singh)</h4>
<p>Get maximum precision for a given sample size, and avoid bias in selection.</p>`);

X.more(2,6,`
<h4>Advantages and limits of each method</h4>
<table><tr><th>Method</th><th>Advantages</th><th>Limits</th></tr>
<tr><td><b>Simple random</b></td><td>Easiest to understand; basis of all other random methods; sampling error can be calculated; no classification errors</td><td>Needs a full list; impractical for large, scattered populations; may miss small subgroups</td></tr>
<tr><td><b>Proportionate stratified</b></td><td>More precise and representative; convenient to administer by stratum</td><td>Needs prior knowledge of strata; risk of putting an element in the wrong stratum</td></tr>
<tr><td><b>Disproportionate stratified</b></td><td>Less time-consuming; lets you give weight to small but important strata</td><td>Some strata over- or under-represented; assumes you know the population composition</td></tr>
<tr><td><b>Area / cluster</b></td><td>Easy for large geographical areas; cheap; no full list needed; used for opinion polls and large surveys</td><td>High sampling error; clusters may not be equal or independent</td></tr>
<tr><td><b>Quota</b></td><td>Quick, cheap, convenient, keeps the strata ratio</td><td>No random selection; classification error; interviewer picks who gets in</td></tr>
<tr><td><b>Purposive</b></td><td>Convenient, cheap, guarantees relevant cases are included</td><td>Depends on the researcher's judgement; inferential statistics not strictly justified</td></tr>
<tr><td><b>Accidental</b></td><td>Most convenient; saves time and money</td><td>Nothing can be generalised with confidence; bias; high sampling error</td></tr>
<tr><td><b>Snowball</b></td><td>Reaches hidden groups; reveals communication patterns</td><td>Cumbersome when N is large; no probability statistics</td></tr>
<tr><td><b>Systematic</b></td><td>Quick, easy to check, simpler than random numbers</td><td>Biased if the list has a hidden cycle; not every combination can be drawn</td></tr></table>
<h4>Probability vs non-probability</h4>
<table><tr><th></th><th>Probability</th><th>Non-probability</th></tr>
<tr><td>Chance of selection</td><td>Known for every element</td><td>Unknown</td></tr>
<tr><td>Representativeness</td><td>High</td><td>Doubtful</td></tr>
<tr><td>Sampling error</td><td>Can be estimated</td><td>Cannot be estimated</td></tr>
<tr><td>Cost and effort</td><td>Higher</td><td>Lower</td></tr>
<tr><td>Best for</td><td>Generalising to the population</td><td>Exploration, pilot work, hard-to-reach groups</td></tr></table>`);

X.more(2,7,`
<h4>Sampling vs non-sampling errors</h4>
<table><tr><th></th><th>Sampling error</th><th>Non-sampling error</th></tr>
<tr><td>Source</td><td>Studying a part instead of the whole</td><td>Faulty tools, wrong answers, recording and coding mistakes, non-response</td></tr>
<tr><td>In a census?</td><td>Absent</td><td>Still present</td></tr>
<tr><td>Larger sample</td><td>Reduces it</td><td>May increase it (more work to supervise)</td></tr>
<tr><td>Measured by</td><td>Standard error</td><td>Hard to measure</td></tr></table>
<h4>Standard error of the mean</h4>
<p class="mono">SE = σ / √n</p>
<p>If σ = 12 and n = 36, SE = 12 / 6 = 2. With n = 144, SE = 12 / 12 = 1. Four times the sample halves the error.</p>
<h4>How to reduce error</h4>
<ul><li>Increase sample size</li><li>Use stratification when the population is varied</li><li>Use a complete, up-to-date sampling frame</li><li>Pre-test the tools and train the investigators</li><li>Follow up non-respondents</li></ul>`);

X.ins(2,8,{k:'b1',t:'Observation and interview in depth',s:'Kothari ch. 6',h:`
<h4>Observation</h4>
<p>Observation becomes scientific when it <b>serves a formulated research purpose, is systematically planned and recorded, and is checked for validity and reliability</b>. The investigator observes directly instead of asking.</p>
<table><tr><th>Advantages</th><th>Limitations</th></tr>
<tr><td>Subjective bias is removed if done accurately</td><td>Expensive</td></tr>
<tr><td>Records what is happening now, not past behaviour or intentions</td><td>Information is limited</td></tr>
<tr><td>Does not depend on respondents' willingness; works for those who cannot report verbally</td><td>Unforeseen factors interfere; some people are not accessible</td></tr></table>
<table><tr><th>Type</th><th>Meaning</th></tr>
<tr><td><b>Structured</b></td><td>Units, recording style and conditions defined in advance. Suits descriptive studies.</td></tr>
<tr><td><b>Unstructured</b></td><td>No such advance plan. Suits exploratory studies.</td></tr>
<tr><td><b>Participant</b></td><td>Observer joins the group. Records natural behaviour and can verify statements, but may lose objectivity.</td></tr>
<tr><td><b>Non-participant</b></td><td>Observer stays detached.</td></tr>
<tr><td><b>Disguised</b></td><td>The group does not know it is being observed.</td></tr>
<tr><td><b>Uncontrolled</b></td><td>In the natural setting, to get a spontaneous picture.</td></tr>
<tr><td><b>Controlled</b></td><td>Follows a pre-arranged plan, often with instruments, often in a laboratory.</td></tr></table>
<h4>Personal interview</h4>
<p><b>Structured:</b> fixed questions, standard recording. <b>Unstructured:</b> flexible, the interviewer may add or omit questions. Special forms: <b>focused</b> (on a given experience), <b>clinical</b> (underlying feelings, life history), <b>non-directive</b> (interviewer only encourages the respondent to talk).</p>
<table><tr><th>Merits</th><th>Weaknesses</th></tr>
<tr><td>More information, in greater depth</td><td>Very expensive for large, spread-out samples</td></tr>
<tr><td>Interviewer can overcome resistance</td><td>Interviewer and respondent bias</td></tr>
<tr><td>Flexible: questions can be restructured</td><td>Busy or high-status people are hard to reach</td></tr>
<tr><td>Non-response is low; the right person answers</td><td>Time-consuming</td></tr>
<tr><td>Language can be adjusted to the respondent</td><td>Interviewer's presence may over-stimulate answers</td></tr>
<tr><td>Supplementary information can be gathered</td><td>Selecting, training and supervising staff is complex; needs rapport</td></tr></table>
<h4>Telephone interview</h4>
<p><b>Merits:</b> flexible, fast, cheaper than personal interviews, easy callbacks, higher response than mail, no field staff. <b>Demerits:</b> little time for considered answers, limited to people with phones, unsuitable for long or intensive surveys, questions must be short.</p>
<h4>Guidelines for successful interviewing</h4>
<ol><li>Plan in advance and know the problem fully</li><li>Be friendly and informal</li><li>Build rapport</li><li>Listen with understanding, respect and curiosity</li><li>Keep it free-flowing, with well-phrased questions</li><li>In big enquiries, select and train interviewers properly</li></ol>`});

X.ins(2,'b1',{k:'b2',t:'Questionnaire and schedule in depth',s:'Kothari ch. 6',h:`
<h4>Questionnaire</h4>
<table><tr><th>Merits</th><th>Demerits</th></tr>
<tr><td>Low cost even over a wide area</td><td>Low rate of return</td></tr>
<tr><td>Free from interviewer bias</td><td>Only for educated, cooperative respondents</td></tr>
<tr><td>Respondents have time to think</td><td>Control is lost once it is sent</td></tr>
<tr><td>Reaches people who are hard to approach</td><td>Inflexible; ambiguous or omitted replies</td></tr>
<tr><td>Large samples make results more dependable</td><td>Hard to know if respondents are representative; slowest method</td></tr></table>
<h4>Three things that make a good questionnaire</h4>
<ol><li><b>General form:</b> <i>structured</i> (definite, pre-set questions, often closed: yes/no or multiple choice) or <i>unstructured</i> (open, free response).</li>
<li><b>Question sequence:</b> clear and smooth; easy questions first. Avoid opening with questions that strain memory, are personal, or concern wealth.</li>
<li><b>Wording:</b> simple, unbiased, one idea per question. Closed questions are easy to analyse; open questions give fuller answers but are hard to tabulate.</li></ol>
<h4>Guidelines for constructing one</h4>
<ol><li>Keep the research problem in view</li><li>Choose the form of question to suit the information and the respondents</li><li>Prepare a rough draft</li><li>Re-examine and revise it</li><li>Run a <b>pilot study</b> to pre-test</li><li>Give simple, clear directions</li></ol>
<h4>Schedule</h4>
<p>A proforma of questions filled in by trained <b>enumerators</b> who meet the respondents. Used in large enquiries such as the census.</p>
<h4>Questionnaire vs schedule</h4>
<table><tr><th></th><th>Questionnaire</th><th>Schedule</th></tr>
<tr><td>Filled by</td><td>Respondent</td><td>Enumerator</td></tr>
<tr><td>Cost</td><td>Cheap</td><td>Expensive (enumerators, training)</td></tr>
<tr><td>Non-response</td><td>High</td><td>Low</td></tr>
<tr><td>Who answered</td><td>Not always clear</td><td>Known</td></tr>
<tr><td>Speed</td><td>Slow</td><td>On time</td></tr>
<tr><td>Personal contact</td><td>None</td><td>Direct</td></tr>
<tr><td>Respondents</td><td>Must be literate</td><td>Can be illiterate</td></tr>
<tr><td>Coverage</td><td>Wider distribution possible</td><td>Harder to send enumerators far</td></tr>
<tr><td>Accuracy</td><td>More incomplete or wrong answers</td><td>More complete and accurate</td></tr>
<tr><td>Success depends on</td><td>Quality of the questionnaire</td><td>Honesty and competence of enumerators</td></tr>
<tr><td>Observation alongside</td><td>Not possible</td><td>Possible</td></tr></table>`});

X.ins(2,'b2',{k:'b3',t:'Projective techniques, case study method and choosing a method',s:'Kothari ch. 6',h:`
<h4>Projective techniques</h4>
<p>Indirect methods: the respondent projects attitudes and feelings onto an ambiguous stimulus, often without knowing the purpose. Useful for motives people cannot or will not state.</p>
<table><tr><th>Technique</th><th>Task</th></tr>
<tr><td><b>Word association</b></td><td>Say the first word that comes to mind</td></tr>
<tr><td><b>Sentence completion</b></td><td>Finish an incomplete sentence</td></tr>
<tr><td><b>Story completion</b></td><td>Finish a story the researcher began</td></tr>
<tr><td><b>Verbal projection</b></td><td>Comment on why other people do something</td></tr>
<tr><td><b>TAT</b></td><td>Tell a story about each picture</td></tr>
<tr><td><b>Rosenzweig test</b></td><td>Fill in a cartoon character's reply to a frustrating situation</td></tr>
<tr><td><b>Rorschach</b></td><td>Say what ten inkblots look like</td></tr>
<tr><td><b>Holtzman Inkblot Test</b></td><td>A modified inkblot test with 45 cards, one response each</td></tr>
<tr><td><b>Tomkins-Horn</b></td><td>Arrange pictures in order; designed for groups</td></tr>
<tr><td><b>Play techniques</b></td><td>Act out a situation, for example with dolls</td></tr>
<tr><td><b>Sociometry</b></td><td>Map who chooses whom in a group</td></tr></table>
<p>Other methods Kothari lists: warranty cards, store audits, pantry audits, consumer panels, mechanical devices (eye camera, psychogalvanometer), depth interviews, content analysis.</p>
<h4>Case study method</h4>
<p>Intensive study of a single social unit, covering all its facets, to find the factors behind its behaviour pattern.</p>
<ul><li><b>Assumptions:</b> basic human nature is uniform; the unit's natural history can be studied; the unit can be studied comprehensively.</li>
<li><b>Phases:</b> recognise the status of the phenomenon → collect data and history → diagnose causal factors → apply remedial measures → follow up.</li>
<li><b>Advantages:</b> full understanding of the unit, a real record of personal experience, generates hypotheses, helps build questionnaires, allows several methods, studies social change.</li>
<li><b>Limitations:</b> cases are rarely comparable, false generalisation, time and cost, subject may write what the investigator wants, limited sphere, investigator's bias.</li></ul>
<h4>Choosing a method of data collection</h4>
<ol><li><b>Nature, scope and object of the enquiry</b> (the most important factor)</li><li><b>Availability of funds</b></li><li><b>Time factor</b></li><li><b>Precision required</b></li></ol>`});

X.more(2,9,`
<h4>Editing in detail</h4>
<p><b>Field editing:</b> the investigator completes abbreviated or illegible entries, ideally the same day, without guessing missing answers. <b>Central editing:</b> done in the office once all forms are in; obvious errors are corrected, unusable answers are struck out and marked "no answer".</p>
<h4>Coding rules</h4>
<p>Classes must be <b>exhaustive</b> (a class for every answer), <b>mutually exclusive</b> (an answer fits only one class) and <b>unidimensional</b> (each class defined by one concept). Decide codes while designing the questionnaire.</p>
<h4>Classification in detail</h4>
<ul><li><b>By attributes:</b> <i>simple</i> (one attribute, two classes) or <i>manifold</i> (two or more attributes).</li>
<li><b>By class intervals:</b> for numerical data. Typically 5 to 15 classes of equal size. Sturges' rule: <span class="mono">i = R / (1 + 3.3 log N)</span>.</li>
<li><b>Exclusive</b> intervals: 10-20, 20-30 (upper limit excluded). <b>Inclusive</b> intervals: 11-20, 21-30 (both limits included).</li>
<li>Frequencies are counted with <b>tally marks</b>, giving a <b>frequency distribution</b>.</li></ul>
<h4>Tabulation rules</h4>
<p>Clear title · every column and row labelled · units stated · source given below · totals shown · items arranged logically · abbreviations avoided.</p>
<h4>Worked example</h4>
<p>Scores: <span class="mono">4, 6, 6, 8, 11</span></p>
<table><tr><th>Measure</th><th>Working</th><th>Answer</th></tr>
<tr><td>Mean</td><td class="mono">35 / 5</td><td class="mono">7</td></tr>
<tr><td>Median</td><td>Middle score</td><td class="mono">6</td></tr>
<tr><td>Mode</td><td>Most frequent</td><td class="mono">6</td></tr>
<tr><td>Range</td><td class="mono">11 − 4</td><td class="mono">7</td></tr>
<tr><td>SD</td><td class="mono">√[(9+1+1+1+16)/5] = √5.6</td><td class="mono">2.37</td></tr></table>
<p>Mean (7) is above the median (6), so the distribution is <b>positively skewed</b>: a few high scores pull the mean up.</p>
<h4>Which average?</h4>
<p><b>Mean</b> for symmetrical data. <b>Median</b> when there are extreme scores. <b>Mode</b> for categories.</p>
<h4>Problems in processing (Kothari)</h4>
<p>"Don't know" responses (keep them as a separate category) and misuse of percentages (do not use on very small bases or average them carelessly).</p>`);

X.cards(2,[
['Topic vs research problem','A topic is an area. A problem names variables and asks about their relationship.'],
['Kothari\'s five steps for defining a problem','State generally, understand its nature, survey literature, develop ideas through discussion, rephrase into a working proposition'],
['Primary vs secondary source','Primary: the original research report. Secondary: someone else\'s account of it.'],
['Four sources of hypotheses (Goode & Hatt)','General culture, scientific theory, analogies, personal experience'],
['Type I vs Type II error','Type I: rejecting a true H₀. Type II: retaining a false H₀.'],
['Directional hypothesis and its test','States the direction of the difference. Tested with a one-tailed test.'],
['Census vs sample','Census: every element studied. Sample: a part studied and generalised.'],
['Standard error of the mean','SE = σ / √n. Four times the sample halves the error.'],
['When does observation become scientific?','When it serves a research purpose, is systematically planned and recorded, and is checked for validity and reliability.'],
['Participant vs non-participant observation','Participant: observer joins the group. Non-participant: observer stays detached.'],
['Three coding rules','Classes must be exhaustive, mutually exclusive and unidimensional.'],
['Exclusive vs inclusive class intervals','Exclusive: 10-20, 20-30 (upper limit left out). Inclusive: 11-20, 21-30.'],
['Four factors in choosing a data collection method','Nature of the enquiry, funds, time, precision required'],
['Projective technique','An indirect method where the respondent projects feelings onto an ambiguous stimulus (TAT, Rorschach).']
]);
X.quiz(2,[
{q:'Rejecting a null hypothesis that is actually true is a',o:['Type I error','Type II error','Sampling error','Systematic bias'],a:0,e:'Type I error is a false alarm; its probability is the significance level α.'},
{q:'"Boys score higher than girls on spatial tests" is a',o:['Null hypothesis','Non-directional hypothesis','Directional hypothesis','Descriptive problem'],a:2,e:'It states which group is higher, so it is directional and takes a one-tailed test.'},
{q:'σ = 10 and n = 25. The standard error of the mean is',o:['0.4','2','2.5','5'],a:1,e:'SE = σ/√n = 10/5 = 2.'},
{q:'Which error is still present in a full census?',o:['Sampling error','Non-sampling error','Standard error','None'],a:1,e:'A census has no sampling error, but recording, response and coding errors remain.'},
{q:'An observer who joins a gang to study it is doing',o:['Structured observation','Non-participant observation','Participant observation','Controlled observation'],a:2,e:'Sharing the life of the group is participant observation.'},
{q:'According to Kothari, the most important factor in choosing a data collection method is the',o:['Availability of funds','Time available','Nature, scope and object of the enquiry','Precision required'],a:2,e:'He calls it the most important factor; the other three follow.'},
{q:'Pre-testing a questionnaire on a small group before the main survey is a',o:['Census','Pilot study','Pantry audit','Panel'],a:1,e:'A pilot study reveals weaknesses in the questions.'},
{q:'For scores 2, 4, 4, 6, 14 the median is',o:['4','6','14','30'],a:0,e:'The middle of five ordered scores is the third one, 4.'},
{q:'The coding rule that every answer must fit one and only one class is',o:['Exhaustiveness','Mutual exclusivity','Unidimensionality','Tabulation'],a:1,e:'Mutually exclusive classes do not overlap.'},
{q:'In a TAT the respondent',o:['Completes sentences','Tells stories about pictures','Describes inkblots','Ranks friends'],a:1,e:'The Thematic Apperception Test uses pictures as prompts for stories.'},
{q:'A list with a hidden regular pattern is a particular danger for',o:['Simple random sampling','Systematic sampling','Quota sampling','Saturation sampling'],a:1,e:'If the interval matches the cycle in the list, the sample is biased.'},
{q:'Deductions from an existing theory are which source of hypotheses?',o:['General culture','Scientific theory','Analogy','Personal experience'],a:1,e:'Goode and Hatt list scientific theory as one of four sources.'}
]);
X.long(2,[
['What is a research problem? Explain its characteristics, sources and the steps in formulating it.',`<ol><li>Define: a question about the relationship between two or more variables.</li><li>Characteristics (six) and qualities of a good research question (five).</li><li>Solvable vs unsolvable problems.</li><li>Sources of problems; three ways a problem shows itself.</li><li>Considerations in selecting a problem.</li><li>Seven steps in formulation, with one narrowing example.</li><li>Close with GIGO.</li></ol>`],
['Discuss the purpose, types and sources of review of literature.',`<ol><li>Meaning of literature and of review.</li><li>Four main purposes plus general purposes.</li><li>Six types (historical, context, integrative, methodological, self-study, theoretical) with one line each.</li><li>Sources: journals, books, abstracts, indexes, internet, supervisors; primary vs secondary.</li><li>How to write it: search, record on index cards, organise by theme, write critically.</li></ol>`],
['Define hypothesis. Explain the characteristics and types of hypotheses.',`<ol><li>Definitions (McGuigan, Kerlinger).</li><li>Problem vs hypothesis.</li><li>Eight characteristics of a good hypothesis.</li><li>Formulating: difficulties, "If a then b", context of discovery and justification.</li><li>Types: universal, existential, causal, descriptive, simple, complex, research, alternative, null.</li><li>Sources and functions.</li><li>Close with Type I and Type II errors.</li></ol>`],
['What is sampling? Describe probability and non-probability sampling methods.',`<ol><li>Population, sample, parameter, statistic, sampling frame.</li><li>Three principles of sampling; why sample.</li><li>Probability: simple random, stratified (proportionate, disproportionate), area/cluster, each with one advantage and one limit.</li><li>Non-probability: quota, purposive, accidental, snowball, saturation, dense.</li><li>Mixed: systematic.</li><li>Comparison table.</li><li>Close with sampling error and how to reduce it.</li></ol>`],
['Describe the methods of collecting primary data.',`<ol><li>Primary vs secondary data.</li><li>Observation: meaning, types, merits, limits.</li><li>Interview: personal (structured, unstructured, focused, clinical, non-directive) and telephone; merits and limits.</li><li>Questionnaire: merits, demerits, features of a good one.</li><li>Schedule and how it differs from a questionnaire.</li><li>Other methods: projective techniques, audits, panels, content analysis.</li><li>Factors in choosing a method.</li></ol>`],
['Explain how raw data are processed and summarised.',`<ol><li>Editing (field, central).</li><li>Coding and its three rules.</li><li>Classification by attributes and by class intervals; frequency distribution.</li><li>Tabulation: simple and complex; rules of a good table.</li><li>Measures of central tendency, dispersion, skewness, relationship, with a small worked example.</li><li>Graphs.</li></ol>`]
]);
})();
