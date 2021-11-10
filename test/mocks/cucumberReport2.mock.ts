import { CucumberFeature } from '../../src';

export const cucumberReport: CucumberFeature[] = [
  {
    uri: 'features/general_agencies/create_general_agency_staff.feature',
    id: 'assign-general-agency-staff-to-general-agency',
    keyword: 'Feature',
    name: 'Assign General Agency Staff to General Agency',
    description: '',
    line: 1,
    elements: [
      {
        id: 'assign-general-agency-staff-to-general-agency;general-staff-has-not-signed-up-on-the-hbx',
        keyword: 'Scenario',
        name: 'General Staff has not signed up on the HBX',
        description: '',
        line: 3,
        type: 'scenario',
        before: [
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:14',
            },
            result: {
              status: 'passed',
              duration: 17000,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:22',
            },
            result: {
              status: 'passed',
              duration: 9800,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/email_spec-2.2.0/lib/email_spec/cucumber.rb:10',
            },
            result: {
              status: 'passed',
              duration: 49800,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:3',
            },
            result: {
              status: 'passed',
              duration: 8400,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache.rb:1',
            },
            result: {
              status: 'passed',
              duration: 28900,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache_clear.rb:1',
            },
            result: {
              status: 'passed',
              duration: 7966608,
            },
          },
          {
            match: {
              location: 'features/support/screenshots.rb:3',
            },
            result: {
              status: 'passed',
              duration: 58000,
            },
          },
        ],
        steps: [
          {
            keyword: 'Given ',
            name: 'the shop market configuration is enabled',
            line: 4,
            match: {
              location: 'features/step_definitions/integration_steps.rb:350',
            },
            result: {
              status: 'passed',
              duration: 35128578,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 20400,
                },
              },
            ],
          },
          {
            keyword: 'Given ',
            name: 'the general agency feature is enabled',
            line: 5,
            match: {
              location: 'features/step_definitions/general_agency_steps.rb:3',
            },
            result: {
              status: 'passed',
              duration: 94402,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 7200,
                },
              },
            ],
          },
          {
            keyword: 'Given ',
            name: 'all announcements are enabled for user to select',
            line: 6,
            match: {
              location:
                'features/hbx_admin/step_definitions/manage_sep_types_steps.rb:987',
            },
            result: {
              status: 'passed',
              duration: 98401,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 7400,
                },
              },
            ],
          },
          {
            keyword: 'Given ',
            name: 'a CCA site exists with a benefit market',
            line: 7,
            match: {
              location: 'features/support/worlds/site_world.rb:26',
            },
            result: {
              status: 'passed',
              duration: 1393568762,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 15500,
                },
              },
            ],
          },
          {
            keyword: 'Given ',
            name: 'there is a General Agency exists for District Agency Inc',
            line: 8,
            match: {
              location: 'features/support/worlds/general_agency_world.rb:49',
            },
            result: {
              status: 'passed',
              duration: 23362518,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 15601,
                },
              },
            ],
          },
          {
            keyword: 'Given ',
            name: 'all permissions are present',
            line: 9,
            match: {
              location: 'features/support/worlds/permissions_world.rb:123',
            },
            result: {
              status: 'passed',
              duration: 558610001,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 24500,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'the staff Max Planck is primary ga staff for District Agency Inc',
            line: 10,
            match: {
              location: 'features/support/worlds/general_agency_world.rb:55',
            },
            result: {
              status: 'passed',
              duration: 251523022,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 18900,
                },
              },
            ],
          },
          {
            keyword: 'Given ',
            name: 'a general agency agent visits the DCHBX',
            line: 11,
            match: {
              location:
                'features/general_agencies/step_definitions/ga_steps.rb:11',
            },
            result: {
              status: 'passed',
              duration: 105452772532,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 32800,
                },
              },
            ],
          },
          {
            keyword: 'When ',
            name: "they click the 'New General Agency' button",
            line: 12,
            match: {
              location:
                'features/general_agencies/step_definitions/ga_steps.rb:37',
            },
            result: {
              status: 'passed',
              duration: 88758187,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 19800,
                },
              },
            ],
          },
          {
            keyword: 'Given ',
            name: 'GA Staff has not signed up as an HBX user',
            line: 14,
            match: {
              location: 'features/step_definitions/integration_steps.rb:502',
            },
            result: {
              status: 'passed',
              duration: 5034895487,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 47001,
                },
              },
            ],
          },
          {
            keyword: 'Then ',
            name: 'GA Staff should see the General Agency Staff Registration form',
            line: 15,
            match: {
              location: 'features/step_definitions/ga_staff_steps.rb:13',
            },
            result: {
              status: 'passed',
              duration: 37307657,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 18601,
                },
              },
            ],
          },
          {
            keyword: 'When ',
            name: 'GA staff enters his personal information',
            line: 16,
            match: {
              location: 'features/step_definitions/ga_staff_steps.rb:3',
            },
            result: {
              status: 'passed',
              duration: 617925260,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 26900,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'GA staff searches for General Agency which exists in EA',
            line: 17,
            match: {
              location: 'features/step_definitions/ga_staff_steps.rb:18',
            },
            result: {
              status: 'passed',
              duration: 204487701,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 17000,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'GA staff should see a list of General Agencies searched and selects his agency',
            line: 18,
            match: {
              location: 'features/step_definitions/ga_staff_steps.rb:24',
            },
            result: {
              status: 'passed',
              duration: 144997574,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 29000,
                },
              },
            ],
          },
          {
            keyword: 'Then ',
            name: 'GA staff submits his application and see successful message',
            line: 19,
            match: {
              location: 'features/step_definitions/ga_staff_steps.rb:28',
            },
            result: {
              status: 'passed',
              duration: 295358113,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 22300,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'Max Planck logs on to the General Agency Portal',
            line: 21,
            match: {
              location: 'features/step_definitions/integration_steps.rb:444',
            },
            result: {
              status: 'passed',
              duration: 1250877403,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 18900,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'there is a Staff with a “pending” general agency staff role in the table',
            line: 22,
            match: {
              location: 'features/step_definitions/ga_staff_steps.rb:34',
            },
            result: {
              status: 'passed',
              duration: 201361663,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 24800,
                },
              },
            ],
          },
          {
            keyword: 'When ',
            name: 'the primary staff clicks on the approve button',
            line: 23,
            match: {
              location: 'features/step_definitions/ga_staff_steps.rb:41',
            },
            result: {
              status: 'passed',
              duration: 46512869,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 23500,
                },
              },
            ],
          },
          {
            keyword: 'Then ',
            name: 'the primary staff should see an approval popup',
            line: 24,
            match: {
              location: 'features/step_definitions/ga_staff_steps.rb:45',
            },
            result: {
              status: 'passed',
              duration: 188196902,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 25300,
                },
              },
            ],
          },
          {
            keyword: 'Then ',
            name: 'the primary staff clicks on continue and approve button',
            line: 25,
            match: {
              location: 'features/step_definitions/ga_staff_steps.rb:49',
            },
            result: {
              status: 'passed',
              duration: 88714485,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 18001,
                },
              },
            ],
          },
          {
            keyword: 'Then ',
            name: 'the primary staff should see the staff successfully approved message',
            line: 26,
            match: {
              location: 'features/step_definitions/ga_staff_steps.rb:53',
            },
            result: {
              status: 'passed',
              duration: 323666460,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 32900,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'new ga staff should receive an email',
            line: 27,
            match: {
              location: 'features/step_definitions/ga_staff_steps.rb:65',
            },
            result: {
              status: 'passed',
              duration: 873211,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 17600,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'the primary staff logs out',
            line: 28,
            match: {
              location: 'features/step_definitions/integration_steps.rb:543',
            },
            result: {
              status: 'passed',
              duration: 584067846,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 23601,
                },
              },
            ],
          },
          {
            keyword: 'When ',
            name: 'new ga staff visits the link received in the approval email',
            line: 30,
            match: {
              location: 'features/step_definitions/ga_staff_steps.rb:69',
            },
            result: {
              status: 'passed',
              duration: 240726745,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 25601,
                },
              },
            ],
          },
          {
            keyword: 'Then ',
            name: 'they should see an account creation form',
            line: 31,
            match: {
              location:
                'features/general_agencies/step_definitions/ga_steps.rb:115',
            },
            result: {
              status: 'passed',
              duration: 29666163,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 100401,
                },
              },
            ],
          },
          {
            keyword: 'When ',
            name: "new ga staff completes the account creation form and hit the 'Submit' button",
            line: 32,
            match: {
              location: 'features/step_definitions/ga_staff_steps.rb:78',
            },
            result: {
              status: 'passed',
              duration: 869455537,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 24400,
                },
              },
            ],
          },
          {
            keyword: 'Then ',
            name: 'they should see a welcome message',
            line: 33,
            match: {
              location:
                'features/general_agencies/step_definitions/ga_steps.rb:129',
            },
            result: {
              status: 'passed',
              duration: 70099458,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 24300,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'they see the General Agency homepage',
            line: 34,
            match: {
              location:
                'features/general_agencies/step_definitions/ga_steps.rb:134',
            },
            result: {
              status: 'passed',
              duration: 52319740,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 23700,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'the primary staff logs out',
            line: 35,
            match: {
              location: 'features/step_definitions/integration_steps.rb:543',
            },
            result: {
              status: 'passed',
              duration: 619998253,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 38701,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'Max Planck logs on to the General Agency Portal',
            line: 37,
            match: {
              location: 'features/step_definitions/integration_steps.rb:444',
            },
            result: {
              status: 'passed',
              duration: 1001836379,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 21001,
                },
              },
            ],
          },
          {
            keyword: 'When ',
            name: 'the primary staff removes ga staff from ga staff table',
            line: 38,
            match: {
              location: 'features/step_definitions/ga_staff_steps.rb:57',
            },
            result: {
              status: 'passed',
              duration: 457300661,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 23701,
                },
              },
            ],
          },
          {
            keyword: 'Then ',
            name: 'the primary staff should see the staff successfully removed message',
            line: 39,
            match: {
              location: 'features/step_definitions/ga_staff_steps.rb:61',
            },
            result: {
              status: 'passed',
              duration: 124808154,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 25000,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'the primary staff logs out',
            line: 40,
            match: {
              location: 'features/step_definitions/integration_steps.rb:543',
            },
            result: {
              status: 'passed',
              duration: 806595891,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 24600,
                },
              },
            ],
          },
        ],
        after: [
          {
            match: {
              location: 'features/support/warden.rb:3',
            },
            result: {
              status: 'passed',
              duration: 34100,
            },
          },
          {
            match: {
              location: 'features/support/user_cleanup.rb:1',
            },
            result: {
              status: 'passed',
              duration: 12642167,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:7',
            },
            result: {
              status: 'passed',
              duration: 17000,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/email_spec-2.2.0/lib/email_spec/cucumber.rb:19',
            },
            result: {
              status: 'passed',
              duration: 10700,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:10',
            },
            result: {
              status: 'passed',
              duration: 51366181,
            },
          },
        ],
      },
      {
        id: 'assign-general-agency-staff-to-general-agency;adding-existing-person-as-general-agency-staff-to-general-agency',
        keyword: 'Scenario',
        name: 'Adding Existing person as General Agency Staff to General Agency',
        description: '',
        line: 42,
        type: 'scenario',
        before: [
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:14',
            },
            result: {
              status: 'passed',
              duration: 14100,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:22',
            },
            result: {
              status: 'passed',
              duration: 9300,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/email_spec-2.2.0/lib/email_spec/cucumber.rb:10',
            },
            result: {
              status: 'passed',
              duration: 167102,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:3',
            },
            result: {
              status: 'passed',
              duration: 12100,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache.rb:1',
            },
            result: {
              status: 'passed',
              duration: 25101,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache_clear.rb:1',
            },
            result: {
              status: 'passed',
              duration: 17233829,
            },
          },
          {
            match: {
              location: 'features/support/screenshots.rb:3',
            },
            result: {
              status: 'passed',
              duration: 63801,
            },
          },
        ],
        steps: [
          {
            keyword: 'Given ',
            name: 'there is a General Agency exists for District Agency Inc',
            line: 43,
            match: {
              location: 'features/support/worlds/general_agency_world.rb:49',
            },
            result: {
              status: 'passed',
              duration: 26738555,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 15101,
                },
              },
            ],
          },
          {
            keyword: 'Given ',
            name: 'general agency feature is enabled',
            line: 44,
            match: {
              location: 'features/step_definitions/general_agency_steps.rb:3',
            },
            result: {
              status: 'passed',
              duration: 97302,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 7600,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'the staff Max Planck is primary ga staff for District Agency Inc',
            line: 45,
            match: {
              location: 'features/support/worlds/general_agency_world.rb:55',
            },
            result: {
              status: 'passed',
              duration: 177781656,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 16200,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'person record exists for John Doe',
            line: 46,
            match: {
              location: 'features/support/worlds/broker_agency_world.rb:162',
            },
            result: {
              status: 'passed',
              duration: 57962968,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 15700,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'Max Planck logs on to the General Agency Portal',
            line: 47,
            match: {
              location: 'features/step_definitions/integration_steps.rb:444',
            },
            result: {
              status: 'passed',
              duration: 1025344390,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 17800,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'the primary staff clicks on the “Add General Agency Staff Role” button',
            line: 48,
            match: {
              location: 'features/step_definitions/ga_staff_steps.rb:85',
            },
            result: {
              status: 'passed',
              duration: 98219402,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 17400,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'a form appears that requires the primary staff to input First Name, Last Name, and DOB to submit',
            line: 49,
            match: {
              location: 'features/step_definitions/ga_staff_steps.rb:89',
            },
            result: {
              status: 'passed',
              duration: 121319808,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 20701,
                },
              },
            ],
          },
          {
            keyword: 'When ',
            name: 'the primary staff enters the First Name, Last Name, and DOB of existing user John Doe',
            line: 50,
            match: {
              location: 'features/step_definitions/ga_staff_steps.rb:95',
            },
            result: {
              status: 'passed',
              duration: 223872668,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 23401,
                },
              },
            ],
          },
          {
            keyword: 'Then ',
            name: 'the primary staff will be given a general agency staff role with the given General Agency Agency',
            line: 51,
            match: {
              location: 'features/step_definitions/ga_staff_steps.rb:102',
            },
            result: {
              status: 'passed',
              duration: 357223434,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 24401,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'the primary staff will now appear within the “General Agency Staff” table as Active and Linked',
            line: 52,
            match: {
              location: 'features/step_definitions/ga_staff_steps.rb:106',
            },
            result: {
              status: 'passed',
              duration: 121736814,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 23600,
                },
              },
            ],
          },
        ],
        after: [
          {
            match: {
              location: 'features/support/warden.rb:3',
            },
            result: {
              status: 'passed',
              duration: 26601,
            },
          },
          {
            match: {
              location: 'features/support/user_cleanup.rb:1',
            },
            result: {
              status: 'passed',
              duration: 9508526,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:7',
            },
            result: {
              status: 'passed',
              duration: 9901,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/email_spec-2.2.0/lib/email_spec/cucumber.rb:19',
            },
            result: {
              status: 'passed',
              duration: 8800,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:10',
            },
            result: {
              status: 'passed',
              duration: 38362309,
            },
          },
        ],
      },
      {
        id: 'assign-general-agency-staff-to-general-agency;adding-non-existing-person-as-general-agency-staff-to-general-agency',
        keyword: 'Scenario',
        name: 'Adding Non Existing person as General Agency Staff to General Agency',
        description: '',
        line: 54,
        type: 'scenario',
        before: [
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:14',
            },
            result: {
              status: 'passed',
              duration: 14400,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:22',
            },
            result: {
              status: 'passed',
              duration: 9000,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/email_spec-2.2.0/lib/email_spec/cucumber.rb:10',
            },
            result: {
              status: 'passed',
              duration: 145901,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:3',
            },
            result: {
              status: 'passed',
              duration: 11900,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache.rb:1',
            },
            result: {
              status: 'passed',
              duration: 21801,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache_clear.rb:1',
            },
            result: {
              status: 'passed',
              duration: 17304029,
            },
          },
          {
            match: {
              location: 'features/support/screenshots.rb:3',
            },
            result: {
              status: 'passed',
              duration: 52900,
            },
          },
        ],
        steps: [
          {
            keyword: 'Given ',
            name: 'there is a General Agency exists for District Agency Inc',
            line: 55,
            match: {
              location: 'features/support/worlds/general_agency_world.rb:49',
            },
            result: {
              status: 'passed',
              duration: 26641953,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 14900,
                },
              },
            ],
          },
          {
            keyword: 'Given ',
            name: 'the general agency feature is enabled',
            line: 56,
            match: {
              location: 'features/step_definitions/general_agency_steps.rb:3',
            },
            result: {
              status: 'passed',
              duration: 93302,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 6900,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'the staff Max Planck is primary ga staff for District Agency Inc',
            line: 58,
            match: {
              location: 'features/support/worlds/general_agency_world.rb:55',
            },
            result: {
              status: 'passed',
              duration: 160307425,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 15100,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'Max Planck logs on to the General Agency Portal',
            line: 59,
            match: {
              location: 'features/step_definitions/integration_steps.rb:444',
            },
            result: {
              status: 'passed',
              duration: 1036407637,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 16601,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'the primary staff clicks on the “Add General Agency Staff Role” button',
            line: 60,
            match: {
              location: 'features/step_definitions/ga_staff_steps.rb:85',
            },
            result: {
              status: 'passed',
              duration: 86628848,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 15700,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'a form appears that requires the primary staff to input First Name, Last Name, and DOB to submit',
            line: 61,
            match: {
              location: 'features/step_definitions/ga_staff_steps.rb:89',
            },
            result: {
              status: 'passed',
              duration: 60568903,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 24000,
                },
              },
            ],
          },
          {
            keyword: 'When ',
            name: 'the primary staff enters the First Name, Last Name, and DOB of an non existing user in EA',
            line: 62,
            match: {
              location: 'features/step_definitions/ga_staff_steps.rb:111',
            },
            result: {
              status: 'passed',
              duration: 220580323,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 22800,
                },
              },
            ],
          },
          {
            keyword: 'Then ',
            name: 'the primary staff will not be given a general agency staff role with the given General Agency Agency',
            line: 63,
            match: {
              location: 'features/step_definitions/ga_staff_steps.rb:117',
            },
            result: {
              status: 'passed',
              duration: 407224397,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 24500,
                },
              },
            ],
          },
        ],
        after: [
          {
            match: {
              location: 'features/support/warden.rb:3',
            },
            result: {
              status: 'passed',
              duration: 24600,
            },
          },
          {
            match: {
              location: 'features/support/user_cleanup.rb:1',
            },
            result: {
              status: 'passed',
              duration: 6741690,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:7',
            },
            result: {
              status: 'passed',
              duration: 10700,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/email_spec-2.2.0/lib/email_spec/cucumber.rb:19',
            },
            result: {
              status: 'passed',
              duration: 8400,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:10',
            },
            result: {
              status: 'passed',
              duration: 40333634,
            },
          },
        ],
      },
    ],
  },
  {
    uri: 'features/general_agencies/disabled_general_agency.feature',
    id: 'general-agency-is-disabled',
    keyword: 'Feature',
    name: 'General Agency is disabled',
    description: '',
    line: 1,
    elements: [
      {
        keyword: 'Background',
        name: 'Disable General Agency Feature',
        description: '',
        line: 2,
        type: 'background',
        before: [
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:14',
            },
            result: {
              status: 'passed',
              duration: 12601,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:22',
            },
            result: {
              status: 'passed',
              duration: 8400,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/email_spec-2.2.0/lib/email_spec/cucumber.rb:10',
            },
            result: {
              status: 'passed',
              duration: 151702,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:3',
            },
            result: {
              status: 'passed',
              duration: 13100,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache.rb:1',
            },
            result: {
              status: 'passed',
              duration: 21401,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache_clear.rb:1',
            },
            result: {
              status: 'passed',
              duration: 16998026,
            },
          },
          {
            match: {
              location: 'features/support/screenshots.rb:3',
            },
            result: {
              status: 'passed',
              duration: 51601,
            },
          },
        ],
        steps: [
          {
            keyword: 'Given ',
            name: 'the general agency feature is disabled',
            line: 3,
            match: {
              location: 'features/step_definitions/general_agency_steps.rb:7',
            },
            result: {
              status: 'passed',
              duration: 2418432,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 16500,
                },
              },
            ],
          },
          {
            keyword: 'Given ',
            name: 'all permissions are present',
            line: 4,
            match: {
              location: 'features/support/worlds/permissions_world.rb:123',
            },
            result: {
              status: 'passed',
              duration: 143186797,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 16300,
                },
              },
            ],
          },
        ],
      },
      {
        id: 'general-agency-is-disabled;main-general-agency-link-is-disabled',
        keyword: 'Scenario',
        name: 'Main General Agency Link is Disabled',
        description: '',
        line: 6,
        type: 'scenario',
        steps: [
          {
            keyword: 'When ',
            name: 'a non logged in user visits the Enroll home page',
            line: 7,
            match: {
              location: 'features/step_definitions/integration_steps.rb:13',
            },
            result: {
              status: 'passed',
              duration: 192170847,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 22801,
                },
              },
            ],
          },
          {
            keyword: 'Then ',
            name: 'they should not see any General Agency link',
            line: 8,
            match: {
              location: 'features/step_definitions/general_agency_steps.rb:33',
            },
            result: {
              status: 'passed',
              duration: 330998187,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 25701,
                },
              },
            ],
          },
        ],
        after: [
          {
            match: {
              location: 'features/support/warden.rb:3',
            },
            result: {
              status: 'passed',
              duration: 25900,
            },
          },
          {
            match: {
              location: 'features/support/user_cleanup.rb:1',
            },
            result: {
              status: 'passed',
              duration: 1871025,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:7',
            },
            result: {
              status: 'passed',
              duration: 9800,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/email_spec-2.2.0/lib/email_spec/cucumber.rb:19',
            },
            result: {
              status: 'passed',
              duration: 10000,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:10',
            },
            result: {
              status: 'passed',
              duration: 34064151,
            },
          },
        ],
      },
      {
        keyword: 'Background',
        name: 'Disable General Agency Feature',
        description: '',
        line: 2,
        type: 'background',
        before: [
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:14',
            },
            result: {
              status: 'passed',
              duration: 24601,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:22',
            },
            result: {
              status: 'passed',
              duration: 10500,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/email_spec-2.2.0/lib/email_spec/cucumber.rb:10',
            },
            result: {
              status: 'passed',
              duration: 143302,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:3',
            },
            result: {
              status: 'passed',
              duration: 11700,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache.rb:1',
            },
            result: {
              status: 'passed',
              duration: 21900,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache_clear.rb:1',
            },
            result: {
              status: 'passed',
              duration: 17123826,
            },
          },
          {
            match: {
              location: 'features/support/screenshots.rb:3',
            },
            result: {
              status: 'passed',
              duration: 47300,
            },
          },
        ],
        steps: [
          {
            keyword: 'Given ',
            name: 'the general agency feature is disabled',
            line: 3,
            match: {
              location: 'features/step_definitions/general_agency_steps.rb:7',
            },
            result: {
              status: 'passed',
              duration: 295704,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 10900,
                },
              },
            ],
          },
          {
            keyword: 'Given ',
            name: 'all permissions are present',
            line: 4,
            match: {
              location: 'features/support/worlds/permissions_world.rb:123',
            },
            result: {
              status: 'passed',
              duration: 155672666,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 15800,
                },
              },
            ],
          },
        ],
      },
      {
        id: 'general-agency-is-disabled;external-routing',
        keyword: 'Scenario',
        name: 'External Routing',
        description: '',
        line: 10,
        type: 'scenario',
        steps: [
          {
            keyword: 'When ',
            name: 'the user types in the GA registration URL',
            line: 11,
            match: {
              location: 'features/step_definitions/general_agency_steps.rb:20',
            },
            result: {
              status: 'passed',
              duration: 183650037,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 49300,
                },
              },
            ],
          },
          {
            keyword: 'Then ',
            name: 'the user will not be able to access GA Registration page',
            line: 12,
            match: {
              location: 'features/step_definitions/general_agency_steps.rb:28',
            },
            result: {
              status: 'passed',
              duration: 77795033,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 21500,
                },
              },
            ],
          },
        ],
        after: [
          {
            match: {
              location: 'features/support/warden.rb:3',
            },
            result: {
              status: 'passed',
              duration: 27100,
            },
          },
          {
            match: {
              location: 'features/support/user_cleanup.rb:1',
            },
            result: {
              status: 'passed',
              duration: 1760723,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:7',
            },
            result: {
              status: 'passed',
              duration: 10300,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/email_spec-2.2.0/lib/email_spec/cucumber.rb:19',
            },
            result: {
              status: 'passed',
              duration: 8300,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:10',
            },
            result: {
              status: 'passed',
              duration: 34436557,
            },
          },
        ],
      },
      {
        keyword: 'Background',
        name: 'Disable General Agency Feature',
        description: '',
        line: 2,
        type: 'background',
        before: [
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:14',
            },
            result: {
              status: 'passed',
              duration: 14201,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:22',
            },
            result: {
              status: 'passed',
              duration: 8300,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/email_spec-2.2.0/lib/email_spec/cucumber.rb:10',
            },
            result: {
              status: 'passed',
              duration: 139302,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:3',
            },
            result: {
              status: 'passed',
              duration: 12700,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache.rb:1',
            },
            result: {
              status: 'passed',
              duration: 18700,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache_clear.rb:1',
            },
            result: {
              status: 'passed',
              duration: 18996452,
            },
          },
          {
            match: {
              location: 'features/support/screenshots.rb:3',
            },
            result: {
              status: 'passed',
              duration: 48500,
            },
          },
        ],
        steps: [
          {
            keyword: 'Given ',
            name: 'the general agency feature is disabled',
            line: 3,
            match: {
              location: 'features/step_definitions/general_agency_steps.rb:7',
            },
            result: {
              status: 'passed',
              duration: 270903,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 10500,
                },
              },
            ],
          },
          {
            keyword: 'Given ',
            name: 'all permissions are present',
            line: 4,
            match: {
              location: 'features/support/worlds/permissions_world.rb:123',
            },
            result: {
              status: 'passed',
              duration: 148436770,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 14600,
                },
              },
            ],
          },
        ],
      },
      {
        id: 'general-agency-is-disabled;hbx-admin-portal-no-general-agencies-link',
        keyword: 'Scenario',
        name: 'HBX Admin portal No General Agencies link',
        description: '',
        line: 14,
        type: 'scenario',
        steps: [
          {
            keyword: 'Given ',
            name: 'that a user with a HBX staff role with HBX staff subrole exists and is logged in',
            line: 15,
            match: {
              location: 'features/support/worlds/user_world.rb:73',
            },
            result: {
              status: 'passed',
              duration: 707469291,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 14900,
                },
              },
            ],
          },
          {
            keyword: 'Given ',
            name: 'user visits the Hbx Portal',
            line: 16,
            match: {
              location: 'features/step_definitions/integration_steps.rb:467',
            },
            result: {
              status: 'passed',
              duration: 10576397684,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 26301,
                },
              },
            ],
          },
          {
            keyword: 'Then ',
            name: 'they should not see any General Agency link',
            line: 17,
            match: {
              location: 'features/step_definitions/general_agency_steps.rb:33',
            },
            result: {
              status: 'passed',
              duration: 473351019,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 52500,
                },
              },
            ],
          },
        ],
        after: [
          {
            match: {
              location: 'features/support/warden.rb:3',
            },
            result: {
              status: 'passed',
              duration: 27200,
            },
          },
          {
            match: {
              location: 'features/support/user_cleanup.rb:1',
            },
            result: {
              status: 'passed',
              duration: 5908179,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:7',
            },
            result: {
              status: 'passed',
              duration: 10600,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/email_spec-2.2.0/lib/email_spec/cucumber.rb:19',
            },
            result: {
              status: 'passed',
              duration: 8201,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:10',
            },
            result: {
              status: 'passed',
              duration: 38695816,
            },
          },
        ],
      },
      {
        keyword: 'Background',
        name: 'Disable General Agency Feature',
        description: '',
        line: 2,
        type: 'background',
        before: [
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:14',
            },
            result: {
              status: 'passed',
              duration: 14900,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:22',
            },
            result: {
              status: 'passed',
              duration: 9400,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/email_spec-2.2.0/lib/email_spec/cucumber.rb:10',
            },
            result: {
              status: 'passed',
              duration: 168203,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:3',
            },
            result: {
              status: 'passed',
              duration: 11500,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache.rb:1',
            },
            result: {
              status: 'passed',
              duration: 28701,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache_clear.rb:1',
            },
            result: {
              status: 'passed',
              duration: 19919466,
            },
          },
          {
            match: {
              location: 'features/support/screenshots.rb:3',
            },
            result: {
              status: 'passed',
              duration: 50801,
            },
          },
        ],
        steps: [
          {
            keyword: 'Given ',
            name: 'the general agency feature is disabled',
            line: 3,
            match: {
              location: 'features/step_definitions/general_agency_steps.rb:7',
            },
            result: {
              status: 'passed',
              duration: 275303,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 11700,
                },
              },
            ],
          },
          {
            keyword: 'Given ',
            name: 'all permissions are present',
            line: 4,
            match: {
              location: 'features/support/worlds/permissions_world.rb:123',
            },
            result: {
              status: 'passed',
              duration: 129669431,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 15800,
                },
              },
            ],
          },
        ],
      },
      {
        id: 'general-agency-is-disabled;broker-portal---no-general-agencies-link',
        keyword: 'Scenario',
        name: 'Broker portal - No General Agencies Link',
        description: '',
        line: 19,
        type: 'scenario',
        steps: [
          {
            keyword: 'Given ',
            name: 'there is a Broker Agency exists for District Brokers Inc',
            line: 20,
            match: {
              location: 'features/support/worlds/broker_agency_world.rb:97',
            },
            result: {
              status: 'passed',
              duration: 95844779,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 15900,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'the broker Max Planck is primary broker for District Brokers Inc',
            line: 21,
            match: {
              location: 'features/support/worlds/broker_agency_world.rb:116',
            },
            result: {
              status: 'passed',
              duration: 125001469,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 15000,
                },
              },
            ],
          },
          {
            keyword: 'When ',
            name: 'Max Planck logs on to the Broker Agency Portal',
            line: 22,
            match: {
              location: 'features/step_definitions/integration_steps.rb:444',
            },
            result: {
              status: 'passed',
              duration: 1077273782,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 18500,
                },
              },
            ],
          },
          {
            keyword: 'Then ',
            name: 'they should not see any General Agency link',
            line: 24,
            comments: [
              {
                value:
                  '# Need to double check there isnt a step after this to wherer the GA link is supposed to be',
                line: 23,
              },
            ],
            match: {
              location: 'features/step_definitions/general_agency_steps.rb:33',
            },
            result: {
              status: 'passed',
              duration: 408813658,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 23200,
                },
              },
            ],
          },
        ],
        after: [
          {
            match: {
              location: 'features/support/warden.rb:3',
            },
            result: {
              status: 'passed',
              duration: 25601,
            },
          },
          {
            match: {
              location: 'features/support/user_cleanup.rb:1',
            },
            result: {
              status: 'passed',
              duration: 6066881,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:7',
            },
            result: {
              status: 'passed',
              duration: 9200,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/email_spec-2.2.0/lib/email_spec/cucumber.rb:19',
            },
            result: {
              status: 'passed',
              duration: 8000,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:10',
            },
            result: {
              status: 'passed',
              duration: 35458974,
            },
          },
        ],
      },
      {
        keyword: 'Background',
        name: 'Disable General Agency Feature',
        description: '',
        line: 2,
        type: 'background',
        before: [
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:14',
            },
            result: {
              status: 'passed',
              duration: 14000,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:22',
            },
            result: {
              status: 'passed',
              duration: 8400,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/email_spec-2.2.0/lib/email_spec/cucumber.rb:10',
            },
            result: {
              status: 'passed',
              duration: 152102,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:3',
            },
            result: {
              status: 'passed',
              duration: 12700,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache.rb:1',
            },
            result: {
              status: 'passed',
              duration: 22400,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache_clear.rb:1',
            },
            result: {
              status: 'passed',
              duration: 20509774,
            },
          },
          {
            match: {
              location: 'features/support/screenshots.rb:3',
            },
            result: {
              status: 'passed',
              duration: 55401,
            },
          },
        ],
        steps: [
          {
            keyword: 'Given ',
            name: 'the general agency feature is disabled',
            line: 3,
            match: {
              location: 'features/step_definitions/general_agency_steps.rb:7',
            },
            result: {
              status: 'passed',
              duration: 279704,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 12800,
                },
              },
            ],
          },
          {
            keyword: 'Given ',
            name: 'all permissions are present',
            line: 4,
            match: {
              location: 'features/support/worlds/permissions_world.rb:123',
            },
            result: {
              status: 'passed',
              duration: 157649605,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 15200,
                },
              },
            ],
          },
        ],
      },
      {
        id: 'general-agency-is-disabled;bulk-notices-general-agencies-recipient-type',
        keyword: 'Scenario',
        name: 'Bulk Notices General Agencies recipient type',
        description: '',
        line: 26,
        type: 'scenario',
        steps: [
          {
            keyword: 'Given ',
            name: 'the shop market configuration is enabled',
            line: 27,
            match: {
              location: 'features/step_definitions/integration_steps.rb:350',
            },
            result: {
              status: 'passed',
              duration: 30294905,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 15701,
                },
              },
            ],
          },
          {
            keyword: 'Given ',
            name: 'an HBX admin exists',
            line: 28,
            match: {
              location: 'features/support/worlds/hbx_admin.rb:28',
            },
            result: {
              status: 'passed',
              duration: 1110632427,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 15200,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'the HBX admin is logged in',
            line: 29,
            match: {
              location: 'features/support/worlds/hbx_admin.rb:32',
            },
            result: {
              status: 'passed',
              duration: 466310612,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 14500,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'there is an employer ACME',
            line: 30,
            match: {
              location: 'features/support/worlds/employer_world.rb:56',
            },
            result: {
              status: 'passed',
              duration: 42135157,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 15900,
                },
              },
            ],
          },
          {
            keyword: 'Given ',
            name: 'Admin is on the new Bulk Notice view',
            line: 31,
            match: {
              location:
                'features/hbx_admin/step_definitions/bulk_notices_steps.rb:3',
            },
            result: {
              status: 'passed',
              duration: 292028663,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 20400,
                },
              },
            ],
          },
          {
            keyword: 'Then ',
            name: 'user should not see General Agencies option for bulk notice',
            line: 32,
            match: {
              location: 'features/step_definitions/general_agency_steps.rb:24',
            },
            result: {
              status: 'passed',
              duration: 61211910,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 20700,
                },
              },
            ],
          },
        ],
        after: [
          {
            match: {
              location: 'features/support/warden.rb:3',
            },
            result: {
              status: 'passed',
              duration: 25001,
            },
          },
          {
            match: {
              location: 'features/support/user_cleanup.rb:1',
            },
            result: {
              status: 'passed',
              duration: 7010993,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:7',
            },
            result: {
              status: 'passed',
              duration: 9601,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/email_spec-2.2.0/lib/email_spec/cucumber.rb:19',
            },
            result: {
              status: 'passed',
              duration: 7800,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:10',
            },
            result: {
              status: 'passed',
              duration: 34269154,
            },
          },
        ],
      },
    ],
  },
  {
    uri: 'features/general_agencies/ga_registration.feature',
    id: 'create-a-general-agency-profile',
    keyword: 'Feature',
    name: 'Create a General Agency Profile',
    description: '',
    line: 1,
    elements: [
      {
        keyword: 'Background',
        name: 'Enabling proper configuration',
        description: '',
        line: 3,
        type: 'background',
        before: [
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:14',
            },
            result: {
              status: 'passed',
              duration: 14400,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:22',
            },
            result: {
              status: 'passed',
              duration: 9300,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/email_spec-2.2.0/lib/email_spec/cucumber.rb:10',
            },
            result: {
              status: 'passed',
              duration: 222103,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:3',
            },
            result: {
              status: 'passed',
              duration: 13300,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache.rb:1',
            },
            result: {
              status: 'passed',
              duration: 21300,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache_clear.rb:1',
            },
            result: {
              status: 'passed',
              duration: 21965090,
            },
          },
          {
            match: {
              location: 'features/support/screenshots.rb:3',
            },
            result: {
              status: 'passed',
              duration: 51601,
            },
          },
        ],
        steps: [
          {
            keyword: 'Given ',
            name: 'the shop market configuration is enabled',
            line: 4,
            match: {
              location: 'features/step_definitions/integration_steps.rb:350',
            },
            result: {
              status: 'passed',
              duration: 36425182,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 18200,
                },
              },
            ],
          },
          {
            keyword: 'Given ',
            name: 'a CCA site exists with a benefit market',
            line: 5,
            match: {
              location: 'features/support/worlds/site_world.rb:26',
            },
            result: {
              status: 'passed',
              duration: 124319945,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 16401,
                },
              },
            ],
          },
          {
            keyword: 'Given ',
            name: 'EnrollRegistry hbx_admin_config feature is enabled',
            line: 6,
            match: {
              location: 'features/support/worlds/resource_registry_world.rb:41',
            },
            result: {
              status: 'passed',
              duration: 123002,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 12200,
                },
              },
            ],
          },
          {
            keyword: 'Given ',
            name: 'EnrollRegistry general_agency feature is enabled',
            line: 7,
            match: {
              location: 'features/support/worlds/resource_registry_world.rb:41',
            },
            result: {
              status: 'passed',
              duration: 53700,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 6700,
                },
              },
            ],
          },
        ],
      },
      {
        id: 'create-a-general-agency-profile;a-general-agency-submits-application',
        keyword: 'Scenario',
        name: 'A General Agency Submits Application',
        description: '',
        line: 9,
        type: 'scenario',
        steps: [
          {
            keyword: 'Given ',
            name: 'a general agency agent visits the DCHBX',
            line: 10,
            match: {
              location:
                'features/general_agencies/step_definitions/ga_steps.rb:11',
            },
            result: {
              status: 'passed',
              duration: 129178009,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 23100,
                },
              },
            ],
          },
          {
            keyword: 'When ',
            name: "they click the 'New General Agency' button",
            line: 11,
            match: {
              location:
                'features/general_agencies/step_definitions/ga_steps.rb:37',
            },
            result: {
              status: 'passed',
              duration: 60495600,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 18400,
                },
              },
            ],
          },
          {
            keyword: 'Then ',
            name: 'they should see the new general agency form',
            line: 12,
            match: {
              location:
                'features/general_agencies/step_definitions/ga_steps.rb:41',
            },
            result: {
              status: 'passed',
              duration: 50584770,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 19900,
                },
              },
            ],
          },
          {
            keyword: 'When ',
            name: "they complete the new general agency form and hit the 'Submit' button",
            line: 13,
            match: {
              location:
                'features/general_agencies/step_definitions/ga_steps.rb:46',
            },
            result: {
              status: 'passed',
              duration: 2200811116,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 23000,
                },
              },
            ],
          },
          {
            keyword: 'Then ',
            name: 'they should see a confirmation message',
            line: 14,
            match: {
              location:
                'features/general_agencies/step_definitions/ga_steps.rb:69',
            },
            result: {
              status: 'passed',
              duration: 119916886,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 28400,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'a pending approval status',
            line: 15,
            match: {
              location:
                'features/general_agencies/step_definitions/ga_steps.rb:73',
            },
            result: {
              status: 'passed',
              duration: 4074054,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 14900,
                },
              },
            ],
          },
        ],
        after: [
          {
            match: {
              location: 'features/support/warden.rb:3',
            },
            result: {
              status: 'passed',
              duration: 26400,
            },
          },
          {
            match: {
              location: 'features/support/user_cleanup.rb:1',
            },
            result: {
              status: 'passed',
              duration: 1424419,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:7',
            },
            result: {
              status: 'passed',
              duration: 10200,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/email_spec-2.2.0/lib/email_spec/cucumber.rb:19',
            },
            result: {
              status: 'passed',
              duration: 7601,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:10',
            },
            result: {
              status: 'passed',
              duration: 40594337,
            },
          },
        ],
      },
      {
        keyword: 'Background',
        name: 'Enabling proper configuration',
        description: '',
        line: 3,
        type: 'background',
        before: [
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:14',
            },
            result: {
              status: 'passed',
              duration: 14501,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:22',
            },
            result: {
              status: 'passed',
              duration: 8700,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/email_spec-2.2.0/lib/email_spec/cucumber.rb:10',
            },
            result: {
              status: 'passed',
              duration: 163002,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:3',
            },
            result: {
              status: 'passed',
              duration: 13300,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache.rb:1',
            },
            result: {
              status: 'passed',
              duration: 21800,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache_clear.rb:1',
            },
            result: {
              status: 'passed',
              duration: 25822641,
            },
          },
          {
            match: {
              location: 'features/support/screenshots.rb:3',
            },
            result: {
              status: 'passed',
              duration: 59100,
            },
          },
        ],
        steps: [
          {
            keyword: 'Given ',
            name: 'the shop market configuration is enabled',
            line: 4,
            match: {
              location: 'features/step_definitions/integration_steps.rb:350',
            },
            result: {
              status: 'passed',
              duration: 36990389,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 17700,
                },
              },
            ],
          },
          {
            keyword: 'Given ',
            name: 'a CCA site exists with a benefit market',
            line: 5,
            match: {
              location: 'features/support/worlds/site_world.rb:26',
            },
            result: {
              status: 'passed',
              duration: 124431046,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 17400,
                },
              },
            ],
          },
          {
            keyword: 'Given ',
            name: 'EnrollRegistry hbx_admin_config feature is enabled',
            line: 6,
            match: {
              location: 'features/support/worlds/resource_registry_world.rb:41',
            },
            result: {
              status: 'passed',
              duration: 167102,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 8800,
                },
              },
            ],
          },
          {
            keyword: 'Given ',
            name: 'EnrollRegistry general_agency feature is enabled',
            line: 7,
            match: {
              location: 'features/support/worlds/resource_registry_world.rb:41',
            },
            result: {
              status: 'passed',
              duration: 58001,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 6600,
                },
              },
            ],
          },
        ],
      },
      {
        id: 'create-a-general-agency-profile;a-general-agency-is-approved',
        keyword: 'Scenario',
        name: 'A General Agency is Approved',
        description: '',
        line: 17,
        type: 'scenario',
        steps: [
          {
            keyword: 'When ',
            name: 'that a user with a HBX staff role with HBX Staff subrole exists and is logged in',
            line: 18,
            match: {
              location: 'features/support/worlds/user_world.rb:73',
            },
            result: {
              status: 'passed',
              duration: 536245594,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 24200,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'a general agency, pending approval, exists',
            line: 19,
            match: {
              location: 'features/support/worlds/general_agency_world.rb:59',
            },
            result: {
              status: 'passed',
              duration: 113975508,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 15401,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'Hbx Admin is on Broker Index of the Admin Dashboard',
            line: 20,
            match: {
              location: 'features/support/worlds/broker_agency_world.rb:139',
            },
            result: {
              status: 'passed',
              duration: 363692212,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 26300,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'Hbx Admin is on Broker Index and clicks General Agencies',
            line: 21,
            match: {
              location:
                'features/general_agencies/step_definitions/ga_steps.rb:83',
            },
            result: {
              status: 'passed',
              duration: 350787241,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 51100,
                },
              },
            ],
          },
          {
            keyword: 'Then ',
            name: 'they should see the pending general agency',
            line: 22,
            match: {
              location:
                'features/general_agencies/step_definitions/ga_steps.rb:87',
            },
            result: {
              status: 'passed',
              duration: 79575853,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 24700,
                },
              },
            ],
          },
          {
            keyword: 'When ',
            name: 'they click the link of general agency',
            line: 23,
            match: {
              location:
                'features/general_agencies/step_definitions/ga_steps.rb:92',
            },
            result: {
              status: 'passed',
              duration: 110866366,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 16400,
                },
              },
            ],
          },
          {
            keyword: 'Then ',
            name: 'they should see the home of general agency',
            line: 24,
            match: {
              location:
                'features/general_agencies/step_definitions/ga_steps.rb:96',
            },
            result: {
              status: 'passed',
              duration: 179556375,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 24600,
                },
              },
            ],
          },
          {
            keyword: 'When ',
            name: 'they visit the list of staff',
            line: 25,
            match: {
              location:
                'features/general_agencies/step_definitions/ga_steps.rb:101',
            },
            result: {
              status: 'passed',
              duration: 87867463,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 17800,
                },
              },
            ],
          },
          {
            keyword: 'Then ',
            name: 'they should see the name of staff',
            line: 26,
            match: {
              location: 'features/support/worlds/general_agency_world.rb:65',
            },
            result: {
              status: 'passed',
              duration: 421459875,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 18501,
                },
              },
            ],
          },
          {
            keyword: 'When ',
            name: 'they approve the general agency',
            line: 27,
            match: {
              location:
                'features/general_agencies/step_definitions/ga_steps.rb:105',
            },
            result: {
              status: 'passed',
              duration: 394904825,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 36400,
                },
              },
            ],
          },
          {
            keyword: 'Then ',
            name: 'they should see updated status',
            line: 28,
            match: {
              location:
                'features/general_agencies/step_definitions/ga_steps.rb:110',
            },
            result: {
              status: 'passed',
              duration: 32936736,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 25400,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'the general agency should receive an email',
            line: 29,
            match: {
              location: 'features/support/worlds/general_agency_world.rb:75',
            },
            result: {
              status: 'passed',
              duration: 5927078,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 14900,
                },
              },
            ],
          },
        ],
        after: [
          {
            match: {
              location: 'features/support/warden.rb:3',
            },
            result: {
              status: 'passed',
              duration: 26301,
            },
          },
          {
            match: {
              location: 'features/support/user_cleanup.rb:1',
            },
            result: {
              status: 'passed',
              duration: 6243883,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:7',
            },
            result: {
              status: 'passed',
              duration: 9500,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/email_spec-2.2.0/lib/email_spec/cucumber.rb:19',
            },
            result: {
              status: 'passed',
              duration: 7900,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:10',
            },
            result: {
              status: 'passed',
              duration: 35537870,
            },
          },
        ],
      },
      {
        keyword: 'Background',
        name: 'Enabling proper configuration',
        description: '',
        line: 3,
        type: 'background',
        before: [
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:14',
            },
            result: {
              status: 'passed',
              duration: 14400,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:22',
            },
            result: {
              status: 'passed',
              duration: 8500,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/email_spec-2.2.0/lib/email_spec/cucumber.rb:10',
            },
            result: {
              status: 'passed',
              duration: 177602,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:3',
            },
            result: {
              status: 'passed',
              duration: 13400,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache.rb:1',
            },
            result: {
              status: 'passed',
              duration: 22301,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache_clear.rb:1',
            },
            result: {
              status: 'passed',
              duration: 22543398,
            },
          },
          {
            match: {
              location: 'features/support/screenshots.rb:3',
            },
            result: {
              status: 'passed',
              duration: 55901,
            },
          },
        ],
        steps: [
          {
            keyword: 'Given ',
            name: 'the shop market configuration is enabled',
            line: 4,
            match: {
              location: 'features/step_definitions/integration_steps.rb:350',
            },
            result: {
              status: 'passed',
              duration: 30752906,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 15100,
                },
              },
            ],
          },
          {
            keyword: 'Given ',
            name: 'a CCA site exists with a benefit market',
            line: 5,
            match: {
              location: 'features/support/worlds/site_world.rb:26',
            },
            result: {
              status: 'passed',
              duration: 122291018,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 161102,
                },
              },
            ],
          },
          {
            keyword: 'Given ',
            name: 'EnrollRegistry hbx_admin_config feature is enabled',
            line: 6,
            match: {
              location: 'features/support/worlds/resource_registry_world.rb:41',
            },
            result: {
              status: 'passed',
              duration: 126202,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 9000,
                },
              },
            ],
          },
          {
            keyword: 'Given ',
            name: 'EnrollRegistry general_agency feature is enabled',
            line: 7,
            match: {
              location: 'features/support/worlds/resource_registry_world.rb:41',
            },
            result: {
              status: 'passed',
              duration: 56600,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 7000,
                },
              },
            ],
          },
        ],
      },
      {
        id: 'create-a-general-agency-profile;a-general-agency-creates-an-account',
        keyword: 'Scenario',
        name: 'A General Agency Creates an Account',
        description: '',
        line: 31,
        type: 'scenario',
        steps: [
          {
            keyword: 'Given ',
            name: 'a general agency, approved, awaiting account creation, exists',
            line: 32,
            match: {
              location: 'features/support/worlds/general_agency_world.rb:80',
            },
            result: {
              status: 'passed',
              duration: 149005372,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 15601,
                },
              },
            ],
          },
          {
            keyword: 'When ',
            name: 'the HBX admin visits the link received in the approval email',
            line: 33,
            match: {
              location: 'features/support/worlds/general_agency_world.rb:87',
            },
            result: {
              status: 'passed',
              duration: 297224233,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 31801,
                },
              },
            ],
          },
          {
            keyword: 'Then ',
            name: 'they should see an account creation form',
            line: 34,
            match: {
              location:
                'features/general_agencies/step_definitions/ga_steps.rb:115',
            },
            result: {
              status: 'passed',
              duration: 37152092,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 19000,
                },
              },
            ],
          },
          {
            keyword: 'When ',
            name: "they complete the account creation form and hit the 'Submit' button",
            line: 35,
            match: {
              location:
                'features/general_agencies/step_definitions/ga_steps.rb:121',
            },
            result: {
              status: 'passed',
              duration: 790819163,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 25700,
                },
              },
            ],
          },
          {
            keyword: 'Then ',
            name: 'they should see a welcome message',
            line: 36,
            match: {
              location:
                'features/general_agencies/step_definitions/ga_steps.rb:129',
            },
            result: {
              status: 'passed',
              duration: 67902798,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 24000,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'they see the General Agency homepage',
            line: 37,
            match: {
              location:
                'features/general_agencies/step_definitions/ga_steps.rb:134',
            },
            result: {
              status: 'passed',
              duration: 51370880,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 23700,
                },
              },
            ],
          },
        ],
        after: [
          {
            match: {
              location: 'features/support/warden.rb:3',
            },
            result: {
              status: 'passed',
              duration: 29601,
            },
          },
          {
            match: {
              location: 'features/support/user_cleanup.rb:1',
            },
            result: {
              status: 'passed',
              duration: 18237741,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:7',
            },
            result: {
              status: 'passed',
              duration: 36200,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/email_spec-2.2.0/lib/email_spec/cucumber.rb:19',
            },
            result: {
              status: 'passed',
              duration: 9101,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:10',
            },
            result: {
              status: 'passed',
              duration: 41202545,
            },
          },
        ],
      },
    ],
  },
  {
    uri: 'features/general_agencies/update_general_agency_profile.feature',
    id: 'update-general-agency-profile',
    keyword: 'Feature',
    name: 'update general agency profile',
    description: '',
    line: 1,
    elements: [
      {
        id: 'update-general-agency-profile;reactivating-general-agency-staff-role',
        keyword: 'Scenario',
        name: 'Reactivating General Agency Staff Role',
        description: '',
        line: 27,
        type: 'scenario',
        comments: [
          {
            value:
              '# Background: A general agency clicks on edit general agency and updates information',
            line: 3,
          },
          {
            value: '# Given a CCA site exists with a benefit market',
            line: 4,
          },
          {
            value: '# Given all permissions are present',
            line: 5,
          },
          {
            value: '# Given a general agency, approved, confirmed, exists',
            line: 6,
          },
          {
            value: '# And the ga login in',
            line: 7,
          },
          {
            value: '# And the ga should see the home of ga',
            line: 8,
          },
          {
            value: '# Scenario: A general agency updated information',
            line: 10,
          },
          {
            value: '# When the ga clicks on EDIT GENERAL AGENCY button/link',
            line: 11,
          },
          {
            value:
              '# Then the ga should see ga profile form to update informaton',
            line: 12,
          },
          {
            value:
              '# When the ga enters personal information or general agency information or office location',
            line: 13,
          },
          {
            value: '# And the ga clicks update general agency',
            line: 14,
          },
          {
            value: '# Then the ga should see successful message.',
            line: 15,
          },
          {
            value: '# Scenario: A general agency check for updated information',
            line: 17,
          },
          {
            value: '# When the ga clicks on EDIT GENERAL AGENCY button/link',
            line: 18,
          },
          {
            value:
              '# Then the ga should see ga profile form to update informaton',
            line: 19,
          },
          {
            value:
              '# When the ga enters personal information or general agency information or office location',
            line: 20,
          },
          {
            value: '# And the ga clicks update general agency',
            line: 21,
          },
          {
            value: '# Then the ga should see successful message.',
            line: 22,
          },
          {
            value: '# And the ga should see updated informaton on page',
            line: 23,
          },
          {
            value: '# When the ga clicks on EDIT GENERAL AGENCY button/link',
            line: 24,
          },
          {
            value: '# Then the ga should see updated informaton on page',
            line: 25,
          },
        ],
        before: [
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:14',
            },
            result: {
              status: 'passed',
              duration: 13400,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:22',
            },
            result: {
              status: 'passed',
              duration: 9100,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/email_spec-2.2.0/lib/email_spec/cucumber.rb:10',
            },
            result: {
              status: 'passed',
              duration: 184502,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:3',
            },
            result: {
              status: 'passed',
              duration: 28400,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache.rb:1',
            },
            result: {
              status: 'passed',
              duration: 23201,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache_clear.rb:1',
            },
            result: {
              status: 'passed',
              duration: 40982243,
            },
          },
          {
            match: {
              location: 'features/support/screenshots.rb:3',
            },
            result: {
              status: 'passed',
              duration: 55901,
            },
          },
        ],
        steps: [
          {
            keyword: 'Given ',
            name: 'a CCA site exists with a benefit market',
            line: 28,
            match: {
              location: 'features/support/worlds/site_world.rb:26',
            },
            result: {
              status: 'passed',
              duration: 175508124,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 59701,
                },
              },
            ],
          },
          {
            keyword: 'Given ',
            name: 'the general agency feature is enabled',
            line: 29,
            match: {
              location: 'features/step_definitions/general_agency_steps.rb:3',
            },
            result: {
              status: 'passed',
              duration: 150202,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 7600,
                },
              },
            ],
          },
          {
            keyword: 'Given ',
            name: 'all permissions are present',
            line: 31,
            match: {
              location: 'features/support/worlds/permissions_world.rb:123',
            },
            result: {
              status: 'passed',
              duration: 122022116,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 16300,
                },
              },
            ],
          },
          {
            keyword: 'Given ',
            name: 'there is a General Agency exists for District Agency Inc',
            line: 32,
            match: {
              location: 'features/support/worlds/general_agency_world.rb:49',
            },
            result: {
              status: 'passed',
              duration: 23581912,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 14800,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'the staff Max Planck is primary ga staff for District Agency Inc',
            line: 33,
            match: {
              location: 'features/support/worlds/general_agency_world.rb:55',
            },
            result: {
              status: 'passed',
              duration: 191512936,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 15800,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'person record exists for John Doe',
            line: 34,
            match: {
              location: 'features/support/worlds/broker_agency_world.rb:162',
            },
            result: {
              status: 'passed',
              duration: 65677170,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 14700,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'Max Planck logs on to the General Agency Portal',
            line: 35,
            match: {
              location: 'features/step_definitions/integration_steps.rb:444',
            },
            result: {
              status: 'passed',
              duration: 1034823405,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 19100,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'the primary staff clicks on the “Add General Agency Staff Role” button',
            line: 36,
            match: {
              location: 'features/step_definitions/ga_staff_steps.rb:85',
            },
            result: {
              status: 'passed',
              duration: 91044706,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 18800,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'a form appears that requires the primary staff to input First Name, Last Name, and DOB to submit',
            line: 37,
            match: {
              location: 'features/step_definitions/ga_staff_steps.rb:89',
            },
            result: {
              status: 'passed',
              duration: 81948385,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 23200,
                },
              },
            ],
          },
          {
            keyword: 'When ',
            name: 'the primary staff enters the First Name, Last Name, and DOB of existing user John Doe',
            line: 38,
            match: {
              location: 'features/step_definitions/ga_staff_steps.rb:95',
            },
            result: {
              status: 'passed',
              duration: 272103004,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 23300,
                },
              },
            ],
          },
          {
            keyword: 'Then ',
            name: 'the primary staff will be given a general agency staff role with the given General Agency Agency',
            line: 39,
            match: {
              location: 'features/step_definitions/ga_staff_steps.rb:102',
            },
            result: {
              status: 'passed',
              duration: 393783315,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 25100,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'the primary staff will now appear within the “General Agency Staff” table as Active and Linked',
            line: 40,
            match: {
              location: 'features/step_definitions/ga_staff_steps.rb:106',
            },
            result: {
              status: 'passed',
              duration: 137866826,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 114702,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'user clicks the trash icon to remove a general agency role',
            line: 42,
            comments: [
              {
                value:
                  '# Given that a user with a HBX staff role with Super Admin subrole exists and is logged in',
                line: 41,
              },
            ],
            match: {
              location:
                'features/general_agencies/step_definitions/ga_steps.rb:15',
            },
            result: {
              status: 'passed',
              duration: 443984180,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 25600,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'user clicks Add General Agency Staff Role',
            line: 43,
            match: {
              location:
                'features/general_agencies/step_definitions/ga_steps.rb:20',
            },
            result: {
              status: 'passed',
              duration: 101257141,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 17500,
                },
              },
            ],
          },
          {
            keyword: 'And ',
            name: 'user enters information for that terminated general agency staff and clicks save',
            line: 44,
            match: {
              location:
                'features/general_agencies/step_definitions/ga_steps.rb:29',
            },
            result: {
              status: 'passed',
              duration: 612835216,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 24301,
                },
              },
            ],
          },
          {
            keyword: 'Then ',
            name: 'the terminated general agency staff role will be reactivated',
            line: 45,
            match: {
              location:
                'features/general_agencies/step_definitions/ga_steps.rb:24',
            },
            result: {
              status: 'passed',
              duration: 4445159,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 16701,
                },
              },
            ],
          },
        ],
        after: [
          {
            match: {
              location: 'features/support/warden.rb:3',
            },
            result: {
              status: 'passed',
              duration: 25901,
            },
          },
          {
            match: {
              location: 'features/support/user_cleanup.rb:1',
            },
            result: {
              status: 'passed',
              duration: 11752256,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:7',
            },
            result: {
              status: 'passed',
              duration: 11100,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/email_spec-2.2.0/lib/email_spec/cucumber.rb:19',
            },
            result: {
              status: 'passed',
              duration: 38901,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:10',
            },
            result: {
              status: 'passed',
              duration: 43553177,
            },
          },
        ],
      },
    ],
  },
];
