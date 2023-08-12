# Yuan-Public-Data

> The data should be public and free for everyone.

Almost financial historical data will not changed, so it's suitable to store them in a git repo. And we can use git to manage the data. But it is hard to find a place to get them. So, I create this repo to store the public data for Yuan.

Note that the data have **no guarantee of accuracy, completeness. Use at your own risk**. If you find any error, please open an issue. If you want to contribute, please open a pull request.

## Get the data from HTTP

We host the data on GitHub Pages, so you can access the data via the following url:

```bash
# get a file by path
GET https://y.ntnl.io/Yuan-Public-Data/{path}

# get the INDEX file to list all the files
GET https://y.ntnl.io/Yuan-Public-Data/index
```

According to [GitHub Pages Usage Limit](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#usage-limits), published GitHub Pages sites may be no larger than 1 GB. Each OHLC data file is about 64 bytes, so the total number of OHLC data is about 16 million. If we need more, we can use another repo. And we use a third-party CDN to accelerate the access, and avoid exceeding the GitHub bandwidth quota. So, be free to access these data.

## Data Model

### OHLC Data

the datastore adopts the same idea as LSM tree, as it deals with large amount of time series data. For human readable reason, the data is stored in csv format, and the data file is arranged in a folder structure.

For OHLC data, a data block is stored as a csv file:

```
/OHLC/{product_id}/{time_duration}/{time_from}-{time_to}.csv
```

The `product_id` is the product id of the instrument.

The `time_duration` is the duration of the OHLC data, which is defined in RFC3339. Usually, it is `PT1M`, `PT5M`, `PT15M`, `PT30M`, `PT1H`, `PT4H`, `P1D`.

The `time_from` and `time_to` are the time range of the data. The time is in `yyyyMMdd_HHmmss` format, and the timezone is UTC.

For example, the XAUUSD Daily OHLC data from 2021-01-01 00:00:00 to 2021-01-31 23:59:59

```
/OHLC/XAUUSD/P1D/20210101_000000-20210131_235959.csv
```

the columns of data are as follows:

```
time(RFC3339 time with timezone), open, high, low, close, volume
```
