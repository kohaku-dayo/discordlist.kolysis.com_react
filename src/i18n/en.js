function ENi18n() {
    return {
        translation: {
            headerUnion: {
                headerUnion: {
                    login: "Login"
                }
            },
            home: {
                home: {
                    skip: "skip",
                    next: "next",
                    back: "back",
                    last: "end",
                    searchBarTour: "Here you can search for the desired server.",
                    headerLoginTour: "If you would like to post the server you manage on discord, please log in here.",
                    popularTour: "Here, the tags used by the server are displayed in order of popularity.",
                    guildCardTour: "You can also see the tags used by the server here.",
                    guildCardDataTagTour: "Important server information is displayed here. You can see the 'Last updated date' and 'Current vc connection'.",
                    guildCardTitleTour1: "Click here to see more detailed information about the server.",
                    guildCardTitleTour2: "Let's press the highlight now!",
                    updatedDataString: "Last updated date：",
                    guildCardDisplayExplaination1: "Currently, displaying in order of recent updates.",
                    guildCardDisplayExplaination2: "If you want to display in order of users currently connecting to VC, please search or click on the tag."
                }
            },
            serverview: {
                serverView: {
                    serverDataMissing: "Server information is missing. Please enter the server information from the dashboard.",
                    failedToGetServerData: "Failed to obtain server information. Please try again."
                }
            },
            dashboard: {
                dashboard: {
                    dashboardTitle: "Dashboard"
                }
            },
            setting: {
                setting: {
                    settingTitle: "Setting"
                }
            },
            tagView: {
                tagView: {
                    currentVCConnectionNumber: "Current VC Connection",
                    tagNotFound1: "Information of '",
                    tagNotFound2: "' tag not found.",
                }
            },
            searchresult: {
                searchResult: {
                    currentVCConnectionNumber: "Current VC Connection",
                    searchInfoNotFount: " not found.",
                    searchHint: "Search tips:",
                    checkMisspelling: "・ Check if any keywords misspelled.",
                    checkOtherKeywords: "・ Try other keywords.",
                    checkMoreCommonKeywords: "・ Try more common keywords.",
                    reduceKeywordsNumber: "・ Try reduing the number of keywords."
                }
            },
            serveredit: {
                serverEdit: {
                    doNotIncludeSpaces: "Tags containing spaces cannot be selected.",
                    tooManyDescriptionLength1: "Server description limit is 5000 characters.Currently ",
                    tooManyDescriptionLength2: " characters.",
                    emptyDescription: "Server description not entered",
                    tooManyTag1: "The maximum number of tags is 7.Currently ",
                    tooManyTag2: ".",
                    emptyTag: "Please select at least one tag",
                    currentlyProcessing: "Currently processing. Please wait for a while.",
                    pending: "Saving datas...",
                    success: "Saving datas completed",
                    error: "Failed to save datas",
                    edit1: "Edit ・",
                    edit2: "・",
                    language: "Language",
                    jp: "Japanese",
                    us: "English",
                    ko: "Korean",
                    cn: "Chinese",
                    es: "Spanish",
                    fr: "French",
                    tag: "Tag",
                    pleaseEnterTag: "Please enter tags",
                    noOptionText: "No matching tags found",
                    serverDescription: "Server description",
                    makeServerPublic: "Publish the server",
                    saveModification: "Save changes",
                    tooManyWordsInTag: "Tag has too many characters. Please change it to within 100 characters and try again."
                }
            },
            viewServerBodyUnion: {
                viewServerBody: {
                    tagTitle: "Tag",
                    descriptionTitle: "Overview",
                    basicInfoTitle: "Basic Info",
                    dailyInfoTitle: "Daily Info",
                    weeklyInfoTitle: "Weekly Info",
                    monthlyInfoTitle: "Monthly Info",
                    vcConnectionGraphTitle: "VC connectivity graph",
                },
                basicInfo: {
                    latestUpdatedDate: "Last updated date",
                    failedToGetData: "Failed to get data",
                    vcConnectionNumber: "Current VC Connection"
                },
                vcLogInfo: {
                    activeUser: "Active User",
                    vcConnectionNumber: "TotalVC connection count",
                    avarageConnectionTime: "Average VC connection time",
                    maxConnectionTime: "Maximum VC connection time",
                }
            },
            vcLogChartTabs: {
                vcLogChartTabs: {
                    daily: "Daily",
                    weekly: "Weekly",
                    monthly: "Monthly",
                },
                vCLogInfo: {
                    activeUser: "Active User",
                    vcConnectionNumber: "Total VC connection count",
                    avarageConnectionTime: "Average VC connection time",
                    maxConnectionTime: "Maximum VC connection time",
                },
                vcLogChart: {
                    dailyDataNotFound: "No data exists for the last 24 hours",
                    weeklyDataNotFound: "No data exists for the last 7 days",
                    monthlyDataNotFound: "No data exists for the last month",
                    connectionNumber: "Number of connections"
                }
            },
            bigSection: {
                bigTitle: {
                    title: "Welcome to Discord List",
                    subtitle: "Search servers and find friends!"
                },
                recommendPanel: {
                    dailyRanking: "Daily ranking: ",
                    weeklyRanking: "Weekly ranking: ",
                    monthlyRanking: "Monthly ranking: ",
                    rankText: "",
                    clickToReadMore: "\n\n . . . Click to read more"
                }
            },
            sectionUnion: {
                tagListSection: {
                    title: "List of popular tags"
                },
                dashboardUserPanel: {
                    general: "Overview",
                    dashboard: "Dashboard",
                    setting: "Setting",
                    logout: "Logout"
                }
            },
            conversion: {
                guildCard: {
                    joinServer: "Join Server"
                }
            },
            viewServerHeaderUnion: {
                viewServerHeader: {
                    joinServer: "Join Server"
                }
            },
            button: {
                serverPanelButtons: {
                    view: "view",
                    edit: "edit",
                    addToDiscord: "Add to Discord List"
                }
            },
            DateCalc: {
                timeDiff: {
                    yearAgo: "year ago",
                    yearsAgo: "years ago",
                    monthAgo: "month ago",
                    dayAgo: "day ago",
                    daysAgo: "days ago",
                    hourAgo: "hour ago",
                    hoursAgo: "hours ago",
                    minuteAgo: "minute ago",
                    minutesAgo: "minutes ago",
                    secondAgo: "second ago",
                    secondsAgo: "seconds ago",
                }
            }
        }
    };
}

export default ENi18n();