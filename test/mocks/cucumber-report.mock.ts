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
              duration: 17_000,
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
              duration: 49_800,
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
              duration: 28_900,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache_clear.rb:1',
            },
            result: {
              status: 'passed',
              duration: 7_966_608,
            },
          },
          {
            match: {
              location: 'features/support/screenshots.rb:3',
            },
            result: {
              status: 'passed',
              duration: 58_000,
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
              duration: 35_128_578,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 20_400,
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
              duration: 94_402,
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
              duration: 98_401,
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
              duration: 1_393_568_762,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 15_500,
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
              duration: 23_362_518,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 15_601,
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
              duration: 558_610_001,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 24_500,
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
              duration: 251_523_022,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 18_900,
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
              duration: 105_452_772_532,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 32_800,
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
              duration: 88_758_187,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 19_800,
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
              duration: 5_034_895_487,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 47_001,
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
              duration: 37_307_657,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 18_601,
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
              duration: 617_925_260,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 26_900,
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
              duration: 204_487_701,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 17_000,
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
              duration: 144_997_574,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 29_000,
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
              duration: 295_358_113,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 22_300,
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
              duration: 1_250_877_403,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 18_900,
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
              duration: 201_361_663,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 24_800,
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
              duration: 46_512_869,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 23_500,
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
              duration: 188_196_902,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 25_300,
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
              duration: 88_714_485,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 18_001,
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
              duration: 323_666_460,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 32_900,
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
              duration: 873_211,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 17_600,
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
              duration: 584_067_846,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 23_601,
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
              duration: 240_726_745,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 25_601,
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
              duration: 29_666_163,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 100_401,
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
              duration: 869_455_537,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 24_400,
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
              duration: 70_099_458,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 24_300,
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
              duration: 52_319_740,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 23_700,
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
              duration: 619_998_253,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 38_701,
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
              duration: 1_001_836_379,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 21_001,
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
              duration: 457_300_661,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 23_701,
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
              duration: 124_808_154,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 25_000,
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
              duration: 806_595_891,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 24_600,
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
              duration: 34_100,
            },
          },
          {
            match: {
              location: 'features/support/user_cleanup.rb:1',
            },
            result: {
              status: 'passed',
              duration: 12_642_167,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:7',
            },
            result: {
              status: 'passed',
              duration: 17_000,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/email_spec-2.2.0/lib/email_spec/cucumber.rb:19',
            },
            result: {
              status: 'passed',
              duration: 10_700,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:10',
            },
            result: {
              status: 'passed',
              duration: 51_366_181,
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
              duration: 14_100,
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
              duration: 167_102,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:3',
            },
            result: {
              status: 'passed',
              duration: 12_100,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache.rb:1',
            },
            result: {
              status: 'passed',
              duration: 25_101,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache_clear.rb:1',
            },
            result: {
              status: 'passed',
              duration: 17_233_829,
            },
          },
          {
            match: {
              location: 'features/support/screenshots.rb:3',
            },
            result: {
              status: 'passed',
              duration: 63_801,
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
              duration: 26_738_555,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 15_101,
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
              duration: 97_302,
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
              duration: 177_781_656,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 16_200,
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
              duration: 57_962_968,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 15_700,
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
              duration: 1_025_344_390,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 17_800,
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
              duration: 98_219_402,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 17_400,
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
              duration: 121_319_808,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 20_701,
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
              duration: 223_872_668,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 23_401,
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
              duration: 357_223_434,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 24_401,
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
              duration: 121_736_814,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 23_600,
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
              duration: 26_601,
            },
          },
          {
            match: {
              location: 'features/support/user_cleanup.rb:1',
            },
            result: {
              status: 'passed',
              duration: 9_508_526,
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
              duration: 38_362_309,
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
              duration: 14_400,
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
              duration: 145_901,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:3',
            },
            result: {
              status: 'passed',
              duration: 11_900,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache.rb:1',
            },
            result: {
              status: 'passed',
              duration: 21_801,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache_clear.rb:1',
            },
            result: {
              status: 'passed',
              duration: 17_304_029,
            },
          },
          {
            match: {
              location: 'features/support/screenshots.rb:3',
            },
            result: {
              status: 'passed',
              duration: 52_900,
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
              duration: 26_641_953,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 14_900,
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
              duration: 93_302,
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
              duration: 160_307_425,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 15_100,
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
              duration: 1_036_407_637,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 16_601,
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
              duration: 86_628_848,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 15_700,
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
              duration: 60_568_903,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 24_000,
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
              duration: 220_580_323,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 22_800,
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
              duration: 407_224_397,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 24_500,
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
              duration: 24_600,
            },
          },
          {
            match: {
              location: 'features/support/user_cleanup.rb:1',
            },
            result: {
              status: 'passed',
              duration: 6_741_690,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:7',
            },
            result: {
              status: 'passed',
              duration: 10_700,
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
              duration: 40_333_634,
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
              duration: 12_601,
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
              duration: 151_702,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:3',
            },
            result: {
              status: 'passed',
              duration: 13_100,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache.rb:1',
            },
            result: {
              status: 'passed',
              duration: 21_401,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache_clear.rb:1',
            },
            result: {
              status: 'passed',
              duration: 16_998_026,
            },
          },
          {
            match: {
              location: 'features/support/screenshots.rb:3',
            },
            result: {
              status: 'passed',
              duration: 51_601,
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
              duration: 2_418_432,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 16_500,
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
              duration: 143_186_797,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 16_300,
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
              duration: 192_170_847,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 22_801,
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
              duration: 330_998_187,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 25_701,
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
              duration: 25_900,
            },
          },
          {
            match: {
              location: 'features/support/user_cleanup.rb:1',
            },
            result: {
              status: 'passed',
              duration: 1_871_025,
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
              duration: 10_000,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:10',
            },
            result: {
              status: 'passed',
              duration: 34_064_151,
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
              duration: 24_601,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:22',
            },
            result: {
              status: 'passed',
              duration: 10_500,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/email_spec-2.2.0/lib/email_spec/cucumber.rb:10',
            },
            result: {
              status: 'passed',
              duration: 143_302,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:3',
            },
            result: {
              status: 'passed',
              duration: 11_700,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache.rb:1',
            },
            result: {
              status: 'passed',
              duration: 21_900,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache_clear.rb:1',
            },
            result: {
              status: 'passed',
              duration: 17_123_826,
            },
          },
          {
            match: {
              location: 'features/support/screenshots.rb:3',
            },
            result: {
              status: 'passed',
              duration: 47_300,
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
              duration: 295_704,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 10_900,
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
              duration: 155_672_666,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 15_800,
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
              duration: 183_650_037,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 49_300,
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
              duration: 77_795_033,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 21_500,
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
              duration: 27_100,
            },
          },
          {
            match: {
              location: 'features/support/user_cleanup.rb:1',
            },
            result: {
              status: 'passed',
              duration: 1_760_723,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:7',
            },
            result: {
              status: 'passed',
              duration: 10_300,
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
              duration: 34_436_557,
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
              duration: 14_201,
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
              duration: 139_302,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:3',
            },
            result: {
              status: 'passed',
              duration: 12_700,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache.rb:1',
            },
            result: {
              status: 'passed',
              duration: 18_700,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache_clear.rb:1',
            },
            result: {
              status: 'passed',
              duration: 18_996_452,
            },
          },
          {
            match: {
              location: 'features/support/screenshots.rb:3',
            },
            result: {
              status: 'passed',
              duration: 48_500,
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
              duration: 270_903,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 10_500,
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
              duration: 148_436_770,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 14_600,
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
              duration: 707_469_291,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 14_900,
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
              duration: 10_576_397_684,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 26_301,
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
              duration: 473_351_019,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 52_500,
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
              duration: 27_200,
            },
          },
          {
            match: {
              location: 'features/support/user_cleanup.rb:1',
            },
            result: {
              status: 'passed',
              duration: 5_908_179,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:7',
            },
            result: {
              status: 'passed',
              duration: 10_600,
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
              duration: 38_695_816,
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
              duration: 14_900,
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
              duration: 168_203,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:3',
            },
            result: {
              status: 'passed',
              duration: 11_500,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache.rb:1',
            },
            result: {
              status: 'passed',
              duration: 28_701,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache_clear.rb:1',
            },
            result: {
              status: 'passed',
              duration: 19_919_466,
            },
          },
          {
            match: {
              location: 'features/support/screenshots.rb:3',
            },
            result: {
              status: 'passed',
              duration: 50_801,
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
              duration: 275_303,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 11_700,
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
              duration: 129_669_431,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 15_800,
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
              duration: 95_844_779,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 15_900,
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
              duration: 125_001_469,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 15_000,
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
              duration: 1_077_273_782,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 18_500,
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
              duration: 408_813_658,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 23_200,
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
              duration: 25_601,
            },
          },
          {
            match: {
              location: 'features/support/user_cleanup.rb:1',
            },
            result: {
              status: 'passed',
              duration: 6_066_881,
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
              duration: 35_458_974,
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
              duration: 14_000,
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
              duration: 152_102,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:3',
            },
            result: {
              status: 'passed',
              duration: 12_700,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache.rb:1',
            },
            result: {
              status: 'passed',
              duration: 22_400,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache_clear.rb:1',
            },
            result: {
              status: 'passed',
              duration: 20_509_774,
            },
          },
          {
            match: {
              location: 'features/support/screenshots.rb:3',
            },
            result: {
              status: 'passed',
              duration: 55_401,
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
              duration: 279_704,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 12_800,
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
              duration: 157_649_605,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 15_200,
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
              duration: 30_294_905,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 15_701,
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
              duration: 1_110_632_427,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 15_200,
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
              duration: 466_310_612,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 14_500,
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
              duration: 42_135_157,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 15_900,
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
              duration: 292_028_663,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 20_400,
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
              duration: 61_211_910,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 20_700,
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
              duration: 25_001,
            },
          },
          {
            match: {
              location: 'features/support/user_cleanup.rb:1',
            },
            result: {
              status: 'passed',
              duration: 7_010_993,
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
              duration: 34_269_154,
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
              duration: 14_400,
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
              duration: 222_103,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:3',
            },
            result: {
              status: 'passed',
              duration: 13_300,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache.rb:1',
            },
            result: {
              status: 'passed',
              duration: 21_300,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache_clear.rb:1',
            },
            result: {
              status: 'passed',
              duration: 21_965_090,
            },
          },
          {
            match: {
              location: 'features/support/screenshots.rb:3',
            },
            result: {
              status: 'passed',
              duration: 51_601,
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
              duration: 36_425_182,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 18_200,
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
              duration: 124_319_945,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 16_401,
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
              duration: 123_002,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 12_200,
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
              duration: 53_700,
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
              duration: 129_178_009,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 23_100,
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
              duration: 60_495_600,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 18_400,
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
              duration: 50_584_770,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 19_900,
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
              duration: 2_200_811_116,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 23_000,
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
              duration: 119_916_886,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 28_400,
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
              duration: 4_074_054,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 14_900,
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
              duration: 26_400,
            },
          },
          {
            match: {
              location: 'features/support/user_cleanup.rb:1',
            },
            result: {
              status: 'passed',
              duration: 1_424_419,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:7',
            },
            result: {
              status: 'passed',
              duration: 10_200,
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
              duration: 40_594_337,
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
              duration: 14_501,
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
              duration: 163_002,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:3',
            },
            result: {
              status: 'passed',
              duration: 13_300,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache.rb:1',
            },
            result: {
              status: 'passed',
              duration: 21_800,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache_clear.rb:1',
            },
            result: {
              status: 'passed',
              duration: 25_822_641,
            },
          },
          {
            match: {
              location: 'features/support/screenshots.rb:3',
            },
            result: {
              status: 'passed',
              duration: 59_100,
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
              duration: 36_990_389,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 17_700,
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
              duration: 124_431_046,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 17_400,
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
              duration: 167_102,
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
              duration: 58_001,
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
              duration: 536_245_594,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 24_200,
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
              duration: 113_975_508,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 15_401,
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
              duration: 363_692_212,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 26_300,
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
              duration: 350_787_241,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 51_100,
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
              duration: 79_575_853,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 24_700,
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
              duration: 110_866_366,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 16_400,
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
              duration: 179_556_375,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 24_600,
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
              duration: 87_867_463,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 17_800,
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
              duration: 421_459_875,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 18_501,
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
              duration: 394_904_825,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 36_400,
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
              duration: 32_936_736,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 25_400,
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
              duration: 5_927_078,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 14_900,
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
              duration: 26_301,
            },
          },
          {
            match: {
              location: 'features/support/user_cleanup.rb:1',
            },
            result: {
              status: 'passed',
              duration: 6_243_883,
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
              duration: 35_537_870,
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
              duration: 14_400,
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
              duration: 177_602,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:3',
            },
            result: {
              status: 'passed',
              duration: 13_400,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache.rb:1',
            },
            result: {
              status: 'passed',
              duration: 22_301,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache_clear.rb:1',
            },
            result: {
              status: 'passed',
              duration: 22_543_398,
            },
          },
          {
            match: {
              location: 'features/support/screenshots.rb:3',
            },
            result: {
              status: 'passed',
              duration: 55_901,
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
              duration: 30_752_906,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 15_100,
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
              duration: 122_291_018,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 161_102,
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
              duration: 126_202,
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
              duration: 56_600,
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
              duration: 149_005_372,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 15_601,
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
              duration: 297_224_233,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 31_801,
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
              duration: 37_152_092,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 19_000,
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
              duration: 790_819_163,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 25_700,
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
              duration: 67_902_798,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 24_000,
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
              duration: 51_370_880,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 23_700,
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
              duration: 29_601,
            },
          },
          {
            match: {
              location: 'features/support/user_cleanup.rb:1',
            },
            result: {
              status: 'passed',
              duration: 18_237_741,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:7',
            },
            result: {
              status: 'passed',
              duration: 36_200,
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
              duration: 41_202_545,
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
              duration: 13_400,
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
              duration: 184_502,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:3',
            },
            result: {
              status: 'passed',
              duration: 28_400,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache.rb:1',
            },
            result: {
              status: 'passed',
              duration: 23_201,
            },
          },
          {
            match: {
              location: 'features/support/rails_cache_clear.rb:1',
            },
            result: {
              status: 'passed',
              duration: 40_982_243,
            },
          },
          {
            match: {
              location: 'features/support/screenshots.rb:3',
            },
            result: {
              status: 'passed',
              duration: 55_901,
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
              duration: 175_508_124,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 59_701,
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
              duration: 150_202,
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
              duration: 122_022_116,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 16_300,
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
              duration: 23_581_912,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 14_800,
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
              duration: 191_512_936,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 15_800,
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
              duration: 65_677_170,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 14_700,
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
              duration: 1_034_823_405,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 19_100,
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
              duration: 91_044_706,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 18_800,
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
              duration: 81_948_385,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 23_200,
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
              duration: 272_103_004,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 23_300,
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
              duration: 393_783_315,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 25_100,
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
              duration: 137_866_826,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 114_702,
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
              duration: 443_984_180,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 25_600,
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
              duration: 101_257_141,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 17_500,
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
              duration: 612_835_216,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 24_301,
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
              duration: 4_445_159,
            },
            after: [
              {
                match: {
                  location:
                    'features/step_definitions/employer_profile_steps.rb:315',
                },
                result: {
                  status: 'passed',
                  duration: 16_701,
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
              duration: 25_901,
            },
          },
          {
            match: {
              location: 'features/support/user_cleanup.rb:1',
            },
            result: {
              status: 'passed',
              duration: 11_752_256,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-screenshot-1.0.24/lib/capybara-screenshot/cucumber.rb:7',
            },
            result: {
              status: 'passed',
              duration: 11_100,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/email_spec-2.2.0/lib/email_spec/cucumber.rb:19',
            },
            result: {
              status: 'passed',
              duration: 38_901,
            },
          },
          {
            match: {
              location:
                'vendor/bundle/ruby/2.5.0/gems/capybara-3.31.0/lib/capybara/cucumber.rb:10',
            },
            result: {
              status: 'passed',
              duration: 43_553_177,
            },
          },
        ],
      },
    ],
  },
];
