# Yuan-Public-Data

The public data store of Yuan.

this repo serves as a public data store for Yuan. It stores market data such as Kline data, in csv format.

the datastore adopts the same idea as LSM tree, as it deals with large amount of time series data. For human readable reason, the data is stored in csv format, and the data file is arranged in a folder structure.

## Data Model

### folder structure:

For OHLC data, the folder structure is as follows:

```
/OHLC/{symbol}/{time_duration}/{yyyyMMdd_HHmmss}-{yyyyMMdd_HHmmss}.csv
```

the columns of data are as follows:

```
RFC3339-time, open, high, low, close, volume
```
