export const convertToDirectDownload = (driveUrl: string): string => {
  const match = driveUrl.match(/\/d\/([a-zA-Z0-9_-]+)/)
  if (!match) return driveUrl

  const fileId = match[1]
  return `https://drive.google.com/uc?export=download&id=${fileId}`
}