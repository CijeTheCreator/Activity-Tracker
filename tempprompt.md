I have an array like this
export type PenpotDataProcessed = {
timespent: number;
start: number;
end: number;
project: string;
page: string;
change: string;
collaborators: string[];
};

start is the starting timestamp
end is the ending timestamp
timespent is start - end

timespent is usually small.

I need you to write a function that segments this data into sub arrays depending on what is needed.
The function should be able to segment it into years, months and years.

For months, it should have years like:
january, feburary, ..., december: The new array structure should be like this
[[january], [feburary], [december]]
[january], [feburary], [december] represent the elements where the start timestamp was in january, feburary, ..., december

For years, it should have years like:
2024, 2023, 2021: The new array structure should be like this
[[2024], [2023], [2022]]represent the elements where the start timestamp was in 2024, 2023, and 2022 respectively
