library(tidyverse)
library(readr)

df <- read_csv("./cinebench-results.csv")
df <- mutate(df,
             points_per_watt = cinebench / ppt)

order <- c("stock", "eco", "65w", "65w -5", "65w -10", "65w -15", "65w -20")
colors <- c("#7EB26D", "#EAB839", "#81AABE", "#D67854", "#CC5058", "#2F73BE", "#BA43A9")
ggplot(df, aes(x = factor(config, level = order), points_per_watt, fill=factor(config, level = order))) +
  stat_summary(fun = mean, geom="bar") +
  scale_fill_manual(values = colors) +
  labs(title = "Efficiency of the Ryzen 5900x at Varying Power Envelopes and Curve Optimizer Offsets",
       caption = "65w is the PPT. Eco and stock have 87w and 142w PPT respectively",
       y = "Cinebench Multi Core Points Per Watt",
       x = "Config") +
  guides(fill=FALSE)
ggsave('cinebench-power-efficiency.png', width = 8, height = 5, dpi = 100)