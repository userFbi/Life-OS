import React from "react";
import {
    Box,
    Grid,
    Paper,
    Typography,
    Stack,
    Avatar,
    useTheme,
} from "@mui/material";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import FlagIcon from "@mui/icons-material/Flag";

const StatCard = ({ icon, label, value, subtext, rightSubtext }) => {
    const theme = useTheme();

    return (
        <Paper
            elevation={0}
            sx={{
                bgcolor: "#0d1221",
                borderRadius: 3,
                px: 3,
                py: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid rgba(255,255,255,0.08)",
            }}
        >
            <Stack spacing={1} width={200}>
                <Typography color="grey.400" fontSize={14}>
                    {label}
                </Typography>

                <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography fontSize={28} fontWeight={700} color="#fff">
                        {value}
                    </Typography>

                    {rightSubtext && (
                        <Typography fontSize={14} color="grey.400">
                            {rightSubtext}
                        </Typography>
                    )}
                </Stack>

                {subtext && (
                    <Typography fontSize={13} color="grey.500">
                        {subtext}
                    </Typography>
                )}
            </Stack>

            <Avatar
                sx={{
                    bgcolor: "rgba(255,255,255,0.08)",
                    width: 44,
                    height: 44,
                }}
            >
                {icon}
            </Avatar>
        </Paper>
    );
};

export default function StatsCards() {
    return (
        <Box sx={{ p: 2, minHeight: "100vh" }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <StatCard
                        label="Tasks"
                        value="0/1"
                        subtext="completed"
                        icon={<CheckCircleOutlineIcon />}
                    />
                </Grid>

                <Grid item xs={12}>
                    <StatCard
                        label="Habits Today"
                        value="0/1"
                        subtext="🔥 1 day streak"
                        icon={<TrackChangesIcon />}
                    />
                </Grid>

                <Grid item xs={12}>
                    <StatCard
                        label="Balance"
                        value="$0"
                        subtext="this month"
                        icon={<AccountBalanceWalletIcon />}
                    />
                </Grid>

                <Grid item xs={12}>
                    <StatCard
                        label="Goals"
                        value="100%"
                        subtext="1 of 1 completed"
                        icon={<FlagIcon />}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
