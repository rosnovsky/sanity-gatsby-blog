import React from 'react'
export const icons = {
  death: (
    <svg
      className="h-6 w-6 text-bold text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      viewBox="0 0 496 512"
      stroke="none"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-33.8-217.9c7.8-7.8 7.8-20.5 0-28.3L196.3 192l17.9-17.9c7.8-7.8 7.8-20.5 0-28.3-7.8-7.8-20.5-7.8-28.3 0L168 163.7l-17.8-17.8c-7.8-7.8-20.5-7.8-28.3 0-7.8 7.8-7.8 20.5 0 28.3l17.9 17.9-17.9 17.9c-7.8 7.8-7.8 20.5 0 28.3 7.8 7.8 20.5 7.8 28.3 0l17.8-17.8 17.8 17.8c7.9 7.7 20.5 7.7 28.4-.2zm160-92.2c-7.8-7.8-20.5-7.8-28.3 0L328 163.7l-17.8-17.8c-7.8-7.8-20.5-7.8-28.3 0-7.8 7.8-7.8 20.5 0 28.3l17.9 17.9-17.9 17.9c-7.8 7.8-7.8 20.5 0 28.3 7.8 7.8 20.5 7.8 28.3 0l17.8-17.8 17.8 17.8c7.8 7.8 20.5 7.8 28.3 0 7.8-7.8 7.8-20.5 0-28.3l-17.8-18 17.9-17.9c7.7-7.8 7.7-20.4 0-28.2zM248 272c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64z"
      />
    </svg>
  ),
  infected: (
    <svg
      className="h-6 w-6 text-bold text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      viewBox="0 0 496 512"
      stroke="none"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        d="M224,176a48,48,0,1,0,48,48A48,48,0,0,0,224,176Zm80,104a24,24,0,1,0,24,24A24,24,0,0,0,304,280Zm179.55-52.45H462c-50.68,0-76.07-61.27-40.23-97.11L437,115.19A28.44,28.44,0,0,0,396.8,75L381.56,90.22A55.74,55.74,0,0,1,341.74,107c-29.24,0-57.29-22.7-57.29-57V28.44a28.45,28.45,0,0,0-56.9,0V50c0,34.29-28.05,57-57.29,57a55.7,55.7,0,0,1-39.82-16.77L115.2,75A28.44,28.44,0,0,0,75,115.19l15.25,15.25c35.84,35.84,10.45,97.11-40.23,97.11H28.45a28.45,28.45,0,1,0,0,56.89H50c50.68,0,76.07,61.28,40.23,97.12L75,396.8A28.45,28.45,0,0,0,115.2,437l15.24-15.25A55.7,55.7,0,0,1,170.25,405c29.25,0,57.3,22.7,57.3,57v21.54a28.45,28.45,0,0,0,56.9,0V462c0-34.29,28.05-57,57.3-57a55.7,55.7,0,0,1,39.81,16.77L396.8,437A28.45,28.45,0,0,0,437,396.8l-15.25-15.24c-35.84-35.84-10.45-97.12,40.23-97.12h21.54a28.45,28.45,0,1,0,0-56.89ZM365.1,301.19a104.81,104.81,0,0,0-6.65,57.16,104.13,104.13,0,0,0-16.7-1.34A105.35,105.35,0,0,0,256,401.12,105.35,105.35,0,0,0,170.25,357a104.13,104.13,0,0,0-16.7,1.34A105.26,105.26,0,0,0,111.09,256a105.29,105.29,0,0,0,42.46-102.36A103,103,0,0,0,170.26,155,105.34,105.34,0,0,0,256,110.88,105.34,105.34,0,0,0,341.74,155a103,103,0,0,0,16.71-1.35A105.29,105.29,0,0,0,400.91,256,104.69,104.69,0,0,0,365.1,301.19Z"
      />
    </svg>
  ),

  hospitalized: (
    <svg
      className="h-6 w-6 text-bold text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      viewBox="0 0 496 512"
      stroke="none"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        d="M520 240H312c-22.1 0-40 17.9-40 40v136H48V136c0-4.4-3.6-8-8-8H8c-4.4 0-8 3.6-8 8v368c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8v-40h544v40c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V360c0-66.2-53.8-120-120-120zm72 176H320V288h200c39.7 0 72 32.3 72 72v56zm-432-32c44.1 0 80-35.9 80-80s-35.9-80-80-80-80 35.9-80 80 35.9 80 80 80zm0-112c17.7 0 32 14.4 32 32s-14.3 32-32 32-32-14.4-32-32 14.3-32 32-32zm-16-144h114.3l36.9 73.9c4.1 8.2 15.7 8.2 19.8 0l54.1-108.2 17.2 34.3H504c13.2 0 24-10.7 24-24s-10.8-24-24-24h-88L379.1 6.1C375-2 363.3-2 359.3 6.1l-54.1 108.2L288 80H144c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16z"
        clipRule="evenodd"
      />
    </svg>
  )
}