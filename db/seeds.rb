# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

courts = [{
  "name": 'Wedgewood Gardens',
  "location": 'Wedgewood Circle, New York',
  "court_type": 'Clay Courts',
  "cost": 2000,
  "phone": '(012)3456789',
  "image": 'https://www.pexels.com/photo/people-sitting-on-bench-watching-tennis-event-on-field-during-daytime-171568/'
},
          {
            "name": 'Frick Park Clay Court Tennis Club',
            "location": 'South Braddock Avenue, Pittsburgh',
            "court_type": 'Clay Courts',
            "cost": 2000,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/people-sitting-on-bench-watching-tennis-event-on-field-during-daytime-171568/'
          },
          {
            "name": 'Walden Lakewood',
            "location": 'East Alexander Street, Tampa-st. Petersburg-Clearwater',
            "court_type": 'Clay Courts',
            "cost": 2000,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/people-sitting-on-bench-watching-tennis-event-on-field-during-daytime-171568/'
          },
          {
            "name": 'Bellaria',
            "location": 'South Ocean Boulevard, west palm beach - boca raton',
            "court_type": 'Clay Courts',
            "cost": 2000,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/people-sitting-on-bench-watching-tennis-event-on-field-during-daytime-171568/'
          },
          {
            "name": 'The Woods',
            "location": 'Spanish Moss Drive, jacksonville',
            "court_type": 'Clay Courts',
            "cost": 2000,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/people-sitting-on-bench-watching-tennis-event-on-field-during-daytime-171568/'
          },
          {
            "name": 'Delray Swim & Tennis Club',
            "location": 'Jaeger Drive, west palm beach-boca raton',
            "court_type": 'Clay Courts',
            "cost": 2000,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/people-sitting-on-bench-watching-tennis-event-on-field-during-daytime-171568/'
          },
          {
            "name": 'Memorial Field',
            "location": 'Croyden Avenue, New York',
            "court_type": 'Clay Courts',
            "cost": 2000,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/people-sitting-on-bench-watching-tennis-event-on-field-during-daytime-171568/'
          },
          {
            "name": 'Herrick Park',
            "location": 'Main Street, New York',
            "court_type": 'Clay Courts',
            "cost": 2000,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/people-sitting-on-bench-watching-tennis-event-on-field-during-daytime-171568/'
          },
          {
            "name": 'Childrens Park',
            "location": 'River Road, West Palm Beach - Boca Raton',
            "court_type": 'Clay Courts',
            "cost": 2000,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/people-sitting-on-bench-watching-tennis-event-on-field-during-daytime-171568/'
          },
          {
            "name": 'Martins Landing - River Club',
            "location": 'Roswell Riverwalk Trail, Atlanta',
            "court_type": 'Clay Courts',
            "cost": 2000,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/people-sitting-on-bench-watching-tennis-event-on-field-during-daytime-171568/'
          },
          {
            "name": 'Coral Bay',
            "location": 'North Bay Drive, miami-fort lauderdale',
            "court_type": 'Grass Courts',
            "cost": 2000,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/people-sitting-on-bench-watching-tennis-event-on-field-during-daytime-171568/'
          },
          {
            "name": 'Coral Bay',
            "location": 'East Columbus Road, Dayton-Springfield',
            "court_type": 'Grass Courts',
            "cost": 2000,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/people-sitting-on-bench-watching-tennis-event-on-field-during-daytime-171568/'
          },
          {
            "name": 'Community Park & Pool',
            "location": 'Desert Willow Drive, Phoenix',
            "court_type": 'Grass Courts',
            "cost": 2000,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/people-sitting-on-bench-watching-tennis-event-on-field-during-daytime-171568/'
          },
          {
            "name": 'Desert Highlands',
            "location": 'Spencer Creek Trail, St. Louis',
            "court_type": 'Grass Courts',
            "cost": 2000,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/people-sitting-on-bench-watching-tennis-event-on-field-during-daytime-171568/'
          },
          {
            "name": 'Spencer Creek Park',
            "location": 'South Station Avenue, New York',
            "court_type": 'Grass Courts',
            "cost": 2000,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/people-sitting-on-bench-watching-tennis-event-on-field-during-daytime-171568/'
          },
          {
            "name": 'South Station Avenue Tennis Courts',
            "location": 'Crandon Boulevard, Miami-Fort Lauderdale',
            "court_type": 'Grass Courts',
            "cost": 2000,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/people-sitting-on-bench-watching-tennis-event-on-field-during-daytime-171568/'
          },
          {
            "name": 'Crandon Tennis Center',
            "location": 'Lane Northwest, Minneapolis-st. Paul',
            "court_type": 'Grass Courts',
            "cost": 2000,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/people-sitting-on-bench-watching-tennis-event-on-field-during-daytime-171568/'
          },
          {
            "name": 'USTA Billie Jean King National Tennis Center',
            "location": 'Perimeter Road, New York',
            "court_type": 'Grass Courts',
            "cost": 2000,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/people-sitting-on-bench-watching-tennis-event-on-field-during-daytime-171568/'
          },
          {
            "name": 'Dont care',
            "location": 'Church Road, Philadelphia',
            "court_type": 'Grass Courts',
            "cost": 2000,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/people-sitting-on-bench-watching-tennis-event-on-field-during-daytime-171568/'
          },
          {
            "name": 'Snowbird Phase 3 Condominiums',
            "location": 'Wright Street, Denver',
            "court_type": 'Grass Courts',
            "cost": 2000,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/people-sitting-on-bench-watching-tennis-event-on-field-during-daytime-171568/'
          },
          {
            "name": 'University of Michigan Varsity Tennis Center',
            "location": 'South State Street, Detroit',
            "court_type": 'Indoor Courts',
            "cost": 1800,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/blue-tennis-court-2961964/'
          },
          {
            "name": 'Mellon Park',
            "location": 'Fifth Avenue, Pittsburgh',
            "court_type": 'Indoor Courts',
            "cost": 1800,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/blue-tennis-court-2961964/'
          },
          {
            "name": 'Whitehaven Tennis Center',
            "location": 'Finley Road, Memphis',
            "court_type": 'Indoor Courts',
            "cost": 1800,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/blue-tennis-court-2961964/'
          },
          {
            "name": 'Simkins Indoor Tennis Center',
            "location": 'Dans Road, Greensboro-Winston-Salem',
            "court_type": 'Indoor Courts',
            "cost": 1800,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/blue-tennis-court-2961964/'
          },
          {
            "name": 'Robinswood Tennis Center',
            "location": 'Avenue Southeast, Seattle',
            "court_type": 'Indoor Courts',
            "cost": 1800,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/blue-tennis-court-2961964/'
          },
          {
            "name": 'Rock Creek Park Tennis Center',
            "location": 'Stage Road, Washington',
            "court_type": 'Indoor Courts',
            "cost": 1800,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/blue-tennis-court-2961964/'
          },
          {
            "name": 'Mt. Lebanon Tennis Center',
            "location": 'Cedar Boulevard, Pittsburgh',
            "court_type": 'Indoor Courts',
            "cost": 1800,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/blue-tennis-court-2961964/'
          },
          {
            "name": 'Alley Pond Park',
            "location": 'Alley Pond Main Path, New York',
            "court_type": 'Indoor Courts',
            "cost": 1800,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/blue-tennis-court-2961964/'
          },
          {
            "name": 'Humboldt Park',
            "location": 'South Pine Avenue, Milwaukee',
            "court_type": 'Indoor Courts',
            "cost": 1800,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/blue-tennis-court-2961964/'
          },
          {
            "name": 'Bensonhurst Park',
            "location": 'Bay Parkway, New York',
            "court_type": 'Indoor Courts',
            "cost": 1800,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/blue-tennis-court-2961964/'
          },
          {
            "name": 'Northwestern High',
            "location": 'Adelphi Road, Washington',
            "court_type": 'Hard Courts',
            "cost": 1400,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/blue-tennis-court-2961964/'
          },
          {
            "name": 'El Dorado High School',
            "location": 'Acacia Way, Sacramento-Yolo',
            "court_type": 'Hard Courts',
            "cost": 1400,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/blue-tennis-court-2961964/'
          },
          {
            "name": 'Mt. Carmel High School',
            "location": 'Carmel Mountain Road, San Diego',
            "court_type": 'Hard Courts',
            "cost": 1400,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/blue-tennis-court-2961964/'
          },
          {
            "name": 'Second Street Park',
            "location": 'South Street, Philadelphia',
            "court_type": 'Hard Courts',
            "cost": 1400,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/blue-tennis-court-2961964/'
          },
          {
            "name": 'Sycamore High School',
            "location": 'West Street, Chicago',
            "court_type": 'Hard Courts',
            "cost": 1400,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/blue-tennis-court-2961964/'
          },
          {
            "name": 'Mill Pond Park',
            "location": 'Broadway, Detroit',
            "court_type": 'Hard Courts',
            "cost": 1400,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/blue-tennis-court-2961964/'
          },
          {
            "name": 'Lincoln Park',
            "location": 'Delaware Avenue, Albany',
            "court_type": 'Hard Courts',
            "cost": 1400,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/blue-tennis-court-2961964/'
          },
          {
            "name": 'Las Vistas At Doral',
            "location": 'Lake Drive, Miami-fort Lauderdale',
            "court_type": 'Hard Courts',
            "cost": 1400,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/blue-tennis-court-2961964/'
          },
          {
            "name": 'Bellaire',
            "location": 'Park Street, Houston-Galveston-Brazoria',
            "court_type": 'Hard Courts',
            "cost": 1400,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/blue-tennis-court-2961964/'
          },
          {
            "name": 'G.W. Brackenridge High School',
            "location": 'Eagleland Drive, San Antonio',
            "court_type": 'Hard Courts',
            "cost": 1400,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/blue-tennis-court-2961964/'
          },
          {
            "name": 'The Park at Canterbury',
            "location": 'Brandywood Circle, Orlando',
            "court_type": 'Carpet Courts',
            "cost": 2100,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/aerial-photo-of-school-3195186/'
          },
          {
            "name": 'Glenleigh',
            "location": 'Glenleigh Drive Southwest, Atlanta',
            "court_type": 'Carpet Courts',
            "cost": 2100,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/aerial-photo-of-school-3195186/'
          },
          {
            "name": 'Palm Trace Landings',
            "location": 'Palm Trace Court, Miami-fort Lauderdale',
            "court_type": 'Carpet Courts',
            "cost": 2100,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/aerial-photo-of-school-3195186/'
          },
          {
            "name": 'Monterey Village',
            "location": 'Center Avenue, Los Angeles',
            "court_type": 'Carpet Courts',
            "cost": 2100,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/aerial-photo-of-school-3195186/'
          },
          {
            "name": 'Mission Park',
            "location": 'Woodland Parkway, San Diego',
            "court_type": 'Carpet Courts',
            "cost": 2100,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/aerial-photo-of-school-3195186/'
          },
          {
            "name": 'Syd Kronenthal Park',
            "location": 'Roberts Avenue, Los Angeles',
            "court_type": 'Carpet Courts',
            "cost": 2100,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/aerial-photo-of-school-3195186/'
          },
          {
            "name": 'Trabuco Hills High School',
            "location": 'Santa Margarita Parkway, Los Angeles',
            "court_type": 'Carpet Courts',
            "cost": 2100,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/aerial-photo-of-school-3195186/'
          },
          {
            "name": 'Desert Willows',
            "location": 'Acoma Avenue, Los Angeles',
            "court_type": 'Carpet Courts',
            "cost": 2100,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/aerial-photo-of-school-3195186/'
          },
          {
            "name": 'St Andrews at Weston',
            "location": 'Bonaventure Boulevard, Miami-fort Lauderdale',
            "court_type": 'Carpet Courts',
            "cost": 2100,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/aerial-photo-of-school-3195186/'
          },
          {
            "name": 'West Memorial Junior High School',
            "location": 'Merrymount Drive, Houston-Galveston-Brazoria',
            "court_type": 'Carpet Courts',
            "cost": 2100,
            "phone": '(012)3456789',
            "image": 'https://www.pexels.com/photo/aerial-photo-of-school-3195186/'
          }]

courts.each { |court| Court.create(court) }
