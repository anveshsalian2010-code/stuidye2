// Expansion pack, Units 3-5.
(function(){
const X=window.X;

/* ================= UNIT 3 ================= */
X.more(3,0,`
<h4>The questions a design answers (Kothari)</h4>
<p>What is the study about? Why is it being made? Where will it be carried out? What data are needed and where are they? What time period? What sample design? What data collection techniques? How will the data be analysed? In what style will the report be written?</p>
<h4>Why a design is needed</h4>
<p>Like a blueprint before building a house. It makes the research operations run smoothly, gives maximum information for minimum time, effort and money, and exposes flaws before any data are collected.</p>
<h4>Features of a good design</h4>
<p>Flexible · appropriate · efficient · economical · <b>minimises bias and maximises reliability</b> of the data · gives the smallest experimental error. Which design is "good" depends on the objective and nature of the problem, the means of getting information, the skills of the researcher, and the time and money available.</p>
<h4>Concepts you need for any design question</h4>
<table><tr><th>Concept</th><th>Meaning</th></tr>
<tr><td><b>Extraneous variable</b></td><td>An independent variable not related to the purpose of the study that may still affect the DV.</td></tr>
<tr><td><b>Control</b></td><td>Designing the study to minimise the effect of extraneous variables.</td></tr>
<tr><td><b>Confounded relationship</b></td><td>The DV is not free from the influence of an extraneous variable, so IV and extraneous variable cannot be separated.</td></tr>
<tr><td><b>Experimental and control groups</b></td><td>Experimental group gets the special condition; control group gets the usual condition.</td></tr>
<tr><td><b>Treatments</b></td><td>The different conditions the groups are put under.</td></tr>
<tr><td><b>Experimental unit</b></td><td>The pre-determined plot, block or person to which a treatment is applied.</td></tr></table>
<h4>Design by type of study</h4>
<ul><li><b>Exploratory:</b> flexible design, so different aspects of the problem can be considered.</li><li><b>Descriptive and diagnostic:</b> rigid design that guards against bias and maximises reliability.</li><li><b>Hypothesis-testing:</b> experimental design that reduces bias and allows causal inference.</li></ul>`);

X.more(3,1,`
<h4>Controlling extraneous variance: five techniques</h4>
<ol><li><b>Randomisation:</b> the best single technique. Chance equates groups on all variables, known and unknown.</li>
<li><b>Elimination:</b> remove the variable by choosing participants who are alike on it (only 20-year-olds). Cost: results generalise less.</li>
<li><b>Matching:</b> pair participants on a variable related to the DV. Weak if the matching variable is unrelated to the DV.</li>
<li><b>Building it in as an additional independent variable:</b> study it instead of fighting it (add gender as a factor).</li>
<li><b>Statistical control:</b> remove its effect during analysis (analysis of covariance).</li></ol>
<h4>Kothari's informal experimental designs</h4>
<table><tr><th>Design</th><th>What happens</th><th>Treatment effect</th></tr>
<tr><td><b>Before-and-after without control</b></td><td>One group measured before and after treatment</td><td>After minus before</td></tr>
<tr><td><b>After-only with control</b></td><td>Test and control groups measured only after</td><td>Test minus control</td></tr>
<tr><td><b>Before-and-after with control</b></td><td>Both groups measured before and after</td><td>Change in test minus change in control</td></tr></table>
<h4>Kothari's formal experimental designs</h4>
<table><tr><th>Design</th><th>Principles used</th><th>Idea</th></tr>
<tr><td><b>Completely randomised (C.R.)</b></td><td>Replication, randomisation</td><td>Subjects assigned to treatments entirely by chance. One-way ANOVA.</td></tr>
<tr><td><b>Randomised block (R.B.)</b></td><td>All three (adds local control)</td><td>Subjects first grouped into homogeneous blocks, then treatments assigned within each block. Two-way ANOVA.</td></tr>
<tr><td><b>Latin square (L.S.)</b></td><td>All three, two blocking factors</td><td>Each treatment appears once in every row and every column.</td></tr>
<tr><td><b>Factorial</b></td><td>All three</td><td>Two or more factors varied together. Simple (two factors) or complex (more).</td></tr></table>`);

X.more(3,2,`
<h4>Randomised-groups design</h4>
<p>Participants are randomly assigned to groups; each group gets one level of the IV. <b>Two groups</b> are compared with a <i>t</i> test. <b>More than two groups</b> need analysis of variance. Limit of the two-group version: it shows only whether two levels differ, not the shape of the relationship.</p>
<h4>Matched-groups design</h4>
<p>Also called the <b>randomised block design</b>. Participants are first matched on a variable that correlates with the DV, then members of each matched set are randomly assigned to conditions.</p>
<ul><li><b>Good:</b> groups are equal on the matching variable, so error variance falls.</li><li><b>Bad:</b> matching on several variables at once is hard, unmatched participants are lost, and the test has fewer degrees of freedom. If the matching variable is unrelated to the DV, the design is worse than simple randomisation.</li></ul>
<h4>Factorial design</h4>
<p>Two or more IVs are manipulated together and every level of one is combined with every level of the other. Different subgroups serve under each combination.</p>
<p><b>Example (2×2):</b> noise (present, absent) × illumination (bright, dim) on reading speed. Four groups. Three null hypotheses are tested:</p>
<ol><li>No difference between the noise conditions (main effect of A)</li><li>No difference between the illumination conditions (main effect of B)</li><li>No interaction between noise and illumination (A × B)</li></ol>
<p>An <b>interaction</b> means the effect of one IV depends on the level of the other: noise hurts reading only in dim light. Two variables give a first-order interaction; three give a second-order interaction.</p>
<p><b>Advantages:</b> studies several IVs and their interaction in one experiment, more efficient, results generalise more widely. <b>Disadvantages:</b> with many factors the number of groups explodes and higher-order interactions are hard to interpret.</p>
<p><b>Models:</b> fixed, random and mixed, depending on how the levels of the factors are chosen.</p>`);

X.more(3,3,`
<h4>Practice effects</h4>
<p>Changes caused by repeated testing itself: getting better through practice or worse through fatigue. They are confounded with the treatment unless balanced.</p>
<h4>Balancing techniques</h4>
<table><tr><th>Technique</th><th>How</th><th>Used in</th></tr>
<tr><td><b>Block randomisation</b></td><td>Each block contains every condition once in random order; many blocks are given</td><td>Complete design</td></tr>
<tr><td><b>ABBA counterbalancing</b></td><td>Conditions given in one order, then the reverse: A B B A</td><td>Complete design, few administrations</td></tr>
<tr><td><b>All possible orders</b></td><td>3 conditions give 6 orders (ABC, ACB, BAC, BCA, CAB, CBA); participants spread across them</td><td>Incomplete design</td></tr>
<tr><td><b>Latin square</b></td><td>Each condition appears once in each position</td><td>Incomplete design</td></tr></table>
<p>A 3×3 Latin square:</p>
<p class="mono">A B C<br>B C A<br>C A B</p>
<h4>When balancing does not help</h4>
<p><b>Differential carry-over:</b> the effect of A lingers differently depending on what follows it (a drug that has not worn off). Counterbalancing cannot fix this. Use a between-subjects design instead.</p>
<h4>Advantages and limits</h4>
<p><b>Advantages:</b> fewer participants, individual differences removed from error, more sensitive test. <b>Limits:</b> practice and carry-over effects, longer sessions, cannot be used when a condition has a permanent effect.</p>`);

X.more(3,4,`
<h4>Each design with an example</h4>
<ul><li><b>One-shot case study:</b> a class is taught by a new method and then tested. A high score proves nothing; there is no comparison.</li>
<li><b>One-group pretest-posttest:</b> test, teach, test again. The gain could be from the method, or from growing up, events outside class, or having seen the test before.</li>
<li><b>Static-group comparison:</b> Class A gets the method, Class B does not, both are tested after. The classes may have differed from the start.</li>
<li><b>Posttest-only control group:</b> students randomly split into two groups; one is taught by the method; both tested after.</li>
<li><b>Pretest-posttest control group:</b> the same, with both groups pretested. Gains are compared.</li>
<li><b>Solomon four-group:</b> two extra groups get no pretest, showing whether the pretest itself changed the outcome.</li></ul>
<h4>Threats to internal validity, defined</h4>
<table><tr><th>Threat</th><th>Meaning</th></tr>
<tr><td><b>History</b></td><td>Outside events between pretest and posttest</td></tr>
<tr><td><b>Maturation</b></td><td>Participants change naturally with time: older, tired, hungry</td></tr>
<tr><td><b>Testing</b></td><td>Taking the pretest affects posttest scores</td></tr>
<tr><td><b>Instrumentation</b></td><td>The measuring tool or the observers change</td></tr>
<tr><td><b>Statistical regression</b></td><td>Extreme scorers drift towards the mean on retest</td></tr>
<tr><td><b>Selection</b></td><td>Groups differed before the treatment</td></tr>
<tr><td><b>Experimental mortality</b></td><td>Participants drop out unevenly</td></tr>
<tr><td><b>Selection-maturation interaction</b></td><td>Groups mature at different rates</td></tr></table>
<h4>Threats to external validity</h4>
<ul><li>Reactive effect of testing: the pretest makes participants sensitive to the treatment</li><li>Interaction of selection and treatment: the effect holds only for the type of people sampled</li><li>Reactive effects of the experimental arrangement: people behave differently because they know they are in a study</li><li>Multiple-treatment interference: earlier treatments affect later ones</li></ul>
<h4>How the families compare</h4>
<table><tr><th></th><th>Pre-experimental</th><th>Quasi</th><th>True</th></tr>
<tr><td>Random assignment</td><td>No</td><td>No</td><td>Yes</td></tr>
<tr><td>Control or comparison</td><td>None or weak</td><td>Some</td><td>Yes</td></tr>
<tr><td>Internal validity</td><td>Poor</td><td>Moderate</td><td>High</td></tr></table>`);

X.more(3,5,`
<h4>Quasi designs with examples</h4>
<ul><li><b>Time-series:</b> monthly accident counts for a year, a new traffic law, then counts for another year. A sharp drop right after the law suggests an effect, unless something else happened at the same time (history).</li>
<li><b>Equivalent time-samples:</b> one class has music during study on some days and none on others, with output measured each time.</li>
<li><b>Nonequivalent control group:</b> two existing classes are pretested, one gets the programme, both are posttested. Without random assignment, selection remains a threat.</li>
<li><b>Counterbalanced:</b> intact groups each receive all treatments in rotated order, like a Latin square.</li>
<li><b>Separate-sample pretest-posttest:</b> one random sample is surveyed before a campaign, a different random sample after it. Avoids testing effects.</li></ul>
<h4>Developmental designs</h4>
<table><tr><th></th><th>Longitudinal</th><th>Cross-sectional</th><th>Cross-sequential</th></tr>
<tr><td>How</td><td>Same people followed over years</td><td>Different age groups compared at one time</td><td>Several age groups followed over time</td></tr>
<tr><td>Plus</td><td>Shows real change in individuals</td><td>Quick and cheap</td><td>Separates age effects from cohort effects</td></tr>
<tr><td>Minus</td><td>Slow, costly, dropouts</td><td>Cohort differences confounded with age</td><td>Complex and expensive</td></tr></table>
<h4>Ex post facto: strengths and weaknesses</h4>
<p><b>Why use it:</b> many variables in psychology and education cannot be manipulated (intelligence, home background, brain injury), or it would be unethical to do so.</p>
<p><b>Three weaknesses (Kerlinger):</b> the IV cannot be manipulated · participants cannot be randomised · interpretation is risky.</p>
<h4>True vs quasi vs ex post facto</h4>
<table><tr><th></th><th>True</th><th>Quasi</th><th>Ex post facto</th></tr>
<tr><td>IV manipulated</td><td>Yes</td><td>Yes, or quasi-IV</td><td>No, already occurred</td></tr>
<tr><td>Random assignment</td><td>Yes</td><td>No</td><td>No</td></tr>
<tr><td>Causal inference</td><td>Strong</td><td>Moderate</td><td>Weak</td></tr></table>`);

X.more(3,6,`
<h4>Getting the baseline right</h4>
<ul><li>A <b>stable</b> baseline has little variability and no trend. Only then can a change be credited to treatment.</li><li>If the baseline is already improving, an improvement during B proves little.</li><li>If it is highly variable, extend it or look for what is causing the swings.</li></ul>
<h4>Ways of collecting data</h4>
<table><tr><th>Measure</th><th>What is recorded</th></tr>
<tr><td><b>Frequency</b></td><td>How many times the behaviour occurs. The most popular measure.</td></tr>
<tr><td><b>Duration</b></td><td>How long the behaviour lasts</td></tr>
<tr><td><b>Interval recording</b> (time sampling)</td><td>The session is cut into intervals; note whether the behaviour occurred in each</td></tr>
<tr><td><b>Self-report</b></td><td>The person reports covert behaviour and experience</td></tr>
<tr><td><b>Response-specific</b></td><td>Indices particular to the response, such as intensity</td></tr></table>
<h4>Strengths (AK Singh)</h4>
<ol><li>A scientific study is possible with one participant, which suits clinical work</li><li>Tighter control over the experimental situation</li><li>Statistical tests are rarely needed; change is judged by visual inspection</li><li>Suits exploratory and descriptive work</li><li>Extraneous variables can be eliminated or held constant</li></ol>
<h4>Limitations</h4>
<ol><li><b>Generality:</b> one person may not represent others</li><li><b>Practical:</b> time-consuming</li><li><b>Order effects</b> across phases</li><li><b>Baseline problems:</b> unstable or trending baselines</li><li><b>Irreversible effects:</b> some behaviours do not return to baseline once changed</li></ol>
<h4>Single-subject vs large-N research</h4>
<table><tr><th></th><th>Large N</th><th>Single subject</th></tr>
<tr><td>Control</td><td>Randomisation, matching</td><td>Baseline; the person is their own control</td></tr>
<tr><td>Dependent variable</td><td>Usually measured once or a few times</td><td>Measured repeatedly</td></tr>
<tr><td>Monitoring</td><td>Little during the study</td><td>Continuous; the design can be adjusted</td></tr>
<tr><td>Analysis</td><td>Statistical tests</td><td>Visual inspection of graphs</td></tr>
<tr><td>External validity</td><td>From sampling</td><td>From replication across people</td></tr></table>`);

X.more(3,7,`
<h4>Worked example: A-B-A-B</h4>
<p>A child leaves his seat about 9 times a class (<b>A</b>). A token is given for staying seated and the count drops to 3 (<b>B</b>). Tokens stop and it climbs back to 8 (<b>A</b>). Tokens return and it falls to 2 (<b>B</b>). The behaviour tracked the treatment twice, so the token is the cause.</p>
<h4>Withdrawal vs reversal, strictly speaking</h4>
<p>In a <b>withdrawal</b> phase the treatment is simply taken away. In a strict <b>reversal</b> the treatment is switched to a different, incompatible behaviour. Many books, including AK Singh, use "reversal design" for A-B-A-B.</p>
<h4>Problems with withdrawal designs</h4>
<ul><li>A-B-A ends with the person off treatment, which is an ethical problem</li><li>Some effects do not reverse (a learned skill)</li><li>Withdrawing a treatment that works can cause harm</li><li>Carry-over from B into the second A blurs the picture</li><li>A change seen in B may be a <b>placebo effect</b></li></ul>
<h4>Multiple baseline examples</h4>
<ul><li><b>Across behaviours:</b> one child; praise is applied first to hand-raising, a week later to staying seated, then to finishing work.</li><li><b>Across subjects:</b> three children with the same problem; the programme starts for each in a different week.</li><li><b>Across settings:</b> one child; the programme starts in maths class, then language class, then the playground.</li></ul>
<p><b>Requirement:</b> the baselines must be independent. If treating one behaviour changes the others, the logic fails.</p>
<h4>Which design when</h4>
<table><tr><th>Situation</th><th>Design</th></tr>
<tr><td>Behaviour reverses and withdrawal is safe</td><td>A-B-A-B</td></tr>
<tr><td>Behaviour will not reverse, or withdrawal is unethical</td><td>Multiple baseline</td></tr>
<tr><td>Comparing two treatments quickly</td><td>Alternating treatments or A-B-A-C-A</td></tr></table>`);

X.cards(3,[
['Confounded relationship (Kothari)','The DV is not free from an extraneous variable, so its effect cannot be separated from the IV\'s.'],
['Five techniques for controlling extraneous variance','Randomisation, elimination, matching, adding it as an IV, statistical control'],
['Kothari\'s three informal designs','Before-and-after without control, after-only with control, before-and-after with control'],
['Kothari\'s four formal designs','Completely randomised, randomised block, Latin square, factorial'],
['Latin square design','Each treatment appears once in every row and every column; controls two extraneous factors.'],
['Interaction effect','The effect of one IV depends on the level of another IV.'],
['Matched-groups design: other name','Randomised block design'],
['Differential carry-over','An earlier condition affects later ones unevenly; counterbalancing cannot fix it.'],
['History vs maturation','History: outside events. Maturation: natural change within participants.'],
['Statistical regression','Extreme scorers move towards the mean on retesting.'],
['Longitudinal vs cross-sectional','Longitudinal: same people over time. Cross-sectional: different age groups at one time.'],
['Five ways to record single-subject data','Frequency, duration, interval recording, self-report, response-specific measures'],
['How results are judged in single-subject research','Mostly by visual inspection of graphs, not statistical tests.'],
['Requirement for a multiple-baseline design','The baselines must be independent of each other.']
]);
X.quiz(3,[
{q:'In Kothari\'s "before-and-after with control" design, the treatment effect is',o:['After minus before in the test group','Test minus control after treatment','Change in the test group minus change in the control group','The control group\'s posttest score'],a:2,e:'Both groups are measured twice, and the difference in change is the effect.'},
{q:'Which formal design uses two blocking factors arranged in rows and columns?',o:['Completely randomised','Randomised block','Latin square','Simple factorial'],a:2,e:'In a Latin square each treatment occurs once per row and once per column.'},
{q:'Noise lowers reading speed only when lighting is dim. This is',o:['A main effect of noise','A main effect of light','An interaction','Regression'],a:2,e:'The effect of one IV depends on the level of the other.'},
{q:'High scorers on a pretest score a little lower on retest with no treatment. This is',o:['Maturation','Statistical regression','History','Mortality'],a:1,e:'Extreme scores tend to move towards the mean.'},
{q:'A flood closes schools between pretest and posttest. The threat is',o:['History','Testing','Instrumentation','Selection'],a:0,e:'An outside event during the study is history.'},
{q:'Comparing 5-, 10- and 15-year-olds tested in the same month is a',o:['Longitudinal design','Cross-sectional design','Time-series design','Solomon design'],a:1,e:'Different age groups at one point in time.'},
{q:'ABBA is a technique of',o:['Matching','Counterbalancing','Random assignment','Stratification'],a:1,e:'It balances order effects in a within-subjects design.'},
{q:'A matched-groups design is weak when the matching variable is',o:['Highly correlated with the DV','Unrelated to the DV','Measured before the study','Used with random assignment'],a:1,e:'Matching helps only if the variable is related to the DV.'},
{q:'In single-subject research, counting how many times a behaviour occurs is',o:['Duration recording','Frequency measure','Interval recording','Self-report'],a:1,e:'Frequency is the most popular measure.'},
{q:'Praise is introduced for one child in week 2, a second child in week 4 and a third in week 6. This is multiple baseline across',o:['Behaviours','Subjects','Settings','Treatments'],a:1,e:'Same behaviour and setting, different people, staggered start.'},
{q:'A drawback of ending a study with an A-B-A design is that',o:['It has no baseline','The person finishes without the treatment','It needs three participants','It cannot be graphed'],a:1,e:'Ending on baseline raises an ethical concern, which A-B-A-B solves.'},
{q:'Which is NOT a feature of a good research design according to Kothari?',o:['Flexible','Economical','Maximises bias','Efficient'],a:2,e:'A good design minimises bias and maximises reliability.'}
]);
X.long(3,[
['Define research design. Discuss its purpose, criteria and principles.',`<ol><li>Definitions (plan and structure; Kothari's blueprint).</li><li>Two purposes: answer the research question, control variance.</li><li>MAXMINCON with the five control techniques.</li><li>Criteria: answers questions, controls extraneous variables, generalisability.</li><li>Fisher's principles: replication, randomisation, local control.</li><li>Features of a good design (Kothari).</li></ol>`],
['Distinguish between between-subjects and within-subjects designs.',`<ol><li>Define each.</li><li>Between: randomised groups, matched groups, factorial, with one advantage and limit each.</li><li>Within: complete and incomplete; practice effects.</li><li>Balancing: block randomisation, ABBA, all possible orders, Latin square.</li><li>Comparison table.</li><li>When to choose which.</li></ol>`],
['Explain Campbell and Stanley\'s classification of experimental designs.',`<ol><li>Notation: R, O, X.</li><li>Pre-experimental: three designs with notation and weakness.</li><li>True experimental: three designs with notation and strength.</li><li>Quasi-experimental: time-series, equivalent time-samples, nonequivalent control group.</li><li>Ex post facto: correlational and criterion-group.</li><li>Threats to internal and external validity.</li><li>Comparison table of the families.</li></ol>`],
['What is a factorial design? Explain with an example.',`<ol><li>Definition.</li><li>A 2×2 layout drawn as a table (noise × illumination).</li><li>Main effects and interaction; the three null hypotheses.</li><li>First-order and higher-order interactions.</li><li>Advantages and disadvantages.</li><li>Fixed, random and mixed models.</li></ol>`],
['Describe quasi-experimental and ex post facto designs.',`<ol><li>Why true experiments are sometimes impossible.</li><li>Quasi: meaning as a compromise design; main types with notation and examples.</li><li>Developmental designs.</li><li>Ex post facto: meaning; correlational and criterion-group designs.</li><li>Weaknesses: no manipulation, no randomisation, risky interpretation.</li><li>Comparison table: true vs quasi vs ex post facto.</li></ol>`],
['Describe single-subject experimental designs.',`<ol><li>Meaning of single-subject research.</li><li>General procedures: repeated measurement, baseline, one variable at a time, phase length, carry-over.</li><li>Withdrawal designs: A-B, A-B-A, A-B-A-B (draw the graph).</li><li>Reversal design.</li><li>Multiple baseline across behaviours, subjects, settings (draw the staggered graph).</li><li>Data collection measures.</li><li>Strengths, limitations, comparison with large N.</li></ol>`]
]);

/* ================= UNIT 4 ================= */
X.more(4,0,`
<h4>The two kinds of data</h4>
<table><tr><th></th><th>Quantitative</th><th>Qualitative</th></tr>
<tr><td>Form</td><td>Closed-ended: scores, ratings, counts</td><td>Open-ended: words, images</td></tr>
<tr><td>Collected by</td><td>Instruments, checklists, records</td><td>Interviews, observations, documents, audiovisual material</td></tr>
<tr><td>Gives you</td><td>Trends, relationships, generalisation</td><td>Detail, context, participants' own voice</td></tr>
<tr><td>Weak at</td><td>Explaining why; hearing individuals</td><td>Generalising; depends on the researcher's interpretation</td></tr></table>
<p>Mixed methods rests on the idea that <mark>each offsets the other's weakness</mark>.</p>
<h4>Each research problem with an example</h4>
<table><tr><th>Need</th><th>Example</th></tr>
<tr><td>More complete, corroborated results</td><td>Survey scores and interviews on hostel stress, compared</td></tr>
<tr><td>Explain initial results</td><td>A survey finds low counselling use; interviews ask why</td></tr>
<tr><td>Explore before measuring</td><td>No scale exists for "exam pressure from parents", so interview first</td></tr>
<tr><td>Enhance an experiment</td><td>Interview participants during a therapy trial about their experience</td></tr>
<tr><td>Describe and compare cases</td><td>Three colleges studied in depth with both kinds of data</td></tr>
<tr><td>Involve participants</td><td>Students help design a study on campus safety</td></tr>
<tr><td>Develop and evaluate a programme</td><td>A peer-mentoring scheme built and assessed over stages</td></tr></table>
<h4>What the researcher needs</h4>
<ul><li>Skills in quantitative research, qualitative research and mixing them</li><li>Time for two strands; qualitative work is slow</li><li>Resources, often a team</li><li>Readiness to explain the approach to supervisors and reviewers who do not know it</li></ul>
<h4>When not to use it</h4>
<p>If one kind of data answers the question fully, mixing adds cost without adding understanding.</p>`);

X.more(4,1,`
<h4>The four worldviews across five elements</h4>
<table><tr><th>Element</th><th>Postpositivism</th><th>Constructivism</th><th>Transformative</th><th>Pragmatism</th></tr>
<tr><td><b>Ontology</b> (reality)</td><td>Singular reality</td><td>Multiple realities</td><td>Multifaceted, shaped by social and cultural position</td><td>Singular and multiple</td></tr>
<tr><td><b>Epistemology</b> (researcher and researched)</td><td>Distance and impartiality</td><td>Closeness</td><td>Collaboration</td><td>Practicality: what works for the question</td></tr>
<tr><td><b>Axiology</b> (values)</td><td>Unbiased; checks to remove bias</td><td>Biased; biases are discussed openly</td><td>Based on human rights and social justice</td><td>Multiple stances</td></tr>
<tr><td><b>Methodology</b> (process)</td><td>Deductive: test a theory</td><td>Inductive: build up from participants' views</td><td>Participatory: participants involved at every stage</td><td>Combining both</td></tr>
<tr><td><b>Rhetoric</b> (language)</td><td>Formal</td><td>Informal</td><td>Advocacy, change-oriented</td><td>Formal or informal</td></tr></table>
<h4>Worldview and the core designs</h4>
<ul><li><b>Convergent:</b> pragmatism works as an umbrella for the whole study.</li><li><b>Explanatory sequential:</b> starts postpositivist (quant phase), shifts to constructivist (qual phase).</li><li><b>Exploratory sequential:</b> starts constructivist, shifts to postpositivist.</li></ul>
<h4>Theory in mixed methods</h4>
<p>A <b>social science theory</b> (for example a theory of motivation) can frame the study and predict what will be found. A <b>participatory or social-justice theory</b> (feminist, disability, racial theory) frames the study around the needs of a marginalised group.</p>
<h4>Five stages in the history of the field</h4>
<table><tr><th>Stage</th><th>When</th><th>What happened</th></tr>
<tr><td><b>Formative</b></td><td>1950s to 1980s</td><td>First interest in using more than one method (Campbell & Fiske, 1959); triangulation (Jick, 1979)</td></tr>
<tr><td><b>Paradigm debate</b></td><td>1970s to 1980s</td><td>"Purists" argued the two paradigms could not be mixed</td></tr>
<tr><td><b>Early procedural development</b></td><td>Late 1980s to 2000</td><td>Attention moved to methods: purposes for mixing, notation, first design types</td></tr>
<tr><td><b>Expanded procedural development</b></td><td>2000 to 2009</td><td>Handbooks, a dedicated journal, mixed methods recognised as its own approach</td></tr>
<tr><td><b>Reflection and refinement</b></td><td>2010 onward</td><td>Critiques, refinements and spread across disciplines and countries</td></tr></table>`);

X.more(4,2,`
<h4>Four decisions behind every design</h4>
<ol><li><b>Timing:</b> are the strands concurrent or sequential?</li><li><b>Priority:</b> which strand carries more weight?</li><li><b>Integration:</b> where and how are they mixed?</li><li><b>Framework:</b> is the design placed inside a theory or larger approach?</li></ol>
<p>The next three topics take each core design in full.</p>`);

X.ins(4,2,{k:'d1',t:'Convergent design in depth',s:'Creswell ch. 3',h:`
<p><b>Intent:</b> bring together the results of quantitative and qualitative analysis to compare or combine them, for a more complete understanding or to validate one set with the other. It is the design first discussed in the literature (as triangulation).</p>
<h4>Choose it when</h4>
<ul><li>Time in the field is limited and both kinds of data must be collected in one visit</li><li>Both kinds of information are needed from every participant</li><li>The researcher, or the team, has skills in both methods</li></ul>
<h4>Four steps</h4>
<ol><li>Design both strands and collect both sets of data, at roughly the same time and independently</li><li>Analyse each set separately with its own techniques</li><li><b>Merge</b> the two sets of results: compare them directly, or transform one type and analyse again</li><li>Interpret: how far do they converge, diverge, relate or combine?</li></ol>
<h4>Strengths</h4>
<ul><li>Makes intuitive sense; a common first design</li><li>Efficient: one phase of data collection</li><li>Each data type is handled with its traditional techniques, which suits team research</li><li>Gives voice to participants and reports statistical trends together</li></ul>
<h4>Challenges</h4>
<ul><li><b>Different sample sizes</b> for the two strands</li><li><b>Merging text with numbers</b> in a meaningful way; design both strands around the same concepts</li><li><b>Explaining divergence</b> when the results disagree; may need more data</li></ul>
<h4>Variants</h4>
<table><tr><th>Variant</th><th>What is different</th></tr>
<tr><td><b>Parallel-databases</b></td><td>Two strands kept independent and brought together only in the interpretation</td></tr>
<tr><td><b>Data-transformation</b></td><td>Qualitative findings are quantified (for example counted) and then combined with the quantitative data</td></tr>
<tr><td><b>Questionnaire</b></td><td>Open-ended and closed-ended questions on one questionnaire</td></tr>
<tr><td><b>Fully integrated</b></td><td>The strands interact throughout the study instead of staying separate</td></tr></table>`});

X.ins(4,'d1',{k:'d2',t:'Explanatory sequential design in depth',s:'Creswell ch. 3',h:`
<p><b>Intent:</b> use a qualitative strand to explain initial quantitative results: why they came out as they did, including significant, non-significant and surprising results.</p>
<h4>Choose it when</h4>
<ul><li>The researcher and the problem are quantitatively oriented</li><li>The important variables are known and instruments exist</li><li>Participants can be reached a second time</li><li>There is time for two phases</li><li>Resources are limited, so only one type of data is handled at a time</li></ul>
<h4>Four steps</h4>
<ol><li>Design and carry out the <b>quantitative</b> strand</li><li><b>Connect:</b> decide which results need explaining and use them to pick participants and write the qualitative questions</li><li>Design and carry out the <b>qualitative</b> strand</li><li>Interpret how the qualitative results explain the quantitative ones</li></ol>
<h4>Strengths</h4>
<ul><li>Appeals to quantitative researchers</li><li>Straightforward: one type of data at a time, manageable for a single researcher</li><li>The report is easy to write: quantitative section, then qualitative</li><li>Lends itself to emergent approaches</li></ul>
<h4>Challenges</h4>
<ul><li>Needs a long time; participants must stay accessible</li><li>The qualitative phase cannot be fully specified in advance, which complicates ethics approval</li><li>Deciding <b>which results</b> to follow up</li><li>Deciding <b>who</b> can best explain them</li></ul>
<h4>Variants</h4>
<table><tr><th>Variant</th><th>Priority</th><th>Use</th></tr>
<tr><td><b>Follow-up explanations</b></td><td>Quantitative</td><td>The common form: qualitative data explain the numbers</td></tr>
<tr><td><b>Case-selection</b></td><td>Qualitative</td><td>Quantitative results are used only to pick the best participants or cases for the main qualitative study</td></tr></table>`});

X.ins(4,'d2',{k:'d3',t:'Exploratory sequential design in depth',s:'Creswell ch. 3',h:`
<p><b>Intent:</b> explore qualitatively first, because measures, variables or a guiding theory are missing, then develop something from the findings and test it quantitatively. It has <b>three phases</b>: qualitative, development, quantitative.</p>
<h4>Choose it when</h4>
<ul><li>The researcher and the problem are qualitatively oriented</li><li>A product is needed that is relevant and culturally sensitive: an instrument, intervention materials, a digital tool</li><li>There is time for three phases</li><li>The researcher wants to know whether findings from a few people generalise</li></ul>
<h4>Four steps</h4>
<ol><li>Design and carry out the <b>qualitative</b> strand</li><li><b>Build:</b> use the themes, codes and quotes to develop the new feature</li><li>Design and carry out the <b>quantitative</b> strand to test the feature with a new sample</li><li>Interpret how the quantitative results generalise or extend the qualitative findings</li></ol>
<h4>Strengths</h4>
<ul><li>Separate phases make it easy to describe, carry out and report</li><li>The quantitative part makes qualitative work more acceptable to quantitative audiences</li><li>Useful when the need for a second phase emerges from the first</li><li>Produces a new instrument or other product</li></ul>
<h4>Challenges</h4>
<ul><li>Long time, including the development phase</li><li>The quantitative phase can only be tentatively specified in advance</li><li>Two different samples: small and purposeful first, large and different second</li><li>Deciding which qualitative results to build on</li><li>Needs skill in instrument development</li></ul>
<h4>Variants</h4>
<p><b>New variable development</b> · <b>survey development</b> · <b>intervention development</b> · <b>digital tool development</b>. They differ in what is built in the middle phase.</p>
<div class="tip">Explanatory vs exploratory, the trap question: explan<b>a</b>tory starts with numbers and <b>a</b>sks why. Explor<b>a</b>tory starts with words because there is nothing to measure yet.</div>`});

X.more(4,3,`
<h4>Each complex design in more detail</h4>
<table><tr><th>Design</th><th>Where the qualitative data go</th><th>Main challenge</th></tr>
<tr><td><b>Experimental</b></td><td><b>Before:</b> to shape the intervention or recruitment. <b>During:</b> to follow the process and participants' experience. <b>After:</b> to explain the outcomes.</td><td>Qualitative data collected during the trial may itself act as a treatment and bias the outcome</td></tr>
<tr><td><b>Case study</b></td><td>Both types are collected and merged to describe each case; cases are then compared</td><td>Choosing and bounding the cases</td></tr>
<tr><td><b>Participatory-social justice</b></td><td>A core design runs inside a participatory framework; community members help at each step</td><td>Building trust; time; keeping the change goal central</td></tr>
<tr><td><b>Evaluation</b></td><td>Stages such as needs assessment, theory development, instrument building, testing and follow-up each use a core design</td><td>Length and resources; linking all the stages</td></tr></table>
<p>Why call them complex? They combine a core design with another methodology, and often need several phases, a team and more funding.</p>`);

X.more(4,4,`
<h4>Quantitative vs qualitative data collection</h4>
<table><tr><th>Step</th><th>Quantitative strand</th><th>Qualitative strand</th></tr>
<tr><td><b>Sampling</b></td><td>Probabilistic where possible (random, stratified, cluster); large enough for statistical tests</td><td><b>Purposeful</b>: people who can best inform the question (maximal variation, typical, extreme case, homogeneous); small numbers</td></tr>
<tr><td><b>Permissions</b></td><td colspan="2">Ethics board approval, site permissions, informed consent, for both strands</td></tr>
<tr><td><b>Data sources</b></td><td>Instruments, behavioural checklists, records</td><td>Open-ended interviews, observations, documents, audiovisual material</td></tr>
<tr><td><b>Recording</b></td><td>Instruments with reliable and valid scores</td><td>Interview and observation protocols</td></tr>
<tr><td><b>Administering</b></td><td>Standardised procedures</td><td>Attention to field issues and ethics</td></tr></table>
<h4>Convergent design: the sample-size question</h4>
<ul><li><b>Unequal sizes</b> (small qualitative, large quantitative): each strand does its own job well, but comparison is harder.</li><li><b>Equal sizes:</b> easier to merge person by person, but the qualitative sample becomes large or the quantitative sample small.</li></ul>
<h4>Explanatory design: choosing what to follow up</h4>
<p>Statistically significant results · non-significant results that were expected to matter · strong predictors · outliers and extreme cases · differences between groups.</p>
<h4>Exploratory design: turning words into an instrument</h4>
<p><b>Themes</b> become scales, <b>codes</b> become variables, <b>quotes</b> become items. The draft is then checked by experts, pilot-tested, and tested for reliability and validity on a new, larger sample.</p>`);

X.more(4,5,`
<h4>The six steps in each strand</h4>
<table><tr><th>Step</th><th>Quantitative</th><th>Qualitative</th></tr>
<tr><td>Prepare</td><td>Code and clean the data, enter into software</td><td>Transcribe; organise the files</td></tr>
<tr><td>Explore</td><td>Descriptive statistics; check distributions</td><td>Read through; write memos</td></tr>
<tr><td>Analyse</td><td>Statistical tests; effect sizes</td><td>Code the text; group codes into themes</td></tr>
<tr><td>Represent</td><td>Tables and figures</td><td>Themes with quotes; visual models</td></tr>
<tr><td>Interpret</td><td>Against hypotheses and earlier research</td><td>Against the research questions, literature and personal reflection</td></tr>
<tr><td>Validate</td><td>Validity and reliability of scores</td><td>Member checking, triangulation, disconfirming evidence</td></tr></table>
<h4>Joint displays</h4>
<ul><li><b>Side-by-side:</b> quantitative results in one column, qualitative themes in the next, and a final column saying whether they agree</li><li><b>Theme by statistic:</b> themes as rows, groups or scores as columns</li><li><b>Follow-up display:</b> each quantitative result next to the qualitative finding that explains it</li><li><b>Building display:</b> each qualitative theme next to the survey item written from it</li></ul>
<h4>If results disagree in a convergent design</h4>
<ol><li>State the divergence and treat it as a limitation or a new insight</li><li>Re-examine the existing data</li><li>Collect additional data</li><li>Check whether the two strands really measured the same concept</li></ol>`);

X.more(4,6,`
<h4>Validity in each strand</h4>
<table><tr><th></th><th>Quantitative</th><th>Qualitative</th></tr>
<tr><td>Validity</td><td>Content, criterion and construct validity of scores; internal and external validity of the design</td><td>Accuracy of the account: <b>member checking</b>, <b>triangulation</b>, reporting <b>disconfirming evidence</b>, review by peers or an external auditor</td></tr>
<tr><td>Reliability</td><td>Consistent scores: internal consistency, test-retest</td><td>Plays a smaller role; shown through agreement between coders (<b>intercoder agreement</b>)</td></tr></table>
<p><b>Member checking:</b> taking the findings back to participants and asking whether they are accurate. <b>Disconfirming evidence:</b> information that runs against a theme; reporting it makes the account more credible.</p>
<h4>Threats in the complex designs</h4>
<ul><li><b>Experimental:</b> qualitative data collection that changes how participants respond to the treatment. Collect it after the trial, or keep it unobtrusive.</li><li><b>Case study:</b> cases that are poorly defined or not comparable.</li><li><b>Participatory:</b> participants involved in name only.</li><li><b>Evaluation:</b> stages that do not build on each other.</li></ul>
<h4>How to write a validity paragraph in an exam</h4>
<ol><li>Name the design.</li><li>Say how validity and reliability are secured in the quantitative strand.</li><li>Say how the qualitative account is validated.</li><li>Name two threats specific to that design and one strategy for each.</li></ol>`);

X.cards(4,[
['Four decisions behind a mixed methods design','Timing, priority, integration, framework'],
['Epistemology under pragmatism','Practicality: collect data by what works for the research question.'],
['Methodology under constructivism','Inductive: start from participants\' views and build up to patterns and theory.'],
['Worldview shift in the explanatory design','Starts postpositivist in the quantitative phase, moves to constructivist in the qualitative phase.'],
['First two stages in the history of mixed methods','Formative period (1950s-1980s), then the paradigm debate (1970s-1980s).'],
['Who were the "purists"?','Scholars in the paradigm debate who argued that quantitative and qualitative paradigms could not be mixed.'],
['Three challenges of the convergent design','Different sample sizes, merging text with numbers, explaining divergent results'],
['Four variants of the convergent design','Parallel-databases, data-transformation, questionnaire, fully integrated'],
['Case-selection variant','An explanatory design where quantitative results are used only to pick participants for the main qualitative phase.'],
['Three phases of the exploratory sequential design','Qualitative, development of a feature, quantitative test'],
['Purposeful sampling','Deliberately choosing participants who can best inform the question.'],
['Member checking','Taking findings back to participants to confirm their accuracy.'],
['Themes, codes, quotes become','Scales, variables and items when an instrument is built from qualitative findings.'],
['Where qualitative data fit in a mixed methods experiment','Before, during or after the intervention']
]);
X.quiz(4,[
{q:'"Reality is singular and multiple" is the ontology of',o:['Postpositivism','Constructivism','Transformative worldview','Pragmatism'],a:3,e:'Pragmatism accepts both a single reality to test and multiple perspectives.'},
{q:'In the paradigm debate, "purists" argued that',o:['Only qualitative data are valid','Paradigms cannot be mixed','Pragmatism is best','Designs are unnecessary'],a:1,e:'They held that the two approaches rest on incompatible assumptions.'},
{q:'A convergent design where open and closed questions sit on one form is the',o:['Parallel-databases variant','Data-transformation variant','Questionnaire variant','Case-selection variant'],a:2,e:'The questionnaire variant collects both kinds of data in a single instrument.'},
{q:'Counting how often a theme appears so it can be analysed statistically is',o:['Member checking','Data transformation','Purposeful sampling','Triangulation'],a:1,e:'Qualitative data are transformed into quantitative data.'},
{q:'Which design is most manageable for a single researcher with limited resources?',o:['Convergent','Explanatory sequential','Mixed methods evaluation','Participatory-social justice'],a:1,e:'Only one type of data is collected at a time, in a simple two-phase sequence.'},
{q:'Getting ethics approval is tricky for sequential designs because',o:['They use no consent forms','The second phase cannot be fully specified in advance','They have no participants','Quantitative data are exempt'],a:1,e:'The later phase depends on what the first phase finds.'},
{q:'In the exploratory design the quantitative phase should ideally use',o:['The same few participants','A larger sample of different participants','No sample','Only experts'],a:1,e:'A new, larger sample from the same population supports generalisation.'},
{q:'Taking findings back to participants to check accuracy is',o:['Intercoder agreement','Member checking','Data transformation','Local control'],a:1,e:'Member checking is a qualitative validation strategy.'},
{q:'The methodology of the transformative worldview is',o:['Deductive','Inductive','Participatory','Purely statistical'],a:2,e:'Participants are involved in all stages.'},
{q:'Interviewing trial participants while an intervention is running risks',o:['Regression to the mean','The interviews acting as an extra treatment','Low sample size in the trial','Losing randomisation'],a:1,e:'Qualitative data collection during a trial can bias the outcome.'},
{q:'The period when notation and the first design types appeared is the',o:['Formative period','Paradigm debate','Early procedural development','Reflection and refinement'],a:2,e:'From the late 1980s attention turned to methods and procedures.'},
{q:'Which is NOT one of the four design decisions?',o:['Timing','Priority','Integration','Randomisation'],a:3,e:'The decisions are timing, priority, integration and framework.'}
]);
X.long(4,[
['What is mixed methods research? Discuss its characteristics, advantages and challenges.',`<ol><li>Definition through the four core characteristics.</li><li>Quantitative vs qualitative data in a short table.</li><li>Seven research problems that suit mixed methods, with an example or two.</li><li>Advantages: offsets weaknesses, more evidence, answers broader questions.</li><li>Challenges: skills, time and resources, convincing others.</li></ol>`],
['Explain the philosophical foundations of mixed methods research.',`<ol><li>What a worldview is; the five elements.</li><li>Four worldviews in a table across ontology, epistemology, axiology, methodology, rhetoric.</li><li>Why pragmatism is most associated with mixed methods.</li><li>Four stances on applying worldviews.</li><li>Use of theory.</li><li>Five historical stages, including the paradigm debate.</li></ol>`],
['Describe the three core mixed methods designs.',`<ol><li>Notation system.</li><li>For each of convergent, explanatory sequential, exploratory sequential: intent, diagram, four steps, strengths, challenges, variants.</li><li>Comparison table.</li><li>How to choose among them.</li></ol>`],
['Write a note on complex mixed methods designs.',`<ol><li>Meaning: a core design placed inside another approach.</li><li>Experimental (before, during, after), case study, participatory-social justice, evaluation.</li><li>One example and one challenge for each.</li></ol>`],
['How are data collected and analysed in mixed methods research?',`<ol><li>Five collection procedures, quantitative vs qualitative.</li><li>Design-specific decisions for the three core designs.</li><li>Six analysis steps in each strand.</li><li>Integration: merging, connecting to explain, connecting to build.</li><li>Data transformation, joint displays, meta-inferences.</li></ol>`],
['Discuss validity and reliability in mixed methods research.',`<ol><li>Debate over the term; legitimation, inference quality.</li><li>Creswell and Plano Clark's definition and four principles.</li><li>Validity and reliability in each strand.</li><li>Threats and strategies for convergent, explanatory and exploratory designs.</li><li>Threats in complex designs.</li></ol>`]
]);

/* ================= UNIT 5 ================= */
X.more(5,0,`
<h4>Why write a proposal</h4>
<ul><li>It is the <b>blueprint</b>: forces the researcher to think every step through before starting</li><li>It lets a guide, committee or funding agency <b>judge</b> the worth and feasibility of the study</li><li>It works as an <b>agreement</b> on what will be done</li><li>It becomes the first draft of the report's opening chapters</li></ul>
<h4>Each part explained</h4>
<table><tr><th>Part</th><th>What to write</th></tr>
<tr><td><b>Problem</b></td><td>A clear statement, usually as a question, and why it is significant</td></tr>
<tr><td><b>Definitions</b></td><td>Operational definitions of key terms</td></tr>
<tr><td><b>Assumptions</b></td><td>What is taken to be true without testing</td></tr>
<tr><td><b>Limitations</b></td><td>Conditions beyond the researcher's control that may affect conclusions</td></tr>
<tr><td><b>Delimitations</b></td><td>The boundaries: who is included and who is not</td></tr>
<tr><td><b>Review of literature</b></td><td>What is known, what is not, and how this study fits</td></tr>
<tr><td><b>Hypotheses</b></td><td>The testable predictions</td></tr>
<tr><td><b>Methods</b></td><td><i>Subjects:</i> population, sample size, sampling method. <i>Procedures:</i> design, tools, how data will be collected. <i>Data analysis:</i> statistics to be used.</td></tr>
<tr><td><b>Time schedule</b></td><td>The study divided into phases with dates</td></tr>
<tr><td><b>Expected results</b></td><td>What the researcher anticipates finding</td></tr>
<tr><td><b>References and appendix</b></td><td>Sources cited; tools and other supporting material</td></tr></table>
<h4>Proposal vs report</h4>
<table><tr><th></th><th>Proposal</th><th>Report</th></tr>
<tr><td>Written</td><td>Before the study</td><td>After the study</td></tr>
<tr><td>Tense</td><td>Future: "will be selected"</td><td>Past: "were selected"</td></tr>
<tr><td>Has</td><td>Time schedule, expected results</td><td>Results, discussion, abstract</td></tr>
<tr><td>Purpose</td><td>Get approval or funding</td><td>Communicate findings</td></tr></table>`);

X.ins(5,0,{k:'e1',t:'Interpretation: the step before writing',s:'Kothari ch. 14',h:`
<p><b>Interpretation</b> means drawing inferences from the collected facts after analysis. It is the search for the broader meaning of the findings.</p>
<h4>Two aspects</h4>
<ol><li>Establishing <b>continuity</b> by linking the results with those of other studies</li><li>Establishing <b>explanatory concepts</b></li></ol>
<h4>Why interpret?</h4>
<ul><li>To understand the abstract principle that works beneath the findings</li><li>To arrive at explanatory concepts that guide future research</li><li>So the researcher can see, and tell others, why the findings are what they are</li><li>Interpretation of exploratory findings often gives hypotheses for experimental research</li></ul>
<h4>Technique of interpretation</h4>
<ol><li>Give reasonable explanations of the relations found, and look for the uniformity underneath them</li><li>Consider extraneous information collected during the study</li><li>Consult someone with insight who will be frank about errors</li><li>Consider all relevant factors before generalising, to avoid false generalisation</li></ol>
<h4>Precautions in interpretation</h4>
<ol><li>Check that the data are appropriate, trustworthy and adequate, and that the statistical analysis was proper</li><li>Watch for errors: false generalisation, misapplied statistics, treating correlation as causation</li><li>Do not separate interpretation from analysis; they are intertwined</li><li>Look for factors that were hidden at the start, and avoid broad generalisation</li><li>Keep the initial hypothesis, the observations and the theory in constant interaction</li></ol>`});

X.more(5,1,`
<h4>Why report writing matters (Kothari)</h4>
<p>The report is the last step of a study and an essential part of it. Findings that are not communicated are of little value, however brilliant the hypothesis or well designed the study.</p>
<h4>Outline of a technical report</h4>
<ol><li>Summary of results</li><li>Nature of the study (objectives, problem, hypothesis, type of analysis and data)</li><li>Methods employed</li><li>Data (collection, sources, characteristics, limitations)</li><li>Analysis of data and presentation of findings</li><li>Conclusions</li><li>Bibliography</li><li>Technical appendices</li><li>Index</li></ol>
<h4>Outline of a popular report</h4>
<ol><li>Findings and their implications</li><li>Recommendations for action</li><li>Objective of the study</li><li>Methods employed (brief, non-technical)</li><li>Results (with charts and diagrams)</li><li>Technical appendices</li></ol>
<p>Notice the order flips: the technical report builds up to its conclusions; the popular report <b>opens with the findings</b>.</p>
<h4>Oral presentation</h4>
<p><b>Merits:</b> give and take with the audience, clearer understanding. <b>Demerits:</b> no permanent record, findings fade from memory. Use slides, charts and a written summary to make up for this.</p>
<h4>The six steps, explained</h4>
<table><tr><th>Step</th><th>What happens</th></tr>
<tr><td>Logical analysis of the subject matter</td><td>Decide how to develop the subject: <i>logically</i> (simple to complex) or <i>chronologically</i> (in order of time)</td></tr>
<tr><td>Final outline</td><td>The framework: main points and sub-points</td></tr>
<tr><td>Rough draft</td><td>Write down everything done: procedure, analysis, findings, generalisations</td></tr>
<tr><td>Rewriting and polishing</td><td>Check for unity, cohesion, consistency, grammar. Takes more time than the draft.</td></tr>
<tr><td>Final bibliography</td><td>All works consulted, arranged alphabetically</td></tr>
<tr><td>Final draft</td><td>Concise, objective style, simple language, no vague phrases</td></tr></table>`);

X.more(5,2,`
<h4>Introduction</h4>
<p>Moves from general to specific like a funnel: the broad problem → what earlier studies found → the gap → this study's rationale → hypotheses.</p>
<h4>Method</h4>
<table><tr><th>Subsection</th><th>Contents</th></tr>
<tr><td><b>Participants (subjects)</b></td><td>Who, how many, age, sex, how they were selected and assigned</td></tr>
<tr><td><b>Apparatus / materials</b></td><td>Tests, equipment, stimulus materials, with reliability and validity where relevant</td></tr>
<tr><td><b>Design</b></td><td>Type of design; the variables and their operational definitions</td></tr>
<tr><td><b>Procedure</b></td><td>Step by step what happened, including instructions</td></tr></table>
<p>Test of a good Method section: could another researcher repeat the study from it?</p>
<h4>Results</h4>
<ul><li>Report descriptive statistics first, then the test of each hypothesis with its significance level</li><li>Tables are numbered and titled; figures are numbered and captioned</li><li>Do not repeat in the text everything a table already shows</li><li>Keep interpretation out</li></ul>
<h4>Discussion</h4>
<ol><li>Open by saying whether each hypothesis was supported</li><li>Compare with earlier findings</li><li>Explain unexpected results</li><li>State limitations</li><li>Give implications and suggestions for further research</li></ol>
<h4>References</h4>
<p>Only sources cited in the text, in alphabetical order of the first author's surname. Patterns:</p>
<p class="mono">Author, A. A. (Year). Title of article. Title of Journal, volume, pages.</p>
<p class="mono">Author, A. A. (Year). Title of book. Place: Publisher.</p>
<p>In the text: (Surname, Year), with the page number for a direct quotation.</p>
<h4>Mechanics of a written report (Kothari)</h4>
<p>Size and physical design (standard paper, margins, double spacing) · layout · treatment of quotations · footnotes · documentation style · punctuation and abbreviations · use of statistics, charts and graphs · final draft · bibliography · index.</p>`);

X.more(5,3,`
<h4>The fifteen, grouped so they stick</h4>
<table><tr><th>Group</th><th>Precautions</th></tr>
<tr><td><b>Reader first</b></td><td>Right length · not dull · no jargon · findings easy to find</td></tr>
<tr><td><b>Structure</b></td><td>Suitable layout · logical analysis · objectives and methods stated up front</td></tr>
<tr><td><b>Accuracy</b></td><td>No grammatical errors · correct documentation · confidence limits and constraints stated</td></tr>
<tr><td><b>Substance</b></td><td>Originality · policy implications and future research</td></tr>
<tr><td><b>Completeness</b></td><td>Appendices · bibliography · index · neat appearance</td></tr></table>
<h4>Common faults in student reports</h4>
<ul><li>Interpreting results inside the Results section</li><li>Conclusions that go beyond the data</li><li>Sources cited in the text but missing from the references</li><li>A method too thin to replicate</li><li>Abstract longer than the limit or containing citations</li></ul>`);

X.more(5,4,`
<h4>How to use the checklist</h4>
<p>Go section by section and answer each question yes or no, with a reason. A good evaluation comments on <b>internal validity</b> (were extraneous variables controlled?) and <b>external validity</b> (can the findings be generalised?).</p>
<h4>General questions for any report</h4>
<ul><li>Is the problem worth studying, and is it clearly stated?</li><li>Does the design fit the problem?</li><li>Is the sample adequate and properly drawn?</li><li>Are the tools reliable and valid?</li><li>Is the analysis right for the data and the hypotheses?</li><li>Do the conclusions follow from the results?</li><li>Is the writing clear and correctly documented?</li></ul>`);

X.cards(5,[
['Four purposes of a research proposal','Blueprint for the researcher, basis for judging the study, an agreement on what will be done, first draft of the report\'s opening'],
['Three subsections of Methods in a proposal','Subjects, procedures, data analysis'],
['Interpretation (Kothari)','Drawing inferences from the collected facts after analysis; the search for the broader meaning of findings.'],
['Two aspects of interpretation','Continuity with other studies, and establishing explanatory concepts'],
['First item in a popular report','Findings and their implications'],
['First item in a technical report','Summary of results'],
['Logical vs chronological development','Logical: simple to complex. Chronological: in order of time.'],
['Demerit of an oral presentation','No permanent record; findings fade from memory.'],
['Test of a good Method section','Another researcher could replicate the study from it.'],
['Funnel structure of the introduction','Broad problem → earlier research → gap → rationale → hypotheses'],
['How a Discussion should open','By stating whether each hypothesis was supported.'],
['Order of the reference list','Alphabetical by first author\'s surname; only sources cited in the text.']
]);
X.quiz(5,[
{q:'A popular report begins with',o:['Methods employed','Findings and their implications','Technical appendices','Bibliography'],a:1,e:'Readers of a popular report want the findings first.'},
{q:'Developing the subject from the simplest ideas to the most complex is',o:['Chronological development','Logical development','Polishing','Tabulation'],a:1,e:'Logical development moves from simple to complex.'},
{q:'Which step of report writing takes more time than writing the rough draft?',o:['Final outline','Rewriting and polishing','Bibliography','Logical analysis'],a:1,e:'Kothari notes that careful revision takes more time than the draft.'},
{q:'According to Kothari, interpretation involves establishing continuity and',o:['Random assignment','Explanatory concepts','A time schedule','Sampling frames'],a:1,e:'The two aspects are continuity with other studies and explanatory concepts.'},
{q:'Treating a correlation as proof of causation is',o:['A precaution in interpretation','An error to guard against in interpretation','A step in report writing','A type of report'],a:1,e:'Kothari lists it among the errors of interpretation.'},
{q:'"Participants will be selected by random sampling" is the wording of a',o:['Report','Proposal','Abstract','Discussion'],a:1,e:'Proposals are written in the future tense.'},
{q:'In the Results section you should',o:['Explain why the hypothesis failed','Report statistics without interpreting them','Review earlier studies','List the references'],a:1,e:'Interpretation belongs in the Discussion.'},
{q:'The reference list contains',o:['Everything the author read','Only sources cited in the text','Only books','Only journal articles'],a:1,e:'APA references list cited sources only, alphabetically.'},
{q:'The main demerit of an oral presentation is',o:['It allows questions','It lacks a permanent record','It is too technical','It needs an index'],a:1,e:'Without a written record the findings may fade from memory.'},
{q:'Which is a delimitation?',o:['Some participants dropped out','The study covers only first-year students','The scale had low reliability','It rained on the test day'],a:1,e:'A delimitation is a boundary the researcher chooses.'},
{q:'The step where the researcher decides between logical and chronological development is',o:['Logical analysis of the subject matter','Rough draft','Final bibliography','Polishing'],a:0,e:'It is the first of Kothari\'s six steps.'},
{q:'In Kothari\'s main text, the section that follows the introduction is',o:['Index','Statement of findings and recommendations','Appendix','Preface'],a:1,e:'Main text: introduction, findings and recommendations, results, implications, summary.'}
]);
X.long(5,[
['What is a research proposal? Explain its purpose and structure.',`<ol><li>Meaning: the plan written before the study.</li><li>Four purposes.</li><li>Structure, part by part: problem; definitions, assumptions, limitations, delimitations; review; hypotheses; methods (subjects, procedures, data analysis); time schedule; expected results; references; appendix.</li><li>Proposal vs report table.</li></ol>`],
['Describe the structure of a research report according to the APA format.',`<ol><li>Purpose of a report.</li><li>Title page, abstract, introduction, method (with subsections), results, discussion, references, appendix: what each contains.</li><li>Style rules: tense, citations, quotations, abbreviations.</li><li>Draw the order as a flow from title page to appendix.</li></ol>`],
['Explain the types of research reports and the steps in writing one.',`<ol><li>Significance of report writing.</li><li>Technical report with its nine-point outline.</li><li>Popular report with its six-point outline.</li><li>Other forms: article, monograph, oral presentation.</li><li>Six steps in writing.</li><li>Kothari's layout: preliminary pages, main text, end matter.</li></ol>`],
['What precautions should be taken while writing a research report?',`<ol><li>Open: the report is the channel for communicating findings.</li><li>Kothari's fifteen precautions, grouped under reader, structure, accuracy, substance, completeness.</li><li>Close with his point that report writing is an art learnt by practice.</li></ol>`],
['How would you evaluate a research report?',`<ol><li>Why evaluation is needed.</li><li>AK Singh's six heads with their questions: title, problem, review of literature, methods, results and discussion, summary and conclusion.</li><li>Add internal and external validity.</li><li>Close with general criteria of good research from Unit 1.</li></ol>`],
['Write a note on interpretation of research findings.',`<ol><li>Meaning and two aspects.</li><li>Why interpretation is needed (four reasons).</li><li>Technique (four steps).</li><li>Precautions (five).</li></ol>`]
]);
})();
