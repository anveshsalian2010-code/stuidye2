// Units 3-5. Content paraphrased from: A.K. Singh (ch. 16, 21, 24), Kothari (ch. 3, 14), Creswell & Plano Clark 3rd ed.
window.UNITS.push(
{
id:'unit-3', n:3, title:'Research Designs', src:'AK Singh ch. 16, 21 · Kothari ch. 3',
blurb:'What a design does, between vs within groups, Campbell and Stanley\'s families, and single-subject designs.',
topics:[
{t:'Meaning and purpose of research design', s:'AK Singh ch. 21 · Kothari ch. 3', h:`
<p>A research design is the <mark>plan made ahead of time</mark>: the sequence of steps that makes sure the study answers its question on purpose, not by the researcher's whims. Kothari calls it the conceptual structure within which research is conducted, the blueprint for collecting, measuring and analysing data.</p>
<h4>Two purposes</h4>
<ol><li>Answer the research questions as validly and objectively as possible</li><li>Control variance</li></ol>
<h4>MAXMINCON (the variance control rule)</h4>
<table><tr><th>Do this</th><th>To this variance</th><th>How</th></tr>
<tr><td><b>MAX</b>imise</td><td>Experimental variance (caused by the IV)</td><td>Make the conditions as different as possible</td></tr>
<tr><td><b>CON</b>trol</td><td>Extraneous variance</td><td>Randomisation, elimination, matching, building it into the design, statistical control</td></tr>
<tr><td><b>MIN</b>imise</td><td>Error variance (chance, fatigue, measurement error)</td><td>Controlled conditions, reliable measures</td></tr></table>
<h4>Parts of a design (Kothari)</h4>
<p>Sampling design · observational design · statistical design · operational design.</p>`},
{t:'Criteria and principles', s:'AK Singh ch. 21', h:`
<h4>Criteria of a good design</h4>
<ol><li><b>Answers the research questions</b> adequately</li><li><b>Controls extraneous variables</b>. Randomisation is the best technique, in three phases: random selection of subjects, random assignment to groups, random assignment of treatments to groups.</li><li><b>Generalisability</b> (external validity)</li></ol>
<h4>Three basic principles of experimental design (Fisher)</h4>
<table><tr><th>Principle</th><th>Meaning</th></tr>
<tr><td><b>Replication</b></td><td>Repeating the experiment independently under nearly identical conditions. Raises precision.</td></tr>
<tr><td><b>Randomisation</b></td><td>Chance decides who gets which treatment. Protects against extraneous factors.</td></tr>
<tr><td><b>Local control</b></td><td>Balancing, blocking or grouping the experimental units so known sources of variation can be measured and removed.</td></tr></table>`},
{t:'Between-subjects designs', s:'AK Singh ch. 21', h:`
<p>Each participant gets <mark>only one condition</mark>. Different groups are compared.</p>
<table><tr><th>Design</th><th>How groups are formed</th></tr>
<tr><td><b>Randomised groups</b></td><td>Random assignment to two groups or more than two groups.</td></tr>
<tr><td><b>Matched groups</b></td><td>Participants matched on a relevant variable (matching by pairs or by mean and SD), then assigned.</td></tr>
<tr><td><b>Factorial</b></td><td>Two or more IVs studied together, so you get main effects and the interaction. A 2×2 has four cells.</td></tr></table>
<p><b>Plus:</b> no carry-over from one condition to another. <b>Minus:</b> needs more participants, and group differences can masquerade as treatment effects.</p>`},
{t:'Within-subjects designs', s:'AK Singh ch. 21', h:`
<p>The <mark>same participants</mark> get every condition (repeated measures). Each person acts as their own control.</p>
<ul><li><b>Complete</b> within-subjects: order effects are balanced within each participant</li><li><b>Incomplete</b> within-subjects: balanced across participants</li></ul>
<p><b>Problem:</b> order and carry-over effects (practice, fatigue). <b>Fix:</b> balance the order. Complete designs use block randomisation or <b>ABBA counterbalancing</b>; incomplete designs use all possible orders or a Latin square.</p>
<h4>Use it when</h4>
<ul><li>Only a few participants are available</li><li>You want to cut error from individual differences</li><li>Convenience and efficiency matter</li><li>The research question is about change over trials (learning, practice)</li></ul>
<table><tr><th></th><th>Between</th><th>Within</th></tr>
<tr><td>Participants per condition</td><td>Different</td><td>Same</td></tr>
<tr><td>Participants needed</td><td>More</td><td>Fewer</td></tr>
<tr><td>Individual differences</td><td>A source of error</td><td>Controlled</td></tr>
<tr><td>Carry-over effects</td><td>None</td><td>The main risk</td></tr></table>`},
{t:'Campbell and Stanley: pre-experimental and true experimental', s:'AK Singh ch. 21', h:`
<p>Notation: <span class="mono">X</span> = treatment, <span class="mono">O</span> = observation, <span class="mono">R</span> = random assignment.</p>
<h4>Pre-experimental (no randomisation, weak control)</h4>
<table><tr><th>Design</th><th>Notation</th><th>Weakness</th></tr>
<tr><td>One-shot case study</td><td class="mono">X O</td><td>Nothing to compare with</td></tr>
<tr><td>One-group pretest-posttest</td><td class="mono">O₁ X O₂</td><td>History, maturation, testing</td></tr>
<tr><td>Static-group comparison</td><td class="mono">X O₁<br>&nbsp;&nbsp;O₂</td><td>Groups not equated, selection</td></tr></table>
<h4>True experimental (groups equated by randomisation)</h4>
<table><tr><th>Design</th><th>Notation</th><th>Note</th></tr>
<tr><td>Posttest-only control group</td><td class="mono">R X O₁<br>R &nbsp; O₂</td><td>No pretest, so no testing effect</td></tr>
<tr><td>Pretest-posttest control group</td><td class="mono">R O₁ X O₂<br>R O₃ &nbsp; O₄</td><td>Pretest may sensitise participants</td></tr>
<tr><td>Solomon four-group</td><td class="mono">R O₁ X O₂<br>R O₃ &nbsp; O₄<br>R &nbsp;&nbsp; X O₅<br>R &nbsp;&nbsp;&nbsp;&nbsp; O₆</td><td>Combines the two above; isolates the pretest effect. Needs four groups.</td></tr></table>
<h4>Threats to internal validity these designs fight</h4>
<p>History · maturation · testing · instrumentation · statistical regression · selection · experimental mortality · selection-maturation interaction.</p>`},
{t:'Quasi-experimental and ex post facto designs', s:'AK Singh ch. 21', h:`
<h4>Quasi-experimental</h4>
<p>A <mark>compromise design</mark>: it applies an experimental interpretation where full experimental control is missing. The researcher cannot randomly assign, or works with a <b>quasi-independent variable</b>. Better than pre-experimental, weaker than true experimental.</p>
<table><tr><th>Design</th><th>Idea</th></tr>
<tr><td><b>Time-series</b></td><td class="mono">O₁ O₂ O₃ O₄ X O₅ O₆ O₇ O₈</td></tr>
<tr><td><b>Equivalent time-samples</b></td><td>Treatment switched on and off repeatedly with one group</td></tr>
<tr><td><b>Nonequivalent control group</b></td><td class="mono">O₁ X O₂<br>O₃ &nbsp; O₄ &nbsp;(no R)</td></tr>
<tr><td><b>Counterbalanced</b></td><td>Every group gets every treatment in a different order</td></tr>
<tr><td><b>Separate-sample pretest-posttest</b></td><td>One random sample pretested, a different one posttested</td></tr>
<tr><td><b>Patched-up</b></td><td>Combines one-group pretest-posttest with static-group comparison</td></tr>
<tr><td><b>Developmental</b></td><td>Age as quasi-IV: longitudinal, cross-sectional, cross-sequential</td></tr></table>
<h4>Ex post facto</h4>
<p>The researcher does not create the treatment. It has already occurred and is handled by <b>selection</b>, not manipulation.</p>
<ul><li><b>Correlational design</b>: measure two variables and correlate. A significant <i>r</i> can mean O₁ caused O₂, O₂ caused O₁, or a third variable caused both.</li><li><b>Criterion-group design</b>: compare a group that has the characteristic with one that does not, and look back for causes.</li></ul>`},
{t:'Single-subject designs: general procedures', s:'AK Singh ch. 16', h:`
<p>Single-subject (small N) research studies <mark>one participant intensively over time</mark> rather than averaging a large group.</p>
<h4>General procedures</h4>
<ol><li><b>Repeated measurement</b> of the target behaviour, using the same procedure every time</li><li><b>Baseline</b> (operant level): the behaviour before intervention. It must be stable, usually at least three observations.</li><li><b>Manipulate one variable at a time</b></li><li><b>Length of phases</b>: keep phases roughly equal</li><li>Watch for <b>carry-over effects</b> from one phase into the next</li></ol>
<p>Usual sequence: baseline → intervention → baseline.</p>
<h4>Data collection</h4>
<p>Frequency · duration · interval recording · self-report measures · response-specific measures.</p>
<h4>Strengths and weaknesses</h4>
<p><b>Strengths:</b> strong control with one person, shows individual change, useful in clinical work. <b>Weaknesses:</b> limited generality, time-consuming, order effects, baseline problems.</p>
<h4>Versus large N</h4>
<p>Large N controls by randomisation and analyses with statistical tests; single-subject controls by baseline and replication, monitors data continuously, and usually judges change by visual inspection.</p>`},
{t:'Withdrawal, reversal and multiple-baseline designs', s:'AK Singh ch. 16', h:`
<p><b>A</b> = baseline, <b>B</b> = intervention.</p>
<h4>Withdrawal designs</h4>
<table><tr><th>Design</th><th>Logic</th></tr>
<tr><td class="mono">A-B</td><td>Baseline then treatment. Weakest: change could be due to something else.</td></tr>
<tr><td class="mono">A-B-A</td><td>Treatment is withdrawn. If behaviour returns to baseline, the treatment caused the change.</td></tr>
<tr><td class="mono">A-B-A-B</td><td>Treatment reintroduced. Effect shown twice, and the study ends on treatment. Also called the <b>reversal design</b>. Like an equivalent time-samples design.</td></tr>
<tr><td class="mono">A-B-A-C-A</td><td>Variation that compares two treatments, B and C.</td></tr></table>
<p><b>Alternating-treatments design:</b> two treatments are alternated without a return to baseline.</p>
<h4>Multiple-baseline designs</h4>
<p>Used when withdrawing treatment is unethical or the behaviour will not reverse (a learned skill). The treatment is introduced at <mark>staggered times</mark>. If each baseline changes only when its treatment starts, the treatment is the cause.</p>
<ul><li>Across <b>behaviours</b> (same person, same setting)</li><li>Across <b>subjects</b> (same behaviour, same setting)</li><li>Across <b>settings</b> (same person, same behaviour)</li></ul>
<div class="tip">See the graphs for each of these in the Lab tab.</div>`}
],
cards:[
['MAXMINCON','Maximise experimental variance, minimise error variance, control extraneous variance.'],
['Fisher\'s three principles of experimental design','Replication, randomisation, local control'],
['Between-subjects vs within-subjects','Between: different people in each condition. Within: the same people in every condition.'],
['Counterbalancing','Varying the order of conditions (ABBA, Latin square) to cancel order and carry-over effects.'],
['One-shot case study notation','X O'],
['Solomon four-group design: why use it','It combines pretest-posttest and posttest-only control group designs, so the effect of the pretest can be isolated.'],
['Quasi-experimental design','A compromise design: experimental logic without random assignment or full control.'],
['Two ex post facto designs','Correlational design and criterion-group design'],
['Baseline (operant level)','The stable level of behaviour before the intervention begins.'],
['A-B-A-B design','Baseline, treatment, withdrawal, treatment again. Also called the reversal design.'],
['Three kinds of multiple-baseline design','Across behaviours, across subjects, across settings'],
['When to prefer multiple baseline over withdrawal','When withdrawing treatment is unethical or the behaviour cannot be reversed.']
],
quiz:[
{q:'Making the experimental conditions as different as possible serves to',o:['Minimise error variance','Maximise experimental variance','Control extraneous variance','Increase replication'],a:1,e:'Bigger differences between conditions give the IV its best chance to show an effect.'},
{q:'Which design is pre-experimental?',o:['Solomon four-group','Posttest-only control group','One-group pretest-posttest','Time-series'],a:2,e:'It has no control group and no randomisation.'},
{q:'R O₁ X O₂ / R O₃ O₄ is the',o:['Static-group comparison','Pretest-posttest control group design','Nonequivalent control group design','Solomon four-group design'],a:1,e:'Two randomised groups, both pretested, one treated.'},
{q:'The main risk in a within-subjects design is',o:['Selection','Carry-over effects','Too many participants','No comparison'],a:1,e:'The same people take every condition, so earlier conditions can affect later ones.'},
{q:'A design with random assignment missing but a comparison group and pretest present is',o:['True experimental','Quasi-experimental','Pre-experimental','Factorial'],a:1,e:'That is the nonequivalent control group design, a quasi-experiment.'},
{q:'In ex post facto research the independent variable is handled by',o:['Manipulation','Selection','Randomisation','Counterbalancing'],a:1,e:'The treatment has already occurred; the researcher selects groups that have or lack it.'},
{q:'Fisher\'s principle that balances or blocks experimental units is',o:['Replication','Randomisation','Local control','Generalisation'],a:2,e:'Local control groups units so known variation can be removed.'},
{q:'A therapist cannot ethically withdraw a treatment that stopped self-injury. Best design?',o:['A-B-A','A-B-A-B','Multiple baseline','One-shot case study'],a:2,e:'Multiple baseline shows control by staggering the start, with no withdrawal needed.'},
{q:'Which design lets you measure the effect of the pretest itself?',o:['Posttest-only control group','Solomon four-group','Static-group comparison','Time-series'],a:1,e:'Two of its four groups are pretested and two are not.'},
{q:'In single-subject research, "A" stands for',o:['Assessment after treatment','Baseline phase','Alternate treatment','Average score'],a:1,e:'A = baseline, B = intervention.'},
{q:'A 2×2 factorial design lets you study',o:['One IV only','Main effects and the interaction of two IVs','Only within-subjects effects','Only correlations'],a:1,e:'Factorial designs cross two or more IVs.'}
],
lab:{type:'designs'}
},
{
id:'unit-4', n:4, title:'Mixed Methods Designs', src:'Creswell & Plano Clark, 3rd ed. (ch. 1-4, 6, 7)',
blurb:'Why mix, the philosophy behind it, the core and complex designs, and how data are collected, integrated and validated.',
topics:[
{t:'What mixed methods research is', s:'Creswell ch. 1', h:`
<p>In mixed methods research the researcher:</p>
<ol><li><mark>Collects and analyses both</mark> qualitative and quantitative data rigorously</li><li><mark>Integrates</mark> (mixes) the two forms of data and their results</li><li>Organises the procedures into a specific <b>design</b></li><li>Frames the study within <b>theory and philosophy</b></li></ol>
<h4>Problems that call for mixed methods</h4>
<ul><li>You need more complete, corroborated results</li><li>Initial results need explaining</li><li>You must explore before you can measure</li><li>An experiment needs a qualitative component</li><li>Cases need to be described and compared</li><li>Participants need to be involved in the study</li><li>A programme has to be developed, implemented and evaluated</li></ul>
<h4>Advantages</h4>
<p>Offsets the weaknesses of each approach, gives more evidence, answers questions neither can alone, bridges the quant-qual divide.</p>
<h4>Challenges</h4>
<p>Researcher <b>skills</b> in both approaches · <b>time and resources</b> · <b>convincing others</b> of its value.</p>`},
{t:'Philosophical foundations', s:'Creswell ch. 2', h:`
<p>A <b>worldview</b> (paradigm) is the set of beliefs that guides inquiry. Each worldview answers five questions.</p>
<table><tr><th>Element</th><th>Asks</th></tr>
<tr><td>Ontology</td><td>What is the nature of reality?</td></tr>
<tr><td>Epistemology</td><td>What is the relationship between researcher and researched?</td></tr>
<tr><td>Axiology</td><td>What is the role of values?</td></tr>
<tr><td>Methodology</td><td>What is the process of research?</td></tr>
<tr><td>Rhetoric</td><td>What is the language of research?</td></tr></table>
<h4>Four worldviews</h4>
<table><tr><th>Worldview</th><th>Core</th><th>Usually tied to</th></tr>
<tr><td><b>Postpositivism</b></td><td>Cause-and-effect thinking, reductionism, careful measurement, theory testing</td><td>Quantitative</td></tr>
<tr><td><b>Constructivism</b></td><td>Meaning built from participants' subjective views; works bottom-up to patterns and theory</td><td>Qualitative</td></tr>
<tr><td><b>Transformative</b></td><td>Social justice and human rights; focus on marginalised communities; research to change things</td><td>Participatory work</td></tr>
<tr><td><b>Pragmatism</b></td><td>Focus on consequences and on the research question; use whatever works; many methods</td><td>Mixed methods</td></tr></table>
<h4>How worldviews are applied to mixed methods</h4>
<ol><li>One best worldview (usually pragmatism)</li><li>A dialectical perspective that uses several worldviews</li><li>The worldview depends on the design and study context</li><li>The worldview depends on the scholarly community</li></ol>
<h4>Five stages in the history of the field</h4>
<p>Formative → paradigm debate → early procedural development → expanded procedural development → reflection and refinement.</p>`},
{t:'The three core designs', s:'Creswell ch. 3', h:`
<p>Notation: capitals show priority, <span class="mono">+</span> means at the same time, <span class="mono">→</span> means one after the other, <span class="mono">( )</span> means embedded.</p>
<table><tr><th></th><th>Convergent</th><th>Explanatory sequential</th><th>Exploratory sequential</th></tr>
<tr><td>Notation</td><td class="mono">QUAN + QUAL</td><td class="mono">QUAN → qual</td><td class="mono">QUAL → quan</td></tr>
<tr><td>Intent</td><td>Compare or combine the two sets of results for a fuller picture</td><td>Use qualitative data to explain quantitative results</td><td>Explore first, then build something and test it</td></tr>
<tr><td>Procedure</td><td>Collect both together, analyse separately, merge, interpret</td><td>Quant phase → pick results to follow up → qual phase → interpret</td><td>Qual phase → build a feature (instrument, variables, intervention) → quant test</td></tr>
<tr><td>Integration</td><td>Merging</td><td>Connecting, to explain</td><td>Connecting, to build</td></tr>
<tr><td>Strength</td><td>Efficient, intuitive</td><td>Straightforward, one phase at a time</td><td>Produces a tool grounded in participants' views</td></tr>
<tr><td>Challenge</td><td>Different sample sizes, merging words with numbers, handling contradictions</td><td>Takes time; second phase cannot be fully planned in advance</td><td>Takes time; needs skill in instrument development</td></tr></table>
<h4>Choosing between them</h4>
<p>Intent of the study · designs familiar in your field · your expertise · time available · complexity.</p>
<p><b>Fixed</b> designs are planned from the start. <b>Emergent</b> designs add a strand in response to what happens during the study.</p>`},
{t:'Complex designs', s:'Creswell ch. 4', h:`
<p>A core design placed inside another approach or framework.</p>
<table><tr><th>Design</th><th>What happens</th></tr>
<tr><td><b>Mixed methods experimental (intervention)</b></td><td>Qualitative data added before, during or after an experiment or trial.</td></tr>
<tr><td><b>Mixed methods case study</b></td><td>Both kinds of data used to build and compare detailed cases.</td></tr>
<tr><td><b>Mixed methods participatory-social justice</b></td><td>A core design inside a participatory or social-justice framework; participants are involved throughout.</td></tr>
<tr><td><b>Mixed methods evaluation</b></td><td>Several core designs across the stages of developing and evaluating a programme.</td></tr></table>`},
{t:'Data collection', s:'Creswell ch. 6', h:`
<h4>Five procedures for both strands</h4>
<ol><li>Use sampling procedures (quant: probabilistic, larger; qual: purposeful, smaller)</li><li>Obtain permissions and recruit participants</li><li>Identify data sources</li><li>Record the data</li><li>Administer the procedures</li></ol>
<h4>Decisions specific to each design</h4>
<table><tr><th>Design</th><th>Decide</th></tr>
<tr><td><b>Convergent</b></td><td>Same or different individuals? Same or different sample sizes? Parallel questions in both strands? One source or two, and in what order?</td></tr>
<tr><td><b>Explanatory</b></td><td>Follow-up participants are usually drawn from the quant sample. Qual sample is smaller. Which quant results need explaining? How to pick the best participants?</td></tr>
<tr><td><b>Exploratory</b></td><td>The quant phase uses different, more numerous participants. Which qual findings feed the new feature? How to build and test it?</td></tr></table>`},
{t:'Data analysis and integration', s:'Creswell ch. 7', h:`
<h4>Six steps in each strand</h4>
<ol><li>Prepare the data</li><li>Explore the data</li><li>Analyse the data</li><li>Represent the analysis</li><li>Interpret the results</li><li>Validate the data and results</li></ol>
<h4>Integration is the centre of mixed methods analysis</h4>
<table><tr><th>Design</th><th>Intent of integration</th><th>How</th></tr>
<tr><td>Convergent</td><td>Merge to compare</td><td>Side-by-side comparison, <b>data transformation</b> (for example counting codes), joint displays</td></tr>
<tr><td>Explanatory</td><td>Connect to explain</td><td>Quant results decide the qual sample and questions</td></tr>
<tr><td>Exploratory</td><td>Connect to build</td><td>Qual themes become items, variables or intervention content</td></tr></table>
<p>A <mark>joint display</mark> is a table or graph that sets quantitative and qualitative results next to each other. Conclusions drawn from the two strands together are <b>meta-inferences</b>.</p>
<p>Software: MAXQDA, NVivo and similar tools help link, code and quantify.</p>`},
{t:'Validity and reliability in mixed methods', s:'Creswell ch. 7', h:`
<p>Creswell and Plano Clark define validity here as <mark>using strategies that address threats to drawing correct inferences from the integrated data</mark>.</p>
<h4>Four general principles</h4>
<ol><li>Address the validity checks of <b>both</b> strands: quantitative (internal and external validity, reliability of scores) and qualitative (member checking, triangulation, disconfirming evidence)</li><li>"Validity" is the best term because both camps accept it</li><li>Validity concerns the inferences from the integrated data</li><li>Threats are best judged by the <b>type of design</b></li></ol>
<h4>Typical threats by design</h4>
<table><tr><th>Design</th><th>Threat</th><th>Strategy</th></tr>
<tr><td>Convergent</td><td>Strands measure different concepts; unequal samples; results never actually merged</td><td>Parallel questions; plan the comparison; use a joint display</td></tr>
<tr><td>Explanatory</td><td>Following up weak or wrong results; follow-up participants who cannot explain them</td><td>Follow up significant and surprising results; sample from the quant participants</td></tr>
<tr><td>Exploratory</td><td>New feature not built on the qual findings; poor instrument; same people in both phases</td><td>Build from themes; test rigorously; use a new, larger sample</td></tr></table>
<h4>Other names you may be asked about</h4>
<p><b>Legitimation</b> (Onwuegbuzie & Johnson: nine types) · <b>inference quality</b>, made of design quality and interpretive rigor (Teddlie & Tashakkori).</p>`}
],
cards:[
['Four core characteristics of mixed methods','Collect and analyse both data types; integrate them; use a specific design; frame it in theory and philosophy.'],
['Worldview most linked to mixed methods','Pragmatism: focus on consequences and the research question, use what works.'],
['Ontology vs epistemology','Ontology: nature of reality. Epistemology: relationship between researcher and researched.'],
['Axiology','The role of values in research.'],
['Convergent design in one line','Collect QUAN and QUAL at the same time, analyse separately, merge the results.'],
['Explanatory sequential design','QUAN first, then qual to explain the quantitative results.'],
['Exploratory sequential design','QUAL first, build a feature (such as an instrument) from it, then test it quantitatively.'],
['Four complex designs','Mixed methods experimental, case study, participatory-social justice, evaluation'],
['Joint display','A table or graph showing quantitative and qualitative results side by side.'],
['Data transformation','Turning one data type into the other, for example counting how often a qualitative code occurs.'],
['Meta-inference','A conclusion drawn from both strands together.'],
['Three challenges of mixed methods','Researcher skills, time and resources, convincing others of its value'],
['Transformative worldview','Research for social justice, centred on marginalised communities.']
],
quiz:[
{q:'A survey shows girls outperform boys on a test. Interviews are then held to find out why. The design is',o:['Convergent','Explanatory sequential','Exploratory sequential','Mixed methods case study'],a:1,e:'Quantitative first, qualitative second to explain the results.'},
{q:'No scale exists for a new construct. The researcher interviews people, writes items from the themes, then tests the scale on 400 people. The design is',o:['Explanatory sequential','Convergent','Exploratory sequential','Evaluation'],a:2,e:'Explore qualitatively, build an instrument, test it quantitatively.'},
{q:'QUAN + QUAL describes',o:['Sequential timing','Concurrent collection in a convergent design','An embedded strand','Qualitative priority'],a:1,e:'The plus sign means both strands happen at the same time.'},
{q:'"Use whatever methods answer the question" is the stance of',o:['Postpositivism','Constructivism','Pragmatism','Transformative worldview'],a:2,e:'Pragmatism puts the research question and consequences first.'},
{q:'The role of values in research is the question of',o:['Ontology','Epistemology','Axiology','Rhetoric'],a:2,e:'Axiology deals with values.'},
{q:'Integration in a convergent design is done by',o:['Connecting to explain','Connecting to build','Merging','Embedding only'],a:2,e:'The two sets of results are merged and compared.'},
{q:'In an explanatory sequential design the qualitative participants should usually be',o:['A completely new population','Drawn from the quantitative sample','Larger in number than the quant sample','Chosen randomly from the public'],a:1,e:'People who gave the quantitative results are best placed to explain them.'},
{q:'A table placing survey scores next to interview themes is a',o:['Meta-inference','Joint display','Notation system','Worldview'],a:1,e:'Joint displays array both kinds of results together.'},
{q:'Which is a complex design, not a core design?',o:['Convergent','Explanatory sequential','Mixed methods experimental','Exploratory sequential'],a:2,e:'The complex designs embed a core design in another approach, such as an experiment.'},
{q:'A validity threat specific to the convergent design is',o:['Not building the instrument from themes','Strands that do not address the same concepts','Choosing weak results to follow up','Using a new sample in phase two'],a:1,e:'If the strands ask about different things, the results cannot be merged meaningfully.'},
{q:'Which is NOT one of the named challenges of mixed methods?',o:['Researcher skills','Time and resources','Educating others about its value','Lack of any designs to follow'],a:3,e:'There are well-developed designs. The challenges are skills, time and convincing others.'}
],
lab:{type:'mixed'}
},
{
id:'unit-5', n:5, title:'Communicating Research: Proposal and Report', src:'AK Singh ch. 24 · Kothari ch. 14',
blurb:'How to write a proposal, the APA report format section by section, precautions, and how a report is evaluated.',
topics:[
{t:'Research proposal: purpose and structure', s:'AK Singh ch. 24', h:`
<p>A proposal is the <mark>plan written before the research</mark>. It shows a funding agency or committee that the problem is worth studying and that the researcher knows how to study it.</p>
<h4>Structure</h4>
<ol><li><b>Problem</b>: a clear statement, with its significance</li><li><b>Definitions, assumptions, limitations, delimitations</b></li><li><b>Review of related literature</b></li><li><b>Hypotheses</b> to be tested</li><li><b>Methods</b>: subjects, procedures and tools, data analysis</li><li><b>Time schedule</b></li><li><b>Expected results</b></li><li><b>References</b></li><li><b>Appendix</b></li></ol>
<div class="tip">Limitations are conditions outside the researcher's control. Delimitations are the boundaries the researcher chooses.</div>
<p>Many institutions prescribe their own format; a budget is commonly added when funding is requested.</p>`},
{t:'Research report: purpose and types', s:'AK Singh ch. 24 · Kothari ch. 14', h:`
<p><b>Purpose:</b> to tell readers what problem was investigated, how, what was found and what it means. Research is not complete until it is reported. Write it in a dignified, clear and objective style.</p>
<h4>Types (Kothari)</h4>
<table><tr><th>Type</th><th>For whom</th><th>Emphasis</th></tr>
<tr><td><b>Technical report</b></td><td>Specialists, record-keeping</td><td>Methods, assumptions, detailed findings, limitations, supporting data</td></tr>
<tr><td><b>Popular report</b></td><td>General readers, decision-makers</td><td>Simplicity, attractive presentation, findings and implications</td></tr></table>
<p>Other forms: journal article, monograph, oral presentation.</p>
<h4>Six steps in writing a report (Kothari)</h4>
<ol><li>Logical analysis of the subject matter</li><li>Preparing the final outline</li><li>Preparing the rough draft</li><li>Rewriting and polishing</li><li>Preparing the final bibliography</li><li>Writing the final draft</li></ol>
<h4>Kothari's layout</h4>
<p><b>Preliminary pages</b> (title, acknowledgements, contents, lists of tables) → <b>main text</b> (introduction, findings and recommendations, results, implications, summary) → <b>end matter</b> (appendices, bibliography, index).</p>`},
{t:'APA format, section by section', s:'AK Singh ch. 24', h:`
<table><tr><th>Section</th><th>What goes in</th></tr>
<tr><td><b>Title page</b></td><td>Title (names the variables, no abbreviations), author, affiliation, running head (a short title).</td></tr>
<tr><td><b>Abstract</b></td><td>Separate page. About 100 to 150 words: problem, method, results, conclusions. No references cited.</td></tr>
<tr><td><b>Introduction</b></td><td>Not labelled "Introduction". States the problem, reviews the relevant literature, gives the rationale and hypotheses.</td></tr>
<tr><td><b>Method</b></td><td>How the study was done, in enough detail to replicate. Subsections: participants, apparatus or materials, design and procedure.</td></tr>
<tr><td><b>Results</b></td><td>What was found: statistics, tables and figures. No interpretation yet.</td></tr>
<tr><td><b>Discussion</b></td><td>Interprets the results against the hypotheses and earlier research; limitations and implications.</td></tr>
<tr><td><b>References</b></td><td>Every source cited, alphabetically by author, in APA style.</td></tr>
<tr><td><b>Appendix</b></td><td>Material too detailed for the text: tests, instructions, raw data. Each on a new page, labelled Appendix A, B and so on.</td></tr></table>
<h4>Style rules</h4>
<ul><li>Write clearly and objectively; describe what was done in the past tense</li><li>Every source of information is cited</li><li>Avoid abbreviations unless standard or very frequent</li><li>Paraphrase rather than quote; short quotations stay in the text with the page number</li><li>Uniform margins, pages numbered, words not split at line ends</li></ul>
<div class="tip">Memory hook for the order: <b>T</b>iny <b>A</b>nts <b>I</b>nvade <b>M</b>y <b>R</b>ed <b>D</b>inner <b>R</b>ight <b>A</b>way. Title, Abstract, Introduction, Method, Results, Discussion, References, Appendix.</div>`},
{t:'Precautions for writing a report', s:'Kothari ch. 14', h:`
<ol><li><b>Length</b>: long enough to cover the subject, short enough to hold interest</li><li>Not dull; keep the reader interested</li><li>Avoid abstract terms and jargon; simple, objective language</li><li>Make main findings quick to find: charts, graphs, tables, summary</li><li>Layout suited to the objective of the research</li><li>No grammatical mistakes; correct quotations, footnotes, punctuation</li><li>Logical analysis of the subject matter</li><li>Show originality and add to knowledge</li><li>State policy implications and what research is still needed</li><li>Appendices for technical data</li><li>Bibliography of sources</li><li>Index</li><li>Neat, clean, attractive appearance</li><li>Mention confidence limits and constraints faced</li><li>State objectives, problem, methods and analysis clearly in the introduction</li></ol>`},
{t:'Evaluating a research report', s:'AK Singh ch. 24', h:`
<p>A checklist the examiner (and you) can run on any report.</p>
<table><tr><th>Part</th><th>Ask</th></tr>
<tr><td><b>Title</b></td><td>Is it clear? Is it concise?</td></tr>
<tr><td><b>Problem</b></td><td>Clearly stated? Significance recognised? Specific questions raised? Testable hypotheses framed?</td></tr>
<tr><td><b>Review of literature</b></td><td>Does it cover the area well? Are the main findings of earlier research noted? Is it well organised and summarised?</td></tr>
<tr><td><b>Methods</b></td><td>Is the design appropriate and described in detail? Are the samples adequate? Are extraneous variables handled?</td></tr>
<tr><td><b>Results and discussion</b></td><td>Are tables and figures used appropriately? Is the discussion clear and concise? Is the data analysis logical and perceptive?</td></tr>
<tr><td><b>Summary and conclusion</b></td><td>Are the problem and hypotheses restated? Are the procedures reported? Are the findings and conclusions justified by the data?</td></tr></table>`}
],
cards:[
['Purpose of a research proposal','To present the plan before the study so a committee or funder can judge its worth and feasibility.'],
['Limitations vs delimitations','Limitations: outside the researcher\'s control. Delimitations: boundaries the researcher sets.'],
['APA report order','Title page, abstract, introduction, method, results, discussion, references, appendix'],
['Abstract length and one rule','About 100 to 150 words. No references cited in it.'],
['Three jobs of the introduction','State the problem, review the literature, give the rationale and hypotheses.'],
['Method subsections','Participants, apparatus or materials, design and procedure'],
['Results vs discussion','Results: what was found. Discussion: what it means.'],
['Technical vs popular report','Technical: for specialists, full methods and data. Popular: for general readers, simple and focused on findings.'],
['Kothari\'s three parts of a report layout','Preliminary pages, main text, end matter'],
['Kothari\'s rule on report length','Long enough to cover the subject, short enough to maintain interest.'],
['Running head','A shortened title placed on the title page and at the top of pages.'],
['Six steps in writing a report','Logical analysis, final outline, rough draft, rewriting and polishing, final bibliography, final draft']
],
quiz:[
{q:'Which section of an APA report is NOT given its own heading label?',o:['Method','Results','Introduction','Discussion'],a:2,e:'The introduction opens the text without the label "Introduction".'},
{q:'The sample and how it was drawn are described in the',o:['Abstract','Introduction','Method','Discussion'],a:2,e:'Participants are a subsection of Method.'},
{q:'An abstract should',o:['Cite the key references','Be about 100 to 150 words','Present raw data','Be placed after the references'],a:1,e:'It is a short summary on its own page, with no citations.'},
{q:'Which belongs in a proposal but not in a final report?',o:['Review of literature','Time schedule and expected results','References','Method'],a:1,e:'A proposal looks forward, so it plans time and anticipates results.'},
{q:'"Why did the hypothesis fail and what does this mean for theory?" belongs in the',o:['Results','Discussion','Method','Appendix'],a:1,e:'Interpretation goes in the Discussion.'},
{q:'A copy of the questionnaire used is placed in the',o:['Method','Results','References','Appendix'],a:3,e:'Detailed material that would interrupt the text goes in an appendix.'},
{q:'According to Kothari, a report should be',o:['As long as possible','Long enough to cover the subject, short enough to maintain interest','Free of charts','Written in technical jargon'],a:1,e:'That is his first precaution.'},
{q:'A report written for the general public, stressing simplicity and findings, is a',o:['Technical report','Popular report','Monograph','Thesis'],a:1,e:'Popular reports are for non-specialists.'},
{q:'In Kothari\'s layout, the bibliography and index are part of the',o:['Preliminary pages','Main text','End matter','Abstract'],a:2,e:'End matter = appendices, bibliography, index.'},
{q:'Boundaries the researcher deliberately sets on a study are',o:['Limitations','Delimitations','Assumptions','Hypotheses'],a:1,e:'Delimitations are chosen; limitations are imposed.'},
{q:'When evaluating the Methods of a report, a key question is whether',o:['The title is concise','The design is appropriate and described in detail','The references are alphabetical','The abstract is short'],a:1,e:'Method is judged on design, sample and tools.'}
],
lab:{type:'classify', title:'Which section does this go in?', intro:'Each line is from a research report. Put it in the right APA section.',
cats:['Abstract','Introduction','Method','Results','Discussion','Appendix'],
items:[
['"Sixty undergraduates (30 men, 30 women) were selected by stratified random sampling."',2,'Participants and sampling are described in Method.'],
['"Earlier studies disagree on whether reward improves retention, so this study tests..."',1,'Reviewing literature and giving the rationale is the Introduction.'],
['"The reward group recalled more words (M = 14.2) than the control group (M = 10.1), t(58) = 3.4, p < .01."',3,'Statistics are reported in Results, without interpretation.'],
['"This finding supports reinforcement theory, though the small sample limits generalisation."',4,'Interpretation and limitations belong in the Discussion.'],
['"This study examined reward and recall in 60 students; reward improved recall; implications are noted."',0,'A whole-study summary in a few lines is the Abstract.'],
['The full 20-item recall list and the instructions read to participants.',5,'Detailed materials go in an Appendix.'],
['"A 2 × 2 between-subjects factorial design was used."',2,'Design is part of Method.'],
['"It was hypothesised that rewarded participants would recall more words."',1,'Hypotheses close the Introduction.'],
['"Future research should test whether the effect holds with delayed recall."',4,'Suggestions for further research are part of the Discussion.'],
['"Table 2 shows mean recall by group and gender."',3,'Tables of findings sit in Results.']
]}
}
);
