import { addIcon } from '@iconify/svelte/offline';

addIcon('custom:svelte-logo', {
  body: `
    <path
      fill="currentColor"
      fill-opacity=".5"
      d="m20.712 3.1755c-2.2286-3.1897-6.63-4.1351-9.8124-2.1075l-5.5891 3.5622a6.4122 6.4122 0 0 0-2.8968 4.2949 6.7529 6.7529 0 0 0 0.66591 4.3354 6.4299 6.4299 0 0 0-0.95919 2.3963 6.8333 6.8333 0 0 0 1.1673 5.1676c2.229 3.19 6.6305 4.135 9.8124 2.1075l5.5892-3.5622a6.4109 6.4109 0 0 0 2.8968-4.2949 6.7556 6.7556 0 0 0-0.66542-4.3355 6.4286 6.4286 0 0 0 0.95878-2.3962 6.8314 6.8314 0 0 0-1.1673-5.1676"/>
    <path
      fill="#fff"
      d="m10.354 21.125a4.4396 4.4396 0 0 1-4.7651-1.7663 4.1087 4.1087 0 0 1-0.70213-3.1077 3.8976 3.8976 0 0 1 0.13356-0.52194l0.10526-0.32096 0.28635 0.21032a7.2095 7.2095 0 0 0 2.1864 1.0924l0.20773 0.06302-0.01914 0.20732a1.253 1.253 0 0 0 0.22543 0.83102 1.3369 1.3369 0 0 0 1.4347 0.5325 1.2311 1.2311 0 0 0 0.34331-0.15088l5.5893-3.5618a1.1637 1.1637 0 0 0 0.52513-0.77807 1.2417 1.2417 0 0 0-0.21161-0.93669 1.3379 1.3379 0 0 0-1.4352-0.5328 1.2306 1.2306 0 0 0-0.34286 0.15077l-2.1328 1.3596a4.0785 4.0785 0 0 1-1.135 0.49841 4.4396 4.4396 0 0 1-4.765-1.7663 4.1084 4.1084 0 0 1-0.70213-3.1077 3.8547 3.8547 0 0 1 1.7421-2.5824l5.5888-3.5621a4.0722 4.0722 0 0 1 1.1357-0.49901 4.4396 4.4396 0 0 1 4.765 1.7663 4.1087 4.1087 0 0 1 0.70213 3.1077 3.9429 3.9429 0 0 1-0.13356 0.52194l-0.10526 0.32096-0.2862-0.21a7.2038 7.2038 0 0 0-2.1865-1.0929l-0.20773-0.06304 0.01914-0.20732a1.2555 1.2555 0 0 0-0.22543-0.831 1.3369 1.3369 0 0 0-1.4347-0.5325 1.2311 1.2311 0 0 0-0.34331 0.15088l-5.5893 3.562a1.1618 1.1618 0 0 0-0.52472 0.77786 1.2399 1.2399 0 0 0 0.2112 0.93679 1.3379 1.3379 0 0 0 1.4352 0.5328 1.2354 1.2354 0 0 0 0.34329-0.15088l2.1326-1.3591a4.0667 4.0667 0 0 1 1.1348-0.49881 4.4396 4.4396 0 0 1 4.765 1.7663 4.1084 4.1084 0 0 1 0.70213 3.1077 3.8567 3.8567 0 0 1-1.7421 2.5828l-5.5888 3.5618a4.0722 4.0722 0 0 1-1.1357 0.49901"/>
    `
    .trim()
    .replace(/\s{2,}/g, ' ')
    .replace(/\n/g, ''),
  width: 24,
  height: 24
});
