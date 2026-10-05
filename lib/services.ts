export interface SurveyService {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  introduction: string;
  bestFor: string;
  deliverables: string[];
  preparation: string[];
  process: { title: string; description: string }[];
  scopeNote: string;
  faqs: { question: string; answer: string }[];
  related: string[];
}

export const SERVICE_DETAILS: SurveyService[] = [
  {
    slug: "boundary-survey",
    number: "01",
    title: "Boundary & land surveys",
    shortTitle: "Boundary survey",
    description:
      "Understand your plot, its measured area and the relationship between existing site features and the boundary information supplied.",
    introduction:
      "Before buying, fencing or planning a property, start with a clear picture of the land. We measure the site, review the reference information you provide and prepare a drawing that makes dimensions, corner positions and visible features easier to understand. The scope is agreed around your purpose, whether that is a purchase check, design brief or boundary marking exercise.",
    bestFor:
      "Landowners, purchasers, architects and developers who need a measured site plan before making a property decision.",
    deliverables: [
      "A measured plot plan with dimensions, corner references and visible boundary features.",
      "An area statement based on the agreed survey extent and reference information.",
      "CAD drawing and PDF plan, with a coordinate schedule where included in the scope.",
      "On-site marking of agreed points where access, instructions and the project scope allow.",
    ],
    preparation: [
      "Share the site location, approximate area and the reason for the survey.",
      "Provide available property records, previous survey plans and approved layouts.",
      "Identify existing corner stones, fences, access routes and any disputed portions.",
      "Arrange permission to enter the site and nominate a person to explain the boundary references.",
    ],
    process: [
      {
        title: "Review the brief",
        description:
          "We clarify the land parcel, available records and how the drawing will be used.",
      },
      {
        title: "Measure the site",
        description:
          "Field observations capture agreed corners, dimensions and physical features using a suitable method.",
      },
      {
        title: "Compare and document",
        description:
          "We prepare the measured plan and identify differences that need further clarification.",
      },
      {
        title: "Explain the result",
        description:
          "We hand over the agreed files and explain the reference basis and any limits to the survey.",
      },
    ],
    scopeNote:
      "A private survey records measurements and supplied references. Ownership, disputed boundaries and official demarcation may require the relevant land-records authority or legal advice; a measurement alone does not settle them.",
    faqs: [
      {
        question: "Can you check a plot before I purchase it?",
        answer:
          "Yes. Tell us what you need to verify and share the available documents. We can scope a measured area and site-feature comparison so you have clearer information for your due diligence.",
      },
      {
        question: "Is a fence always the property boundary?",
        answer:
          "A fence is a physical feature that can be surveyed. Its position should be compared with the relevant boundary references; the survey will distinguish observed features from supplied boundary information.",
      },
      {
        question: "What affects the cost?",
        answer:
          "Plot size, access, vegetation, the number of corners, available references and marking requirements all affect the field work. We confirm the scope and fee after reviewing your site details.",
      },
      {
        question: "Can you help with official Mojani in Maharashtra?",
        answer:
          "We can discuss document preparation and survey support. Official measurement is handled through the Maharashtra Land Records Department; see our Mojani support service for the distinction.",
      },
    ],
    related: ["topographic-survey", "dgps-survey", "mojani-support"],
  },
  {
    slug: "topographic-survey",
    number: "02",
    title: "Topographic & contour surveys",
    shortTitle: "Topographic survey",
    description:
      "A clear record of levels, slopes and site features for design, drainage planning and earthwork decisions.",
    introduction:
      "A good design starts with the ground as it is. Our topographic surveys bring together spot levels, changes in slope and visible features such as roads, structures, trees and drainage channels. We agree the survey extent, feature list and level of detail with your architect or engineer so the output fits the design task.",
    bestFor:
      "Architects, civil engineers, landscape designers and developers planning buildings, roads, drainage or site grading.",
    deliverables: [
      "A topographic CAD plan and readable PDF showing the features included in the survey.",
      "Spot levels and contours at an interval agreed for the terrain and design purpose.",
      "Reference-point and benchmark information used for the survey.",
      "A terrain model, sections or point schedule where specified in the brief.",
    ],
    preparation: [
      "Send a location pin and mark the survey extent, including any adjoining road or drainage connections.",
      "Ask your designer to specify the coordinate system, level datum and preferred file format.",
      "Identify priority features, the desired contour interval and any planned earthwork.",
      "Tell us about dense vegetation, restricted areas, traffic or access limitations.",
    ],
    process: [
      {
        title: "Agree the detail",
        description:
          "We define the boundaries of the survey, important features and drawing requirements.",
      },
      {
        title: "Establish references",
        description:
          "The team checks the available control and level references before detailed measurement.",
      },
      {
        title: "Capture the terrain",
        description:
          "Field work records levels, breaklines and the visible features required by the brief.",
      },
      {
        title: "Build the drawing",
        description:
          "We process and check the observations, prepare contours and hand over the agreed outputs.",
      },
    ],
    scopeNote:
      "A topographic survey captures accessible surface conditions at the time of measurement. Underground utility detection, tree assessments and geotechnical investigation require separately agreed work.",
    faqs: [
      {
        question: "Which contour interval should I choose?",
        answer:
          "The right interval depends on terrain, the density of observations and your design purpose. Share your engineer’s specification, or we can discuss an appropriate scope before quoting.",
      },
      {
        question: "Can the survey be used for drainage design?",
        answer:
          "Levels and surface features can provide inputs for your drainage engineer. Include the relevant outfalls, adjoining levels and any required sections in the brief.",
      },
      {
        question: "Do you survey trees and existing structures?",
        answer:
          "Visible trees and structures can be included in the feature schedule. Specify the information needed, such as trunk positions, building outlines or finished floor levels.",
      },
      {
        question: "Can I receive editable CAD files?",
        answer:
          "Yes. DWG or DXF and a PDF can be included in the agreed deliverables. Confirm the software version, units and drawing standard your design team uses.",
      },
    ],
    related: ["total-station-survey", "dgps-survey", "gis-mapping"],
  },
  {
    slug: "dgps-survey",
    number: "03",
    title: "DGPS & RTK surveys",
    shortTitle: "DGPS & RTK survey",
    description:
      "Coordinate-based field measurement for survey control, larger sites and infrastructure alignment work.",
    introduction:
      "DGPS and RTK GNSS workflows help connect field measurements to a defined coordinate reference. We use the project requirements, available control and site conditions to plan the observations. For larger parcels, corridors and open sites, this provides a practical basis for mapping and for combining measurements made at different stages.",
    bestFor:
      "Project teams that need coordinated site data, reference points or measurements across a larger survey area.",
    deliverables: [
      "A coordinate schedule for the points included in the agreed survey.",
      "A plan showing measured points or features, supplied in the agreed CAD and PDF formats.",
      "The coordinate reference, units and level reference used for the deliverable.",
      "Control-point descriptions and observation or checking information as specified.",
    ],
    preparation: [
      "Provide the site extent, required survey purpose and target specification.",
      "Share existing control-point coordinates and their source, if available.",
      "Confirm the required horizontal coordinate system and vertical reference.",
      "Flag tree cover, tall buildings, inaccessible areas and communication constraints.",
    ],
    process: [
      {
        title: "Set the reference",
        description:
          "We agree the coordinate framework and review available survey control.",
      },
      {
        title: "Plan observations",
        description:
          "The field method considers site access, sky visibility and correction availability.",
      },
      {
        title: "Measure and check",
        description:
          "The team records agreed points and checks observations against the project requirements.",
      },
      {
        title: "Deliver usable data",
        description:
          "Coordinates, drawings and reference information are prepared for your project workflow.",
      },
    ],
    scopeNote:
      "Achievable accuracy depends on equipment, control, observation method and site conditions. We agree the required tolerance and checking approach for each project rather than applying one accuracy claim to every survey.",
    faqs: [
      {
        question: "What is the difference between DGPS and RTK?",
        answer:
          "Both use correction information to improve satellite positioning. RTK uses a specific carrier-phase positioning workflow for precise real-time observations. We select a method around the survey requirement and site conditions.",
      },
      {
        question: "Will GNSS work under trees or next to buildings?",
        answer:
          "Obstructions and reflected signals can affect observations. We assess the site and may combine GNSS control with Total Station measurements where appropriate.",
      },
      {
        question: "Can you work in our project coordinate system?",
        answer:
          "Share the coordinate-system definition, control information and any transformation requirements. We review these before field work so datasets can be combined consistently.",
      },
      {
        question: "Does a DGPS survey establish legal ownership?",
        answer:
          "Coordinates describe measured positions. Ownership and official boundary decisions depend on the applicable records and authority process, not on the instrument used.",
      },
    ],
    related: ["total-station-survey", "boundary-survey", "highway-survey"],
  },
  {
    slug: "total-station-survey",
    number: "04",
    title: "Total Station surveys",
    shortTitle: "Total Station survey",
    description:
      "Detailed ground measurements for site plans, construction setting out and as-built verification.",
    introduction:
      "A Total Station measures angles and distances to locate points relative to survey control. It is a useful tool for detailed site capture and for transferring agreed design points onto the ground. We define the required references, feature list and tolerances with your project team before starting.",
    bestFor:
      "Architects, site engineers and contractors who need detailed measurements or coordinated setting out on an active site.",
    deliverables: [
      "A site drawing or point schedule for the agreed measured features.",
      "Setting-out coordinates and a record of marked points where included.",
      "An as-built comparison against supplied design information where commissioned.",
      "CAD and PDF outputs with the applicable reference points and units.",
    ],
    preparation: [
      "Share the latest approved drawings and identify the revision to be used.",
      "Provide existing benchmarks, grid references and coordinate information.",
      "Confirm which features or design points need measurement or setting out.",
      "Arrange clear access, safe working areas and coordination with the site engineer.",
    ],
    process: [
      {
        title: "Confirm design inputs",
        description:
          "We check the drawing revision, units, reference system and requested point list.",
      },
      {
        title: "Check site control",
        description:
          "Available control and working positions are assessed before detailed observations.",
      },
      {
        title: "Measure or set out",
        description:
          "The team captures existing features or marks the agreed design positions.",
      },
      {
        title: "Record and hand over",
        description:
          "Results and any differences requiring review are documented for the project team.",
      },
    ],
    scopeNote:
      "Total Station work needs suitable lines of sight and reliable control. Instrument specifications alone do not define the accuracy of a completed survey; field method and checking are part of the scope.",
    faqs: [
      {
        question: "Can you mark building grids and column positions?",
        answer:
          "Setting out can be scoped from the design drawings and control information supplied by the project team. Confirm the point list, drawing revision and responsibility for design approval before work starts.",
      },
      {
        question: "How is an as-built survey different from setting out?",
        answer:
          "Setting out transfers design positions to the site. An as-built survey measures what exists so it can be documented or compared with the design.",
      },
      {
        question: "Do I need Total Station or DGPS?",
        answer:
          "That depends on the site, required detail and reference framework. Some projects benefit from GNSS control combined with Total Station detail; we can discuss the method after reviewing your brief.",
      },
      {
        question: "What happens if a site reference point has moved?",
        answer:
          "Tell us before measurements begin. We assess the available references and agree how control should be checked or re-established before relying on it.",
      },
    ],
    related: ["topographic-survey", "dgps-survey", "boundary-survey"],
  },
  {
    slug: "highway-survey",
    number: "05",
    title: "Highway & infrastructure surveys",
    shortTitle: "Highway survey",
    description:
      "Corridor measurements, longitudinal profiles and cross-sections that support engineering design and construction.",
    introduction:
      "Linear infrastructure needs consistent survey control and a clear definition of the corridor. We scope field measurements around the alignment, chainage, width and section intervals required by your engineering team. The result is coordinated survey information for road, utility and other infrastructure planning or construction tasks.",
    bestFor:
      "Infrastructure consultants and contractors preparing designs, setting out work or documenting an existing corridor.",
    deliverables: [
      "A corridor plan with the agreed alignment references and visible site features.",
      "Longitudinal profiles and cross-sections at specified chainages or locations.",
      "Survey control and benchmark schedules within the agreed scope.",
      "CAD drawings, point data and quantity inputs in the formats specified by your engineer.",
    ],
    preparation: [
      "Send the alignment file, route length, corridor width and known access constraints.",
      "Provide the consultant’s survey specification, coordinate system and level datum.",
      "Confirm section intervals and additional detail needed at junctions, bridges or drainage crossings.",
      "Identify permissions, traffic management and safety arrangements for field work.",
    ],
    process: [
      {
        title: "Define the corridor",
        description:
          "We agree the route, survey limits, chainage framework and required outputs.",
      },
      {
        title: "Plan field access",
        description:
          "The programme considers traffic, terrain, permissions and safe working arrangements.",
      },
      {
        title: "Capture and verify",
        description:
          "Control, levels and features are measured and checked against the agreed specification.",
      },
      {
        title: "Prepare engineering inputs",
        description:
          "Plans, profiles and sections are assembled for review by your design team.",
      },
    ],
    scopeNote:
      "The project’s contract specification determines survey requirements. Authority acceptance, design approval, utility detection and land-acquisition decisions remain separate from the measurement service.",
    faqs: [
      {
        question: "Can you follow our consultant’s survey specification?",
        answer:
          "Share it with the enquiry. We review the requested tolerances, references, section spacing and deliverables before confirming the scope and field programme.",
      },
      {
        question: "Can the data support earthwork calculations?",
        answer:
          "Survey levels and sections can provide inputs for quantity calculations. Agree the surface definitions, comparison levels and calculation method with your engineer.",
      },
      {
        question: "Do you identify underground utilities?",
        answer:
          "A surface survey can record visible utility features. Buried-utility detection or verification must be explicitly scoped and should not be assumed from a corridor drawing.",
      },
      {
        question: "Can you support infrastructure projects across India?",
        answer:
          "Yes. We plan the survey around the corridor location, route length, specification and programme. Field access, travel, mobilisation and deliverables are confirmed in the project scope.",
      },
    ],
    related: ["dgps-survey", "topographic-survey", "gis-mapping"],
  },
  {
    slug: "mojani-support",
    number: "06",
    title: "Mojani & land-records support",
    shortTitle: "Mojani support",
    description:
      "Practical survey and document support for landowners navigating land measurement in Maharashtra.",
    introduction:
      "When a land measurement involves records as well as the site, it helps to organise the information first. We discuss the purpose of your enquiry, review the documents available and identify the private survey work that may support it. Official Mojani applications and measurements are handled by the Maharashtra Land Records Department.",
    bestFor:
      "Landowners who want to understand their site information and prepare for an official measurement enquiry in Maharashtra.",
    deliverables: [
      "A review of the survey-related documents and reference plans you provide.",
      "A list of missing site information or survey references to clarify.",
      "A private measured drawing or comparison plan where included in the scope.",
      "An explanation of the survey findings and the questions to take to the appropriate office.",
    ],
    preparation: [
      "Share the village, taluka, district and Gat, Survey or CTS number, as applicable.",
      "Keep available 7/12 extracts, property cards, earlier measurement plans and layout drawings ready.",
      "Provide any existing application reference or correspondence relevant to the survey brief.",
      "Explain whether the purpose is measurement, purchase verification, marking or a discrepancy in records.",
    ],
    process: [
      {
        title: "Understand the enquiry",
        description:
          "We clarify what you need from the measurement and which records are available.",
      },
      {
        title: "Review the references",
        description:
          "The available plans and site information are reviewed for the proposed survey work.",
      },
      {
        title: "Scope support",
        description:
          "We agree any private field measurement, drawing or document support required.",
      },
      {
        title: "Explain next steps",
        description:
          "We distinguish our survey outputs from the official process and point you to the relevant government service.",
      },
    ],
    scopeNote:
      "Shubham Surveyors is a private surveying firm. Our support does not replace an official Mojani, change land records or guarantee a decision by a government office. Official fees and timelines are set by the relevant authority.",
    faqs: [
      {
        question: "Where can I apply for official Mojani?",
        answer:
          "The Maharashtra government provides land-record services through Mahabhumi, including e-Mojni. Use the official portal to find the current service and application route for your area.",
      },
      {
        question: "Is a private survey the same as official Mojani?",
        answer:
          "They serve different purposes. A private survey provides measurements and drawings within an agreed brief. Official measurement follows the Land Records Department’s process.",
      },
      {
        question: "Are all documents listed here mandatory?",
        answer:
          "No. They are useful starting references for discussing our survey scope. The applicable government service determines its own required documents; check the current requirements with that office or portal.",
      },
      {
        question: "Can you guarantee an application date or outcome?",
        answer:
          "No. We can agree a programme for our own survey support. Scheduling, record decisions and the outcome of an official application remain with the relevant authority.",
      },
    ],
    related: ["boundary-survey", "total-station-survey", "dgps-survey"],
  },
  {
    slug: "gis-mapping",
    number: "07",
    title: "GIS & digital mapping",
    shortTitle: "GIS mapping",
    description:
      "Organised spatial data and clear map layers for planning, asset records and ongoing project use.",
    introduction:
      "A useful map connects a feature’s position with the information your team needs about it. We discuss the intended use, source data and required attributes before preparing digital map layers. Field survey information and supplied records can then be organised within a consistent coordinate framework.",
    bestFor:
      "Planning teams, infrastructure consultants and asset managers who need structured, reusable location data.",
    deliverables: [
      "Agreed point, line or polygon layers with a defined set of attributes.",
      "GIS files in the requested format, such as Shapefile, GeoPackage or KML, as agreed.",
      "Map layouts and PDF reference plans for review and communication.",
      "A description of source data, coordinate references and the scope of checks carried out.",
    ],
    preparation: [
      "Describe the decisions, system or workflow that the map needs to support.",
      "Provide existing CAD, GIS, spreadsheet or reference-plan data that you are authorised to share.",
      "Specify the required feature classes, attributes, coordinate system and delivery format.",
      "Identify whether new field capture, digitisation or updates to an existing dataset are needed.",
    ],
    process: [
      {
        title: "Design the dataset",
        description:
          "We agree feature types, required attributes and how the information will be used.",
      },
      {
        title: "Review and capture",
        description:
          "Source material is reviewed and any agreed field observations are collected.",
      },
      {
        title: "Organise and check",
        description:
          "The data is structured into layers and checked for the agreed completeness and consistency rules.",
      },
      {
        title: "Deliver and explain",
        description:
          "We hand over files, map layouts and reference notes for your team’s workflow.",
      },
    ],
    scopeNote:
      "A map is only as suitable as its source information and defined purpose. We distinguish surveyed data from supplied or digitised information and agree the level of validation before work begins.",
    faqs: [
      {
        question: "Can you convert a CAD drawing to GIS?",
        answer:
          "Yes, this can be scoped after reviewing the file. Coordinate information, layer structure and feature attributes determine what preparation or additional checking is needed.",
      },
      {
        question: "Can you produce a Google Earth file?",
        answer:
          "KML or KMZ can be included where suitable for the dataset and intended use. We confirm the coordinate transformation and the content to be shown.",
      },
      {
        question: "Will the deliverable work in our existing software?",
        answer:
          "Tell us the software, file format and attribute requirements before work starts. We can agree a sample structure for review when a project needs a specific handover standard.",
      },
      {
        question: "Does GIS mapping include a new field survey?",
        answer:
          "Only when included in the brief. Some projects use existing data; others require new measurements. The proposal will distinguish source-data processing from field capture.",
      },
    ],
    related: ["topographic-survey", "dgps-survey", "highway-survey"],
  },
  {
    slug: "building-survey",
    number: "08",
    title: "Building surveys",
    shortTitle: "Building survey",
    description:
      "Measured building plans, dimensions and levels for renovation, space planning and as-built records across India.",
    introduction:
      "Work with a clear record of the building as it stands. We measure accessible spaces, building outlines and agreed features to prepare drawings for your architect or project team. Whether you are planning an alteration, documenting an existing property or checking dimensions against supplied drawings, we agree the required detail before the site visit.",
    bestFor:
      "Architects, property owners, facility managers and contractors who need measured drawings of an existing building.",
    deliverables: [
      "Measured floor plans showing agreed rooms, openings and accessible building features.",
      "Building outlines, dimensions and floor levels tied to the agreed reference.",
      "Elevations and sections where included in the measurement brief.",
      "Editable CAD drawings and PDF plans for coordination or as-built documentation.",
    ],
    preparation: [
      "Share the building location, number of floors and approximate floor area.",
      "Provide existing plans and identify the spaces and features to be measured.",
      "Confirm whether floor plans, elevations, sections or a drawing comparison are needed.",
      "Arrange access to the agreed rooms and coordinate the visit with occupants or site staff.",
    ],
    process: [
      {
        title: "Define the drawing brief",
        description:
          "We agree the survey extent, drawing scale and features your project team needs.",
      },
      {
        title: "Plan access",
        description:
          "The visit is coordinated around occupancy, restricted spaces and the available site references.",
      },
      {
        title: "Measure the building",
        description:
          "Accessible dimensions, positions and levels are recorded using methods suited to the brief.",
      },
      {
        title: "Prepare the record",
        description:
          "We check the measurements, prepare drawings and identify areas that could not be accessed.",
      },
    ],
    scopeNote:
      "This is a measured building survey. Structural condition assessments, safety certification and building approval advice are separate services and are not implied by a measured drawing.",
    faqs: [
      {
        question:
          "Can you prepare drawings when no existing plans are available?",
        answer:
          "Yes. We can scope a measured record of accessible areas. Tell us which plans, elevations or sections your architect needs and how the drawings will be used.",
      },
      {
        question: "Can the survey support renovation work?",
        answer:
          "Measured drawings give your architect a base for planning changes. Specify key dimensions, floor levels and connections to adjoining spaces in the brief.",
      },
      {
        question: "Does this include a structural inspection?",
        answer:
          "No. The service records dimensions and agreed visible features. A qualified structural engineer should assess structural condition or safety when that is required.",
      },
    ],
    related: ["total-station-survey", "topographic-survey", "boundary-survey"],
  },
  {
    slug: "railway-line-survey",
    number: "09",
    title: "Railway line surveys",
    shortTitle: "Railway line survey",
    description:
      "Railway corridor measurements, alignment references, longitudinal profiles and cross-sections for project teams across India.",
    introduction:
      "Railway projects need survey information that connects the route, surrounding terrain and agreed engineering references. We scope corridor measurements around the supplied alignment, chainage, survey width and section intervals. Fieldwork is planned with your project team around access permissions and the working arrangements for the railway environment.",
    bestFor:
      "Railway consultants, infrastructure contractors and project teams planning or documenting a rail corridor.",
    deliverables: [
      "A corridor plan showing agreed alignment references and accessible site features.",
      "Longitudinal profiles and cross-sections at the specified chainages.",
      "Control-point and benchmark schedules within the agreed survey scope.",
      "CAD drawings, coordinate data and setting-out or as-built records where commissioned.",
    ],
    preparation: [
      "Provide the route location, length, corridor width and alignment files.",
      "Share the consultant’s survey specification, chainage references and drawing requirements.",
      "Identify required detail at crossings, structures, stations or adjoining land.",
      "Confirm site permissions and the railway authority’s access and safe working arrangements.",
    ],
    process: [
      {
        title: "Review the corridor",
        description:
          "We define the survey limits, alignment references and engineering outputs with your team.",
      },
      {
        title: "Coordinate the visit",
        description:
          "The field programme follows the agreed access permissions and site working arrangements.",
      },
      {
        title: "Measure and check",
        description:
          "The team records control, levels and specified features within the accessible survey area.",
      },
      {
        title: "Deliver plans and sections",
        description:
          "Checked observations are organised into the drawings and data required by the project.",
      },
    ],
    scopeNote:
      "Survey work on railway property depends on authorised access and the relevant site arrangements. The measurement service does not include track-safety certification, railway design approval or authority acceptance.",
    faqs: [
      {
        question: "Can you survey an existing railway corridor?",
        answer:
          "Share the location, required outputs and access arrangements. We review the scope and permissions before confirming a field programme, particularly where the corridor is operational.",
      },
      {
        question: "Can you use our project chainage and coordinate system?",
        answer:
          "Yes, subject to reviewing the supplied alignment, control and reference definitions. These are agreed before measurements are combined with your design data.",
      },
      {
        question: "Are profiles and cross-sections included?",
        answer:
          "They can be included at the intervals and locations specified by your engineer. The quotation will identify the corridor width, section spacing and additional detail points.",
      },
    ],
    related: ["highway-survey", "dgps-survey", "topographic-survey"],
  },
  {
    slug: "water-supply-survey",
    number: "10",
    title: "Water supply surveys",
    shortTitle: "Water supply survey",
    description:
      "Route plans, ground levels and pipeline corridor profiles to support water supply projects and as-built records across India.",
    introduction:
      "A water supply scheme needs a measured understanding of the route and its surroundings. We capture terrain levels, accessible features and agreed connection references along the proposed or existing pipeline corridor. Your engineer can use the resulting plans and profiles as inputs for route development, design coordination and construction documentation.",
    bestFor:
      "Water supply consultants, utility project teams and contractors who need coordinated route and level information.",
    deliverables: [
      "A route plan with agreed corridor features, crossings and accessible asset positions.",
      "Longitudinal profiles and cross-sections where specified by the design team.",
      "Ground levels, benchmark references and a coordinate schedule within the survey scope.",
      "CAD and PDF drawings, with setting-out or as-built measurements where commissioned.",
    ],
    preparation: [
      "Share the proposed route, approximate length and required corridor width.",
      "Provide available pipeline records, connection locations and the engineer’s specification.",
      "Confirm the level datum, coordinate system and detail needed at crossings or structures.",
      "Arrange access and identify traffic, vegetation or utility-owner restrictions.",
    ],
    process: [
      {
        title: "Understand the route",
        description:
          "We review the alignment, connection references and the information needed by your engineer.",
      },
      {
        title: "Establish control",
        description:
          "The available coordinate and level references are checked for the corridor survey.",
      },
      {
        title: "Capture site detail",
        description:
          "Fieldwork records terrain and the accessible features included in the brief.",
      },
      {
        title: "Prepare project inputs",
        description:
          "Plans, profiles and reference notes are assembled in the agreed drawing formats.",
      },
    ],
    scopeNote:
      "Surface observations and supplied utility records do not confirm the position or depth of buried pipes. Utility detection, hydraulic design, pressure testing and water-quality testing require separately agreed specialist work.",
    faqs: [
      {
        question: "Can you survey a proposed pipeline route?",
        answer:
          "Yes. Share the route, corridor width and your consultant’s required profiles, sections and features so we can define the field scope.",
      },
      {
        question: "Can you document a newly installed water line?",
        answer:
          "As-built measurements can be scoped while the relevant points and pipe features are accessible. Coordinate the survey with the contractor before those features are covered.",
      },
      {
        question: "Will the survey locate every underground pipe?",
        answer:
          "No. A surface survey records accessible features and distinguishes those observations from supplied records. Buried utility detection needs its own agreed method and scope.",
      },
    ],
    related: ["drainage-line-survey", "topographic-survey", "dgps-survey"],
  },
  {
    slug: "drainage-line-survey",
    number: "11",
    title: "Drainage line surveys",
    shortTitle: "Drainage line survey",
    description:
      "Drainage route plans, surface levels and accessible chamber and outfall measurements for engineering projects across India.",
    introduction:
      "Drainage planning begins with reliable level information. We survey the agreed route, surrounding ground and accessible drainage features to help your engineer understand the site. The brief can include channel sections, chamber cover levels, safely accessible invert levels and outfall references, with each observation tied to the agreed datum.",
    bestFor:
      "Civil engineers, drainage consultants, developers and contractors planning or recording drainage infrastructure.",
    deliverables: [
      "A drainage route plan showing surveyed channels, chambers, outfalls and agreed surrounding features.",
      "Ground and cover levels, plus invert levels where safely accessible and included in the brief.",
      "Longitudinal profiles and channel cross-sections at specified locations.",
      "CAD drawings, PDF plans and level schedules with the applicable reference information.",
    ],
    preparation: [
      "Provide the site extent, drainage route and available network drawings.",
      "Identify the outfalls, connection points and chambers your engineer needs surveyed.",
      "Specify the required level datum, section intervals and drawing format.",
      "Arrange authorised access and flag blocked, flooded or otherwise inaccessible features.",
    ],
    process: [
      {
        title: "Set the survey extent",
        description:
          "We agree which drainage features, adjoining levels and connections are required.",
      },
      {
        title: "Review access",
        description:
          "The field team identifies the features that can be measured under the agreed site arrangements.",
      },
      {
        title: "Record positions and levels",
        description:
          "Measurements capture the specified accessible features relative to the project references.",
      },
      {
        title: "Document the network",
        description:
          "Plans, sections and level schedules distinguish measured detail from supplied information.",
      },
    ],
    scopeNote:
      "The survey is limited to agreed accessible features. Confined-space entry, CCTV inspection, blockage clearance, buried utility detection and hydraulic capacity assessment are not included in a standard measurement brief.",
    faqs: [
      {
        question: "Can you record drain invert levels?",
        answer:
          "Invert levels can be included where the feature is safely accessible under the agreed arrangements. Inaccessible points are identified in the handover rather than reported as measured.",
      },
      {
        question: "Does this cover stormwater drains and sewer routes?",
        answer:
          "Either can be scoped for route and level measurement. Tell us the network type, access conditions and required features when requesting a quotation.",
      },
      {
        question: "Will the survey show whether a drain has enough capacity?",
        answer:
          "The measured levels and geometry can support your drainage engineer’s assessment. Hydraulic capacity calculations and condition investigations are separate from the survey drawings.",
      },
    ],
    related: ["water-supply-survey", "topographic-survey", "irrigation-survey"],
  },
  {
    slug: "irrigation-survey",
    number: "12",
    title: "Irrigation surveys",
    shortTitle: "Irrigation survey",
    description:
      "Terrain mapping, canal alignment measurements, profiles and cross-sections for irrigation planning and field projects across India.",
    introduction:
      "Understand how the terrain relates to your irrigation project. We measure land levels, agreed canal or channel alignments and accessible site features to provide a base for your engineer’s planning. The scope can cover agricultural land, conveyance routes and associated surface features, with detail selected for the project’s stage and design requirements.",
    bestFor:
      "Irrigation consultants, agricultural project teams, landowners and contractors who need terrain and alignment data.",
    deliverables: [
      "A topographic plan with agreed ground features, spot levels and contours.",
      "Canal or channel alignment plans with longitudinal profiles and cross-sections where specified.",
      "Coordinate and benchmark schedules for the agreed survey references.",
      "CAD drawings and PDF plans, with setting-out or as-built records where commissioned.",
    ],
    preparation: [
      "Share the land extent, approximate area and any proposed canal or pipeline route.",
      "Provide available plans, benchmark information and the engineer’s survey specification.",
      "Confirm contour intervals, section spacing and important structures or connections.",
      "Explain seasonal access, standing crops, water conditions and permissions for the site visit.",
    ],
    process: [
      {
        title: "Define the project area",
        description:
          "We review the terrain, route and survey detail needed for the intended work.",
      },
      {
        title: "Plan the field visit",
        description:
          "Access, seasonal conditions and project control are considered before measurement begins.",
      },
      {
        title: "Measure land and alignment",
        description:
          "The team records levels, sections and accessible features within the agreed scope.",
      },
      {
        title: "Prepare a measured base",
        description:
          "Checked drawings and data are handed over for your engineer’s planning or construction workflow.",
      },
    ],
    scopeNote:
      "Survey data provides measured inputs for an irrigation project. Water availability studies, hydraulic design, soil testing and permissions for water use are separate from the measurement service.",
    faqs: [
      {
        question: "Can you survey farmland for irrigation planning?",
        answer:
          "Yes. Share the land extent and your engineer’s required terrain detail. We can agree spot levels, contours and the relevant surface features before fieldwork.",
      },
      {
        question: "Can you prepare canal profiles and cross-sections?",
        answer:
          "They can be included along an agreed alignment at specified intervals. Confirm the canal extent, reference datum and additional detail required at structures or crossings.",
      },
      {
        question: "Does an irrigation survey include system design?",
        answer:
          "The survey supplies measured terrain and route information. Your irrigation engineer uses these inputs alongside water, soil and project requirements to develop the design.",
      },
    ],
    related: [
      "topographic-survey",
      "water-supply-survey",
      "drainage-line-survey",
    ],
  },
];

export function getSurveyService(slug: string) {
  return SERVICE_DETAILS.find((service) => service.slug === slug);
}
