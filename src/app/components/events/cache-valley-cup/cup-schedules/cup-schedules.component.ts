import { Component, OnInit } from '@angular/core';
import { CacheValleyCupSchedule } from './types';

@Component({
  selector: 'app-cup-schedules',
  templateUrl: './cup-schedules.component.html',
  styleUrls: ['./cup-schedules.component.less']
})
export class CupSchedulesComponent implements OnInit {
  boysSchedules: CacheValleyCupSchedule[]
  girlsSchedules: CacheValleyCupSchedule[]
  constructor() { }

  ngOnInit() {
    this.setSchedules();
  }
  /*
    They should be youngest to oldest; Gold, Silver, Bronze, and Copper.  
    In the U9 Boys, the Blue should be first, and then purple, green, orange in any order.
  */
  setSchedules() {
    this.boysSchedules = [
      {
        division: 'Boys U9 Blue',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRHV1m6oNC0Rsi-D-9un5dzeuEshbAoEyL29NNWt6YDzEmGzjcTySdF7faGiH2KuEcsgOtocNDG3qlu/pubhtml?gid=0&single=true',
        downloadLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRHV1m6oNC0Rsi-D-9un5dzeuEshbAoEyL29NNWt6YDzEmGzjcTySdF7faGiH2KuEcsgOtocNDG3qlu/pub?gid=0&single=true&output=pdf'
      },
      {
        division: 'Boys U9 Purple',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQgr02eCRhH8EWcs2BPUpUgYbXwAXsBqdl_oHcU8izgnv9T_C6T4-uB9RwslDZtMpc3OqiJb-KUuDkC/pubhtml?gid=1&single=true',
        downloadLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQgr02eCRhH8EWcs2BPUpUgYbXwAXsBqdl_oHcU8izgnv9T_C6T4-uB9RwslDZtMpc3OqiJb-KUuDkC/pub?gid=1&single=true&output=pdf'
      },
      {
        division: 'Boys U9 Green',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQVViXP5XX-0CAh7i1HIVYN_5vVLLsvTq-juNBRCwWU64CFqvAlxBMT4-NJt9Y6alpFIv4iCML9R4FE/pubhtml?gid=1&single=true',
        downloadLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQVViXP5XX-0CAh7i1HIVYN_5vVLLsvTq-juNBRCwWU64CFqvAlxBMT4-NJt9Y6alpFIv4iCML9R4FE/pub?gid=1&single=true&output=pdf'
      },
      // {
      //   division: 'Boys U9 Orange',
      //   url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSxqqUvO9i8SFMbi6kRVy0BYIVQYLA2RkKbFEqQ7gSjBuFBWTzarQ9uXC7JiMwlNz_L3TFMcCKXJ6ND/pubhtml?gid=1&single=true',
      //   downloadLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSxqqUvO9i8SFMbi6kRVy0BYIVQYLA2RkKbFEqQ7gSjBuFBWTzarQ9uXC7JiMwlNz_L3TFMcCKXJ6ND/pub?gid=1&single=true&output=pdf'
      // },
      {
        division: 'Boys U10 Gold',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSAE8K22BKh4pHKt8fsNdw2kVW9yw3AEXNy03OYQnYpn-V_VB4XaHWTNEFIEzFgJalxj8wCLpuB3E1s/pubhtml?gid=0&single=true',
        downloadLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSAE8K22BKh4pHKt8fsNdw2kVW9yw3AEXNy03OYQnYpn-V_VB4XaHWTNEFIEzFgJalxj8wCLpuB3E1s/pub?gid=0&single=true&output=pdf'
      },
      {
        division: 'Boys U10 Silver',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS6rzIrMZ9lAPSGDE-EyxeFTa_KCxM6F3h54vZWBpLJ2f9ldvpCJjsZ8egd1ImoGlfC0cExzCzP88Eo/pubhtml?gid=1&single=true',
        downloadLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS6rzIrMZ9lAPSGDE-EyxeFTa_KCxM6F3h54vZWBpLJ2f9ldvpCJjsZ8egd1ImoGlfC0cExzCzP88Eo/pub?gid=1&single=true&output=pdf'
      },
      {
        division: 'Boys U10 Bronze',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS1Yf09-pVJC6rESkqlxGWuUx_-dT0EMKR2yIB7nWQocJt7Jw60ZExJkaCN_ucci60UrRlG7LSGIrtR/pubhtml?gid=2&single=true',
        downloadLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS1Yf09-pVJC6rESkqlxGWuUx_-dT0EMKR2yIB7nWQocJt7Jw60ZExJkaCN_ucci60UrRlG7LSGIrtR/pub?gid=2&single=true&output=pdf'
      },
      {
        division: 'Boys U11 Gold',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRqZZ1BHUunN9EKJh69xjRydWEcupqe7l0GTrHKqIjlZp7y2HJUOgGgU_hLz6_sug4zXS3PCwwKPmVi/pubhtml?gid=0&single=true',
        downloadLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRqZZ1BHUunN9EKJh69xjRydWEcupqe7l0GTrHKqIjlZp7y2HJUOgGgU_hLz6_sug4zXS3PCwwKPmVi/pub?gid=0&single=true&output=pdf'
      },
      {
        division: 'Boys U11 Silver',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS13mNC9jMFIn5fsdQ0A49NKwAuvZ-j42bouN5DUUbT0nJ6yFUcYRauQDzbroQc_Uw8r9bvUnWE3bFm/pubhtml?gid=1&single=true',
        downloadLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS13mNC9jMFIn5fsdQ0A49NKwAuvZ-j42bouN5DUUbT0nJ6yFUcYRauQDzbroQc_Uw8r9bvUnWE3bFm/pub?gid=1&single=true&output=pdf'
      },
      {
        division: 'Boys U11 Bronze',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR6oKdhJtI7QE9hLsYr2f2Xz6QXnmMv7tSg3M3f62QJB8ITQprT1CY0JUzHQNblCFSNZNtAQMMGZOMg/pubhtml?gid=2&single=true',
        downloadLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR6oKdhJtI7QE9hLsYr2f2Xz6QXnmMv7tSg3M3f62QJB8ITQprT1CY0JUzHQNblCFSNZNtAQMMGZOMg/pub?gid=2&single=true&output=pdf'
      },
      {
        division: 'Boys U12 Gold',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS42rdSgiuudtoqjw6HGoop7oDx3eyabp8KZHQYe1sWYEItcplvvZha8XPoYUCg8EXi22QYA2_BJcMC/pubhtml?gid=0&single=true',
        downloadLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS42rdSgiuudtoqjw6HGoop7oDx3eyabp8KZHQYe1sWYEItcplvvZha8XPoYUCg8EXi22QYA2_BJcMC/pub?gid=0&single=true&output=pdf'
      },
      {
        division: 'Boys U12 Silver',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTkkjrFJZY29pre704lbh23qlykSv8k83N46YW4PYOBbMFXFzOXGqDQ1zIc1S0e15zyqT_amdmnxJ9I/pubhtml?gid=1&single=true',
        downloadLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTkkjrFJZY29pre704lbh23qlykSv8k83N46YW4PYOBbMFXFzOXGqDQ1zIc1S0e15zyqT_amdmnxJ9I/pub?gid=1&single=true&output=pdf'
      },
      {
        division: 'Boys U12 Bronze',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR1IEADLibPtJFgz26KRxthQByrgexJ8VugbDEYb-dIRzWeB8SbcxktVTv2eCa0AW6Y_pXMS6amR64t/pubhtml?gid=2&single=true',
        downloadLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR1IEADLibPtJFgz26KRxthQByrgexJ8VugbDEYb-dIRzWeB8SbcxktVTv2eCa0AW6Y_pXMS6amR64t/pub?gid=2&single=true&output=pdf'
      },
      {
        division: 'Boys U13 Gold',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRkR6ERtbsKKrAAL6sfhRDACcsQyM0PaAiXQnq2UiqgRLfKXG7W1IeFz6Aseactieb3z983vsIG309K/pubhtml?gid=0&single=true',
        downloadLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRkR6ERtbsKKrAAL6sfhRDACcsQyM0PaAiXQnq2UiqgRLfKXG7W1IeFz6Aseactieb3z983vsIG309K/pub?gid=0&single=true&output=pdf'
      },
      {
        division: 'Boys U13 Silver',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTuTRbhNYIfUJam8DRGjsK8Nfl7ppszxhdrDYrCgS7c4sRXYiC4rATamhgm6gNh-FW5vEgbxHAVQMI1/pubhtml?gid=1&single=true',
        downloadLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTuTRbhNYIfUJam8DRGjsK8Nfl7ppszxhdrDYrCgS7c4sRXYiC4rATamhgm6gNh-FW5vEgbxHAVQMI1/pub?gid=1&single=true&output=pdf'
      },
      {
        division: 'Boys U13 Bronze',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQlJWlLzIcGEAOciKz-oS7n5XnB8CTCvWZEAf2hTaCFGp8YXgmjY1OahIJGucINSYB9SluV_4y1pI2d/pubhtml?gid=2&single=true',
        downloadLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQlJWlLzIcGEAOciKz-oS7n5XnB8CTCvWZEAf2hTaCFGp8YXgmjY1OahIJGucINSYB9SluV_4y1pI2d/pub?gid=2&single=true&output=pdf'
      },
      {
        division: 'Boys U14 Gold',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQC_boPRkn_oTUFHQQkd_nJEhmJksaA8j50nXtJVYC0GN0hUG2t3ZQAPc7XQ8UxBbNTL1MA05QZ5577/pubhtml?gid=0&single=true',
        downloadLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQC_boPRkn_oTUFHQQkd_nJEhmJksaA8j50nXtJVYC0GN0hUG2t3ZQAPc7XQ8UxBbNTL1MA05QZ5577/pub?gid=0&single=true&output=pdf'
      },
      {
        division: 'Boys U14 Silver',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSf7l824eqIKGEN0k60B5w3EUANeX0u5Uod2kSlBuasnMmRj9J32uYLYOw21ZNHhLlZBMzJdU4Ps3hd/pubhtml?gid=3&single=true',
        downloadLink: ''
      },
      {
        division: 'Boys U14 Bronze',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSasGJIcHmOXHF41ilWJrV383IkTki9iVKeH9v4iSzqf2by1wfwWXzBwL85V_rNRILsZX_UpRNnrROg/pubhtml?gid=1&single=true',
        downloadLink: ''
      },
      {
        division: 'Boys U15 Gold',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQJ95PP17YxIuaIydTGR7wx0g4_zxo4p63-dgeywVpQiGb6jMWfUplDGHUD6rYvdAlgBY8T3lWg9-zw/pubhtml?gid=0&single=true',
        downloadLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQJ95PP17YxIuaIydTGR7wx0g4_zxo4p63-dgeywVpQiGb6jMWfUplDGHUD6rYvdAlgBY8T3lWg9-zw/pub?gid=0&single=true&output=pdf'
      },
      {
        division: 'Boys U15 Silver',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR3N9dmRWa86lT_zMLrsTXclove23wfjlU0tJhi_8RnNKaDjs2HihhgjkduWvGcKJ0fyuP98oZRb9Du/pubhtml?gid=1&single=true',
        downloadLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR3N9dmRWa86lT_zMLrsTXclove23wfjlU0tJhi_8RnNKaDjs2HihhgjkduWvGcKJ0fyuP98oZRb9Du/pub?gid=1&single=true&output=pdf'
      },
      {
        division: 'Boys U15 Bronze',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSlbGu6VCewM1yqD_KfxM77xsPjzA0npcYgBWMusJMGCTN_pIYAQSHTjaPjgKqxBhfMGcnVRpPF1l5l/pubhtml?gid=1&single=true',
        downloadLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSlbGu6VCewM1yqD_KfxM77xsPjzA0npcYgBWMusJMGCTN_pIYAQSHTjaPjgKqxBhfMGcnVRpPF1l5l/pub?gid=1&single=true&output=pdf'
      },
      {
        division: 'Boys U16 Gold',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTA2IzARVCGqpe7PBJ0yxmAyE_vYutpA_t0tuVEuY0qaQ9r4GARlQh8XHDbspeomEkNzLiV4Ls3BIQ4/pubhtml?gid=0&single=true',
        downloadLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTA2IzARVCGqpe7PBJ0yxmAyE_vYutpA_t0tuVEuY0qaQ9r4GARlQh8XHDbspeomEkNzLiV4Ls3BIQ4/pub?gid=0&single=true&output=pdf'
      },
      {
        division: 'Boys U16 Silver',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT0Z2pGURlX2PZB9Rw5rOisi32Z662kO175SpZ-YsJzLYWGz2sl2G61mqoY5wViG8PY9GezkvLR3Qud/pubhtml?gid=1&single=true',
        downloadLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT0Z2pGURlX2PZB9Rw5rOisi32Z662kO175SpZ-YsJzLYWGz2sl2G61mqoY5wViG8PY9GezkvLR3Qud/pub?gid=1&single=true&output=pdf'
      },
      {
        division: 'Boys HS Gold',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTNXMtZzoVKluRv6PHnZKGhlVVmmK00VNfcWQOToPoUS4nPqeoSpVYazjwx1Qhh8YXKigk1VQTS986A/pubhtml?gid=0&single=true',
        downloadLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTNXMtZzoVKluRv6PHnZKGhlVVmmK00VNfcWQOToPoUS4nPqeoSpVYazjwx1Qhh8YXKigk1VQTS986A/pub?gid=0&single=true&output=pdf'
      },
      {
        division: 'Boys HS Silver',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRtzB7TiKL06ydmRlQ6xMKcMIxKNrXh1Y9twnm9ACH6JEqX9wA1MkFuRNSOQ7Qyt3FCKVUhGitsNK3S/pubhtml?gid=3&single=true',
        downloadLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRtzB7TiKL06ydmRlQ6xMKcMIxKNrXh1Y9twnm9ACH6JEqX9wA1MkFuRNSOQ7Qyt3FCKVUhGitsNK3S/pub?gid=3&single=true&output=pdf'
      },
    ];

    this.girlsSchedules = [
      {
        division: 'Girls U9 Purple',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTR7JtgLBBmIbX_hyvQ294LFlW-dhKL_t4RLzVC12nPGbb0alSDJl8LN8qMCPNYKvGF-jf_djfoe_Fa/pubhtml?gid=0&single=true',
        downloadLink: '',
      },
      {
        division: 'Girls U10 Gold',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-8tQPW5mEkZhPZznd5QgcuTDapKoQNndeOg4SqRI4474qLzhWewUtncLsl5MzGm_qz9xwjYswYho3/pubhtml?gid=0&single=true',
        downloadLink: '',
      },
      {
        division: 'Girls U10 Silver',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT9VdyFc6-bcfi0cIBbn8HRZD0NWsxNhRIy99Q5T4HhUu97Y7nGPb5AN2d8-yR6u8WiCzsqe8ld7lFt/pubhtml?gid=1&single=true',
        downloadLink: '',
      },
      {
        division: 'Girls U11 Gold',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSoCyq02cVlcQxEYOkHDqqpt8BJt9D-dc803zZY8X0GhBp085r4J3hpFlNi8JOAIzIov4LFk7Xqx8zf/pubhtml?gid=0&single=true',
        downloadLink: '',
      },
      {
        division: 'Girls U11 Silver',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQBOHlHO6xRP3FQY-rMNUeYhrdBRAzy_y-h28KhmFAJpEJyALZqgIXyahoRaNgTjDXzcHlr1PoaXnkv/pubhtml?gid=1&single=true',
        downloadLink: '',
      },
      {
        division: 'Girls U12 Gold',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-C_HV-0a22tyKfzPBY2oPEJZKDWSnWAvWq-9N790u75-zljubenvo0jI0DdUcCUvJ4zgphJEZO2YD/pubhtml?gid=0&single=true',
        downloadLink: '',
      },
      {
        division: 'Girls U12 Silver',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRpK6vsVn1AQBYcWqHU_H_ULRUEXbOUHZIYvNqFEoxAlaDRG2wkqyuXCUNhl6yH8srS1MZenJe3D1V-/pubhtml?gid=1&single=true',
        downloadLink: '',
      },
      {
        division: 'Girls U12 Bronze',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_sB8NmlL7Q-Oyn4BgY_GzXTDNoGfSPe1UpOwBsTVAMwontUwAar6TwBR_TE4uSy5w-8fCays1lDpT/pubhtml?gid=2&single=true',
        downloadLink: '',
      },
      {
        division: 'Girls U12 Copper',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT3eO_YIAlLV4uCmyIirUuVght5VAEYp2onsegqibw6gaGmfa3O3FMYA9gi3pxTQOZcKBw8-CkgvvZ9/pubhtml?gid=2&single=true',
        downloadLink: '',
      },
      {
        division: 'Girls U13 Gold',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQR7IdutobApBoDLlGAXIXl77cbnx5Ej0-Zy4pOe8uV8a7WWDJxPl1Wcawdg8N1z5zKaIqW8S_wnPsm/pubhtml?gid=0&single=true',
        downloadLink: '',
      },
      {
        division: 'Girls U13 Silver',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRypSY5PizPt4vW_40uUbiE4gHF6SyDp5RQ2sv0wzGE_XOgkbXrkZlwUunm37v_e3g45jPqmcUcGu20/pubhtml?gid=1&single=true',
        downloadLink: '',
      },
      {
        division: 'Girls U13 Bronze',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRmfhLav4XptBkeNmzfUtxRpTbSfjamzh_7q6BW7KiRkkyseGaz3_QT5nUZydX0CPd0qJ9e81jyghMY/pubhtml?gid=2&single=true',
        downloadLink: '',
      },
      {
        division: 'Girls U14 Gold',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQw8ZqIE6JdZ7kVAbzjM4NNhXjUsOmkxgSrpvR289bSbBy_WNxUEgAO1zlpS_UB8DM-Cf6d29j5kCuc/pubhtml?gid=0&single=true',
        downloadLink: '',
      },
      {
        division: 'Girls U14 Silver',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQjj_r55vNDF39eMFe8L0YaLartlffXmBMwB7bqnk1Lor5eze-uS2vYzeroo6Tvbvm_uZ5g8F_7WSv-/pubhtml?gid=1&single=true',
        downloadLink: '',
      },
      {
        division: 'Girls U15 Gold',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTNJdJ4uNoqplX951FpNygVqgbQcmHopDQCNS5wJMJM1WV4a4qfAngePZPH_Ns7Rl3_V9sr7I4ucwZz/pubhtml?gid=1&single=true',
        downloadLink: '',
      },
      {
        division: 'Girls U15 Silver',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRNY1Q6NZ_T3DUlOESItnjwhyoWu4YTAE_v1xQZLs2-jEuc2erSjLQn4mO7ZxhnV5PTIFcIs1zo-5AO/pubhtml?gid=3&single=true',
        downloadLink: '',
      },
      {
        division: 'Girls HS Gold',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRARdAKMyp3eYxV_kBjOOipCdqRgKzrXzauY4pZo8wmQwSGM9eNOS0kO5Lb089OSuT2th3qohmh16YO/pubhtml?gid=0&single=true',
        downloadLink: '',
      },
      {
        division: 'Girls HS Silver',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRyay_2GkSsbce69sS30wm1NooRjBlEP1iwKwaJCKNBwdeMXbILRtL89RF2I5Rtcb0KggCsu63SSG86/pubhtml?gid=0&single=true',
        downloadLink: '',
      },
    ];
  }

}
