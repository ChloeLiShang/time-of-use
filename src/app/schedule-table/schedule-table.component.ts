import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

import { TouConfPriceSeason, TouConfPriceTierInterval} from '../data';

@Component({
  selector: 'app-schedule-table',
  templateUrl: './schedule-table.component.html',
  styleUrls: ['./schedule-table.component.css']
})
export class ScheduleTableComponent implements OnInit {

  private readonly WEEKDAYS = 0;
  private readonly SATURDAYS = 1;
  private readonly SUNDAYS = 2;
  private readonly HOLIDAYS = 3;

  private readonly OFF_PEAK_COLOR = '#6bd06b';
  private readonly SHOULDER_2_COLOR = 'cyan';
  private readonly SHOULDER_1_COLOR = 'orange';
  private readonly PEAK_COLOR = 'rgb(242 93 121)';
  private readonly TIER_COLOR = [this.OFF_PEAK_COLOR, this.SHOULDER_2_COLOR, this.SHOULDER_1_COLOR, this.PEAK_COLOR];

  private readonly OFF_PEAK = 0;
  private readonly SHOULDER_2 = 1;
  private readonly SHOULDER_1 = 2;
  private readonly PEAK = 3;
  private readonly TIER_STRING = ['Off Peak', 'Shoulder 2', 'Shoulder 1', 'Peak'];

  private createdBy: number;
  private priceSeasonId: number;

  // these should've been populated by calling getIntervals(dayType)
  // for now just initiate manually
  private weekdaysIntervals: TouConfPriceTierInterval[];
  private saturdaysIntervals: TouConfPriceTierInterval[];
  private sundaysIntervals: TouConfPriceTierInterval[];
  private holidaysIntervals: TouConfPriceTierInterval[];

  private weekdaysDisplay = [];
  private saturdaysDisplay = [];
  private sundaysDisplay = [];
  private holidaysDisplay = [];

  private selectedTier = -1;

  constructor() { }

  ngOnInit() {
    this.populateData();

    this.sortIntervals();

    this.generateDataForDisplay(this.weekdaysIntervals, this.weekdaysDisplay);
    this.generateDataForDisplay(this.saturdaysIntervals, this.saturdaysDisplay);
    this.generateDataForDisplay(this.sundaysIntervals, this.sundaysDisplay);
    this.generateDataForDisplay(this.holidaysIntervals, this.holidaysDisplay);

    this.createdBy = 0;
    this.priceSeasonId = 0;
  }

  private populateData(): void {
    this.weekdaysIntervals = [{
      createdBy: new Date().getTime(),
      createdUtc: new Date().getTime(),
      dayType: this.WEEKDAYS,
      priceSeasonId: this.WEEKDAYS,
      startMinute: 0,
      tierId: 0
    },
    {
      createdBy: new Date().getTime(),
      createdUtc: new Date().getTime(),
      dayType: this.WEEKDAYS,
      priceSeasonId: this.WEEKDAYS,
      startMinute: 600,
      tierId: 3
    },
    {
      createdBy: new Date().getTime(),
      createdUtc: new Date().getTime(),
      dayType: this.WEEKDAYS,
      priceSeasonId: this.WEEKDAYS,
      startMinute: 1200,
      tierId: 0
    }];

    this.saturdaysIntervals = [{
      createdBy: new Date().getTime(),
      createdUtc: new Date().getTime(),
      dayType: this.SATURDAYS,
      priceSeasonId: this.SATURDAYS,
      startMinute: 0,
      tierId: 0
    },
    {
      createdBy: new Date().getTime(),
      createdUtc: new Date().getTime(),
      dayType: this.SATURDAYS,
      priceSeasonId: this.SATURDAYS,
      startMinute: 1440,
      tierId: 0
    }];

    this.sundaysIntervals = [{
      createdBy: new Date().getTime(),
      createdUtc: new Date().getTime(),
      dayType: this.SUNDAYS,
      priceSeasonId: this.SUNDAYS,
      startMinute: 0,
      tierId: 0
    },
    {
      createdBy: new Date().getTime(),
      createdUtc: new Date().getTime(),
      dayType: this.SUNDAYS,
      priceSeasonId: this.SUNDAYS,
      startMinute: 1440,
      tierId: 0
    }];

    this.holidaysIntervals = [{
      createdBy: new Date().getTime(),
      createdUtc: new Date().getTime(),
      dayType: this.HOLIDAYS,
      priceSeasonId: this.HOLIDAYS,
      startMinute: 0,
      tierId: 0
    },
    {
      createdBy: new Date().getTime(),
      createdUtc: new Date().getTime(),
      dayType: this.HOLIDAYS,
      priceSeasonId: this.HOLIDAYS,
      startMinute: 1380,
      tierId: 1
    }];
  }

  private sortIntervals(): void {
    this.weekdaysIntervals.sort((a, b) => {
      return a.startMinute - b.startMinute;
    });
    this.saturdaysIntervals.sort((a, b) => {
      return a.startMinute - b.startMinute;
    });
    this.sundaysIntervals.sort((a, b) => {
      return a.startMinute - b.startMinute;
    });
    this.holidaysIntervals.sort((a, b) => {
      return a.startMinute - b.startMinute;
    });
  }

  private generateDataForDisplay(dayTypeIntervals: TouConfPriceTierInterval[], dayTypeDisplay: any[]): void {
    for (let i = 0; i < dayTypeIntervals.length; i++) {
      let color = this.TIER_COLOR[dayTypeIntervals[i].tierId];
      let start = dayTypeIntervals[i].startMinute / 60;
      if (i+1 === dayTypeIntervals.length) { // last interval ends at 24:00
        for (let j = dayTypeIntervals[i].startMinute; j < 1440; j+=60) {
          dayTypeDisplay.push({
            color: color,
            hour: j/60 + 1,
            interval: {
              start: start,
              end: 24,
              tierId: dayTypeIntervals[i].tierId}
            });
        }
      } else {
        for (let j = dayTypeIntervals[i].startMinute; j < dayTypeIntervals[i+1].startMinute; j+=60) {
          dayTypeDisplay.push({
            color: color,
            hour: j/60 + 1,
            interval: {
              start: start,
              end: dayTypeIntervals[i+1].startMinute/60,
              tierId: dayTypeIntervals[i].tierId}
            });
        }
      }
    }
  }

  private updateInterval(dayTypeDisplay: any [], hourIdx: number, newTier: number) {
    let hour = dayTypeDisplay[hourIdx];
    if (hourIdx !== 0 && hourIdx !== 23 && newTier === dayTypeDisplay[hourIdx-1].interval.tierId
      && newTier === dayTypeDisplay[hourIdx+1].interval.tierId) { // connects two intervals
        for (let i = dayTypeDisplay[hourIdx-1].interval.start; i < dayTypeDisplay[hourIdx+1].interval.end; i++) {
          dayTypeDisplay[i].interval = {
            start: dayTypeDisplay[hourIdx-1].interval.start,
            end: dayTypeDisplay[hourIdx+1].interval.end,
            tierId: newTier
          }
        }
    } else if (hourIdx === 0) { // selected hour is hour 1
        if (dayTypeDisplay[1].interval.tierId === newTier) {
          for (let i = 0; i < dayTypeDisplay[1].interval.end; i++) {
            dayTypeDisplay[i].interval = {
              start: 0,
              end: dayTypeDisplay[1].interval.end,
              tierId: newTier
            }
          }
        } else {
            dayTypeDisplay[hourIdx].interval = {
              start: 0,
              end: 1,
              tierId: newTier
            };
            for (let i = 1; i < dayTypeDisplay[1].interval.end; i++) { // update right interval
              dayTypeDisplay[i].interval.start = 1
            }
          }
    } else if (hourIdx === 23) { // selected hour is hour 24
        if (dayTypeDisplay[22].interval.tierId === newTier) {
          for (let i = dayTypeDisplay[22].interval.start; i < 24; i++) {
            dayTypeDisplay[i].interval = {
              start: dayTypeDisplay[22].interval.start,
              end: 24,
              tierId: newTier
            }
          }
        } else {
            dayTypeDisplay[hourIdx].interval = {
              start: 23,
              end: 24,
              tierId: newTier
            };
            for (let i = dayTypeDisplay[22].interval.start; i < 23; i++) { // update left interval
              dayTypeDisplay[i].interval.end = 23
            }
        }
    } else { // selected hour is between hour 1 and hour 24
        if (newTier === dayTypeDisplay[hourIdx-1].interval.tierId) { // new tier is the same as the left interval tier
          for (let i = dayTypeDisplay[hourIdx-1].interval.start; i < hour.hour; i++) { // add to left interval
            dayTypeDisplay[i].interval = {
              start: dayTypeDisplay[hourIdx-1].interval.start,
              end: hour.hour,
              tierId: newTier
            };
          }
          for (let i = hourIdx + 1; i < dayTypeDisplay[hourIdx+1].interval.end; i++) { // update right interval
            dayTypeDisplay[i].interval.start = hour.hour;
          }
        } else if (newTier === dayTypeDisplay[hourIdx+1].interval.tierId) { // new tier is the same as the right interval tier
          for (let i = hourIdx; i < dayTypeDisplay[hourIdx+1].interval.end; i++) { // add to right interval
            dayTypeDisplay[i].interval = {
              start: hour.hour - 1,
              end: dayTypeDisplay[hourIdx+1].interval.end,
              tierId: newTier
            };
          }
          for (let i = dayTypeDisplay[hourIdx-1].interval.start; i < hourIdx; i++) { // update left interval
            dayTypeDisplay[i].interval.end = hour.hour - 1;
          }
        } else {
            dayTypeDisplay[hourIdx].interval = {
              start: hour.hour - 1,
              end: hour.hour,
              tierId: newTier
            };
            for (let i = dayTypeDisplay[hourIdx-1].interval.start; i < hourIdx; i++) { // update left interval
              dayTypeDisplay[i].interval.end = hour.hour - 1;
            }
            for (let i = hourIdx + 1; i < dayTypeDisplay[hourIdx+1].interval.end; i++) { // update right interval
              dayTypeDisplay[i].interval.start = hour.hour;
            }
        }
    }
}

  private onSelectTier(tierId: number): void {
    this.selectedTier = tierId;
  }

  private onSelectHour(dayType: number, index: number) {
    if (this.selectedTier !== -1) {
      switch (dayType) {
        case this.WEEKDAYS: {
          if (this.weekdaysDisplay[index].interval.tierId !== this.selectedTier) {
            this.weekdaysDisplay[index].color = this.TIER_COLOR[this.selectedTier];
            this.updateInterval(this.weekdaysDisplay, index, this.selectedTier);
          }          
          break;
        }
        case this.SATURDAYS: {
          if (this.saturdaysDisplay[index].interval.tierId !== this.selectedTier) {
            this.saturdaysDisplay[index].color = this.TIER_COLOR[this.selectedTier];
            this.updateInterval(this.saturdaysDisplay, index, this.selectedTier);
          }
          break;
        }
        case this.SUNDAYS: {
          if (this.sundaysDisplay[index].interval.tierId !== this.selectedTier) {
            this.sundaysDisplay[index].color = this.TIER_COLOR[this.selectedTier];
            this.updateInterval(this.sundaysDisplay, index, this.selectedTier);
          }
          break;
        }
        case this.HOLIDAYS: {
          if (this.holidaysDisplay[index].interval.tierId !== this.selectedTier)
            this.holidaysDisplay[index].color = this.TIER_COLOR[this.selectedTier];
            this.updateInterval(this.holidaysDisplay, index, this.selectedTier);
          break;
        }
      }
    }
  }

  private saveIntervals(): void {
    this.weekdaysIntervals = [];
    for (let i = 0; i < 24; ) {
      this.weekdaysIntervals.push({
        createdBy: this.createdBy,
        createdUtc: Date.now(),
        dayType: this.WEEKDAYS,
        priceSeasonId: this.priceSeasonId,
        startMinute: this.weekdaysDisplay[i].interval.start * 60,
        tierId: this.weekdaysDisplay[i].interval.tierId
      });
      i = this.weekdaysDisplay[i].interval.end;
    }
  }

  private getDayTypes(): number[] {
    return [this.WEEKDAYS, this.SATURDAYS, this.SUNDAYS, this.HOLIDAYS];
  }

}
