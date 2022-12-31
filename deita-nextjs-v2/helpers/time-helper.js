export const parseRelativeTimeString = dateString => {
    const date = new Date(dateString)
    const dateDiff = new Date() - date;

    const mins = Math.trunc(dateDiff / (1000 * 60))
    const hours = Math.trunc(dateDiff / (1000 * 60 * 60))
    const days = Math.trunc(dateDiff / (1000 * 60 * 60 * 24))

    let relativeTime = "";

    if (days > 0) relativeTime = days + " dienas"
    else if (hours > 0) relativeTime = hours + " val"
    else relativeTime = mins + " min"

    return relativeTime;
}

export const parseTimeUntilString = dateString => {
    const date = new Date(dateString)
    const dateDiff = date - new Date();

    const mins = Math.trunc(dateDiff / (1000 * 60))
    const hours = Math.trunc(dateDiff / (1000 * 60 * 60))
    const days = Math.trunc(dateDiff / (1000 * 60 * 60 * 24))

    let relativeTime = "";

    if (days > 0) relativeTime = days + " d."
    else if (hours > 0) relativeTime = hours + " val."
    else relativeTime = mins + " min."

    return relativeTime;
}