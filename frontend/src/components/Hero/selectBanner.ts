type BannerPair<T> = readonly [T, T];

export function selectBanner<T>(
  hour: number,
  randomValue: number,
  daytimeBanners: BannerPair<T>,
  nighttimeBanners: BannerPair<T>,
): T {
  const banners =
    hour >= 5 && hour < 17 ? daytimeBanners : nighttimeBanners;

  return banners[randomValue < 0.5 ? 0 : 1];
}
