import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent} from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { EventsComponent } from './components/events/events.component';
import { CompetitionLeagueComponent } from './components/leagues/competition-league/competition-league.component';
import { UysaStateCompetitionComponent } from './components/leagues/uysa-state-competition/uysa-state-competition.component';
import { RecreationComponent } from './components/recreation/recreation.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegistrationComponent } from './components/recreation/registration/registration.component';
import { CacheValleyCupComponent } from './components/events/cache-valley-cup/cache-valley-cup.component';
import { UpcomingEventsComponent } from './components/events/upcoming-events/upcoming-events.component';
import { CacheValleyMiniCupComponent } from './components/events/cache-valley-mini-cup/cache-valley-mini-cup.component';
import { SoccerExpoComponent } from './components/events/soccer-expo/soccer-expo.component';
import { AnnualGeneralMeetingComponent } from './components/events/annual-general-meeting/annual-general-meeting.component';
import { DownloadsComponent } from './components/resources/downloads/downloads.component';
import { CoachesComponent } from './components/resources/coaches/coaches.component';
import { PlayersComponent } from './components/resources/players/players.component';
import { ParentsComponent } from './components/resources/parents/parents.component';
import { GearComponent } from './components/resources/gear/gear.component';
import { FundraisingComponent } from './components/resources/fundraising/fundraising.component';
import { ArticlesComponent } from './components/resources/articles/articles.component';
import { RefereesComponent } from './components/resources/referees/referees.component';
import { SchedulesComponent } from './components/leagues/competition-league/schedules/schedules.component';
import { RegistrationInfoComponent } from './components/leagues/competition-league/registration-info/registration-info.component';
import { LeagueResultsComponent } from './components/leagues/competition-league/league-results/league-results.component';
import { TryoutInfoComponent } from './components/leagues/competition-league/tryout-info/tryout-info.component';
import { TryoutAdFormComponent } from './components/leagues/competition-league/tryout-ad-form/tryout-ad-form.component';
import { UysaScheduleComponent } from './components/leagues/uysa-state-competition/uysa-schedule/uysa-schedule.component';
import { UysaRegistrationInfoComponent } from './components/leagues/uysa-state-competition/uysa-registration-info/uysa-registration-info.component';
import { UysaLeagueResultsComponent } from './components/leagues/uysa-state-competition/uysa-league-results/uysa-league-results.component';
import { UysaTryoutInfoComponent } from './components/leagues/uysa-state-competition/uysa-tryout-info/uysa-tryout-info.component';
import { UysaTryoutAdFormComponent } from './components/leagues/uysa-state-competition/uysa-tryout-ad-form/uysa-tryout-ad-form.component';
import { FaqComponent } from './components/faq/faq.component';
import { CupRegistrationComponent } from './components/events/cache-valley-cup/cup-registration/cup-registration.component';
import { CupSchedulesComponent } from './components/events/cache-valley-cup/cup-schedules/cup-schedules.component';
import { CupLocationComponent } from './components/events/cache-valley-cup/cup-location/cup-location.component';
import { CupCarnivalComponent } from './components/events/cache-valley-cup/cup-carnival/cup-carnival.component';
import { CupRulesComponent } from './components/events/cache-valley-cup/cup-rules/cup-rules.component';
import { CupDirectionsComponent } from './components/events/cache-valley-cup/cup-directions/cup-directions.component';
import { BairLeadLaRoccaComponent } from './components/resources/articles/bair-lead-la-rocca/bair-lead-la-rocca.component';
import { BannerSeasonComponent } from './components/resources/articles/banner-season/banner-season.component';
import { CoachingLicensesComponent } from './components/resources/articles/coaching-licenses/coaching-licenses.component';
import { CvcGrowsComponent } from './components/resources/articles/cvc-grows/cvc-grows.component';
import { GirlsTeamComponent } from './components/resources/articles/girls-team/girls-team.component';
import { HandballComponent } from './components/resources/articles/handball/handball.component';
import { InterviewComponent } from './components/resources/articles/interview/interview.component';
import { KentonComponent } from './components/resources/articles/kenton/kenton.component';
import { LocalTeamsComponent } from './components/resources/articles/local-teams/local-teams.component';
import { MonthlyNewsletterComponent } from './components/resources/articles/monthly-newsletter/monthly-newsletter.component';
import { NewLogoComponent } from './components/resources/articles/new-logo/new-logo.component';
import { PersonalFoulParentsComponent } from './components/resources/articles/personal-foul-parents/personal-foul-parents.component';
import { PresidentsCupComponent } from './components/resources/articles/presidents-cup/presidents-cup.component';
import { RefBigTimeComponent } from './components/resources/articles/ref-big-time/ref-big-time.component';
import { RslLoganFacilityComponent } from './components/resources/articles/rsl-logan-facility/rsl-logan-facility.component';
import { RslSoundersComponent } from './components/resources/articles/rsl-sounders/rsl-sounders.component';
import { SadNewsComponent } from './components/resources/articles/sad-news/sad-news.component';
import { StateCompTryoutsComponent } from './components/resources/articles/state-comp-tryouts/state-comp-tryouts.component';
import { SvSophmoreComponent } from './components/resources/articles/sv-sophmore/sv-sophmore.component';
import { TeachPrinciplesComponent } from './components/resources/articles/teach-principles/teach-principles.component';
import { TotalFootballComponent } from './components/resources/articles/total-football/total-football.component';
import { UsuSoccerComponent } from './components/resources/articles/usu-soccer/usu-soccer.component';
import { UysaChampionshipComponent } from './components/resources/articles/uysa-championship/uysa-championship.component';
import { UysaChangesComponent } from './components/resources/articles/uysa-changes/uysa-changes.component';


export const router: Routes = [
    { 
      path: '', 
      redirectTo: 'home', 
      pathMatch: 'full' 
    },
    { 
      path: 'home', 
      component: HomeComponent 
    },
    {
      path: 'about', 
      component: AboutComponent 
    },
    { 
      path: 'resources', 
      component: ResourcesComponent,
      children: [
        {
          path: '',
        redirectTo: 'resources',
        pathMatch: 'full'
        },
        {
          path: 'downloads',
          component: DownloadsComponent
        },
        {
          path: 'coaches',
          component: CoachesComponent
        },
        {
          path: 'players',
          component: PlayersComponent
        },
        {
          path: 'parents',
          component: ParentsComponent
        },
        {
          path: 'gear',
          component: GearComponent
        },
        {
          path: 'fundraising',
          component: FundraisingComponent
        },
        {
          path: 'articles',
          component: ArticlesComponent,
          children: [
            {
              path: '',
              redirectTo: 'resources/articles',
              pathMatch: 'full'
            },
            {
              path: 'bairLaRocca',
              component: BairLeadLaRoccaComponent
            },
            {
              path: 'bannerSeason',
              component: BannerSeasonComponent
            },
            {
              path: 'coachingLicenses',
              component: CoachingLicensesComponent
            },
            {
              path: 'cvcGrows',
              component: CvcGrowsComponent
            },
            {
              path: 'girlsTeam',
              component: GirlsTeamComponent
            },
            {
              path: 'handball',
              component: HandballComponent
            },
            {
              path: 'interview',
              component: InterviewComponent
            },
            {
              path: 'kenton',
              component: KentonComponent
            },
            {
              path: 'localTeams',
              component: LocalTeamsComponent
            },
            {
              path: 'monthlyNewsletter',
              component: MonthlyNewsletterComponent
            },
            {
              path: 'newLogo',
              component: NewLogoComponent
            },
            {
              path: 'personalFoul',
              component: PersonalFoulParentsComponent
            },
            {
              path: 'presidentsCup',
              component: PresidentsCupComponent
            },
            {
              path: 'bigTime',
              component: RefBigTimeComponent
            },
            {
              path: 'rslLoganFacility',
              component: RslLoganFacilityComponent
            },
            {
              path: 'rslSounders',
              component: RslSoundersComponent
            },
            {
              path: 'sadNews',
              component: SadNewsComponent
            },
            {
              path: 'stateCompTryouts',
              component: StateCompTryoutsComponent
            },
            {
              path: 'svSophmore',
              component: SvSophmoreComponent
            },
            {
              path: 'teachPrinciples',
              component: TeachPrinciplesComponent
            },
            {
              path: 'totalFootball',
              component: TotalFootballComponent
            },
            {
              path: 'usuSoccer',
              component: UsuSoccerComponent
            },
            {
              path: 'uysaChampionship',
              component: UysaChampionshipComponent
            },
            {
              path: 'uysaChanges',
              component: UysaChangesComponent
            },
            {
              path: 'bairLaRocca',
              component: BairLeadLaRoccaComponent
            },
          ]
        },
        {
          path: 'referees',
          component: RefereesComponent
        }
      ] 
    },
    { 
      path: 'events', 
      component: EventsComponent,
      children: [
        {
          path: '',
          redirectTo: 'events',
          pathMatch: 'full'
        },
        {
          path: 'cacheValleyCup',
          component: CacheValleyCupComponent,
          children: [
            {
              path: '',
              redirectTo: 'cacheValleyCup',
              pathMatch: 'full'
            },
            {
              path: 'cupRegistration',
              component: CupRegistrationComponent
            },
            {
              path: 'cupSchedules',
              component: CupSchedulesComponent
            },
            {
              path: 'cupLocation',
              component: CupLocationComponent
            },
            {
              path: 'cupCarnival',
              component: CupCarnivalComponent
            },
            {
              path: 'cupRules',
              component: CupRulesComponent
            },
            {
              path: 'cupDirections',
              component: CupDirectionsComponent
            }
          ]
        },
        {
          path: 'upcomingEvents',
          component: UpcomingEventsComponent
        },
        {
          path: 'cacheValleyMiniCup',
          component: CacheValleyMiniCupComponent
        }, 
        {
          path: 'CvcSoccerExpo',
          component: SoccerExpoComponent
        }, 
        {
          path: 'annualGeneralMeeting',
          component: AnnualGeneralMeetingComponent
        } 
      ] 
    },
    { 
      path: 'competitionLeague', 
      component: CompetitionLeagueComponent,
      children: [
        {
          path: '',
          redirectTo: 'competitionLeague',
          pathMatch: 'full'
        },
        {
          path: 'challengerSchedule',
          component: SchedulesComponent
        },
        {
          path: 'RegistrationInfo',
          component: RegistrationInfoComponent
        },
        {
          path: 'LeagueResults',
          component: LeagueResultsComponent
        },
        {
          path: 'TryoutInfo',
          component: TryoutInfoComponent
        },
        {
          path: 'TryoutAdForm',
          component: TryoutAdFormComponent
        }
      ]
    },
    { 
      path: 'uysaStateCompetition', 
      component: UysaStateCompetitionComponent,
      children: [
        {
          path: '',
          redirectTo: 'uysaStateCompetition',
          pathMatch: 'full'
        },
        {
          path: 'uysaSchedule',
          component: UysaScheduleComponent
        },
        {
          path: 'uysaRegistrationInfo',
          component: UysaRegistrationInfoComponent
        },
        {
          path: 'uysaLeagueResults',
          component: UysaLeagueResultsComponent
        },
        {
          path: 'uysaTryoutInfo',
          component: UysaTryoutInfoComponent
        },
        {
          path: 'uysaTryoutAdForm',
          component: UysaTryoutAdFormComponent
        }
      ] 
    },
    { 
      path: 'recreation', 
      component: RecreationComponent 
    },
    { 
      path: 'contact', 
      component: ContactComponent 
    },
    { 
      path: 'registration', 
      component: RegistrationComponent 
    },
    { 
      path: 'faq', 
      component: FaqComponent 
    }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
