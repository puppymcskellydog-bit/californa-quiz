import unittest


FLASHCARD_COUNT = 12
DEFAULT_COURSE_WIDTH = 720


def build_layout(index, width=0):
    clamped_index = max(0, min(index, FLASHCARD_COUNT - 1))
    progress = clamped_index / max(1, FLASHCARD_COUNT - 1)
    finish_width = 58
    finish_inset = 24
    effective_width = max(width or 0, DEFAULT_COURSE_WIDTH)
    finish_start_x = effective_width - finish_inset - finish_width
    finish_buffer = 54
    bar_width = max(20, 46 - clamped_index * 2)
    mount_width = 34
    max_bar_x = finish_start_x - finish_buffer - bar_width
    max_anchor_x = finish_start_x - finish_buffer - mount_width / 2
    first_swing_speed = 0.0105 + progress * 0.0045
    second_swing_speed = 0.011 + progress * 0.005
    third_swing_speed = 0.0115 + progress * 0.0055

    recipes = [
        {
            "bars": [{"x": 250, "y": 64, "h": 92}, {"x": 470, "y": 176, "h": 72}],
            "anchors": [],
        },
        {
            "bars": [{"x": 132, "y": 154, "h": 60}, {"x": 316, "y": 30, "h": 66}, {"x": 500, "y": 170, "h": 68}],
            "anchors": [{"x": 404, "len": 72, "amp": 20, "speed": first_swing_speed, "phase": 0.32}],
        },
        {
            "bars": [{"x": 154, "y": 88, "h": 72}, {"x": 310, "y": 194, "h": 70}, {"x": 480, "y": 34, "h": 74}],
            "anchors": [{"x": 404, "len": 80, "amp": 26, "speed": first_swing_speed, "phase": 0.45}],
        },
        {
            "bars": [{"x": 194, "y": 120, "h": 76}, {"x": 350, "y": 28, "h": 80}, {"x": 520, "y": 160, "h": 78}],
            "anchors": [
                {"x": 268, "len": 74, "amp": 22, "speed": second_swing_speed, "phase": 0.7},
                {"x": 470, "len": 82, "amp": 20, "speed": first_swing_speed, "phase": 0.34},
            ],
        },
        {
            "bars": [{"x": 144, "y": 194, "h": 82}, {"x": 364, "y": 82, "h": 84}, {"x": 530, "y": 28, "h": 82}],
            "anchors": [
                {"x": 232, "len": 76, "amp": 24, "speed": second_swing_speed, "phase": 0.82},
                {"x": 420, "len": 84, "amp": 22, "speed": first_swing_speed, "phase": 0.52},
            ],
        },
        {
            "bars": [{"x": 176, "y": 64, "h": 88}, {"x": 320, "y": 182, "h": 86}, {"x": 474, "y": 118, "h": 92}, {"x": 260, "y": 22, "h": 52}],
            "anchors": [
                {"x": 388, "len": 84, "amp": 26, "speed": second_swing_speed, "phase": 0.95},
                {"x": 564, "len": 74, "amp": 20, "speed": first_swing_speed, "phase": 0.41},
            ],
        },
        {
            "bars": [{"x": 146, "y": 112, "h": 94}, {"x": 332, "y": 30, "h": 90}, {"x": 548, "y": 170, "h": 92}, {"x": 262, "y": 204, "h": 50}],
            "anchors": [
                {"x": 248, "len": 78, "amp": 24, "speed": second_swing_speed, "phase": 1.02},
                {"x": 454, "len": 88, "amp": 24, "speed": first_swing_speed, "phase": 0.6},
            ],
        },
        {
            "bars": [{"x": 200, "y": 30, "h": 96}, {"x": 352, "y": 154, "h": 96}, {"x": 536, "y": 92, "h": 96}, {"x": 286, "y": 92, "h": 58}],
            "anchors": [
                {"x": 304, "len": 80, "amp": 26, "speed": second_swing_speed, "phase": 1.16},
                {"x": 574, "len": 86, "amp": 22, "speed": second_swing_speed, "phase": 0.74},
            ],
        },
        {
            "bars": [{"x": 154, "y": 76, "h": 102}, {"x": 332, "y": 194, "h": 98}, {"x": 496, "y": 24, "h": 100}, {"x": 404, "y": 118, "h": 62}],
            "anchors": [
                {"x": 238, "len": 82, "amp": 24, "speed": third_swing_speed, "phase": 0.86},
                {"x": 420, "len": 90, "amp": 24, "speed": second_swing_speed, "phase": 1.08},
                {"x": 578, "len": 76, "amp": 18, "speed": first_swing_speed, "phase": 0.62},
            ],
        },
        {
            "bars": [{"x": 188, "y": 186, "h": 106}, {"x": 340, "y": 58, "h": 104}, {"x": 514, "y": 134, "h": 102}, {"x": 270, "y": 14, "h": 60}, {"x": 438, "y": 20, "h": 56}],
            "anchors": [
                {"x": 286, "len": 84, "amp": 26, "speed": third_swing_speed, "phase": 1.22},
                {"x": 478, "len": 92, "amp": 24, "speed": second_swing_speed, "phase": 0.9},
                {"x": 596, "len": 80, "amp": 20, "speed": second_swing_speed, "phase": 0.68},
            ],
        },
        {
            "bars": [{"x": 150, "y": 128, "h": 108}, {"x": 302, "y": 20, "h": 108}, {"x": 468, "y": 184, "h": 108}, {"x": 390, "y": 92, "h": 64}, {"x": 556, "y": 52, "h": 68}],
            "anchors": [
                {"x": 222, "len": 88, "amp": 28, "speed": third_swing_speed, "phase": 1.28},
                {"x": 426, "len": 94, "amp": 24, "speed": second_swing_speed, "phase": 0.98},
                {"x": 572, "len": 86, "amp": 22, "speed": second_swing_speed, "phase": 0.74},
            ],
        },
        {
            "bars": [{"x": 184, "y": 46, "h": 112}, {"x": 324, "y": 192, "h": 112}, {"x": 470, "y": 116, "h": 110}, {"x": 262, "y": 138, "h": 62}, {"x": 548, "y": 18, "h": 74}],
            "anchors": [
                {"x": 246, "len": 92, "amp": 28, "speed": third_swing_speed, "phase": 1.34},
                {"x": 408, "len": 96, "amp": 26, "speed": third_swing_speed, "phase": 1.04},
                {"x": 590, "len": 88, "amp": 22, "speed": second_swing_speed, "phase": 0.8},
            ],
        },
    ]

    recipe = recipes[clamped_index]
    layout = {
        "bar_width": bar_width,
        "finish_start_x": finish_start_x,
        "lane_class": "lane-straight",
        "lane_inset": min(72, (clamped_index - 5) * 12 - (8 if clamped_index >= 8 else 0)) if clamped_index >= 6 else 0,
        "bars": [
            {
                "x": min(max_bar_x, bar["x"]),
                "y": bar["y"],
                "width": bar_width,
                "height": bar["h"] + clamped_index * 2,
            }
            for bar in recipe["bars"]
        ] if clamped_index >= 1 else [],
        "wrecking_balls": [
            {
                "anchorX": min(max_anchor_x, anchor["x"]),
                "length": anchor["len"] + clamped_index,
                "speed": anchor["speed"],
            }
            for anchor in recipe["anchors"]
        ] if clamped_index >= 4 else [],
    }
    return layout


def difficulty_score(layout):
    return (
        len(layout["bars"]) * 10
        + len(layout["wrecking_balls"]) * 15
        + sum(bar["height"] for bar in layout["bars"]) / 50
        + sum(ball["length"] for ball in layout["wrecking_balls"]) / 25
        + sum(ball["speed"] for ball in layout["wrecking_balls"]) * 1000
        + (24 - layout["bar_width"]) * 4
    )


def lane_bounds(width, height, lane_inset):
    return {
        "top": 12,
        "bottom": height - 8,
        "left": lane_inset,
        "right": width - lane_inset,
    }


class ObstacleLayoutTests(unittest.TestCase):
    def test_first_checkpoint_creates_visible_bars_with_zero_width_measurement(self):
        layout = build_layout(0, width=0)

        self.assertEqual(len(layout["bars"]), 0)

    def test_bars_start_at_checkpoint_two(self):
        layout = build_layout(1, width=720)

        self.assertGreaterEqual(len(layout["bars"]), 1)
        self.assertTrue(all(bar["x"] >= 0 for bar in layout["bars"]))
        self.assertTrue(all(bar["width"] >= 40 for bar in layout["bars"]))

    def test_wrecking_balls_start_at_checkpoint_five(self):
        self.assertEqual(len(build_layout(3, width=720)["wrecking_balls"]), 0)
        self.assertGreaterEqual(len(build_layout(4, width=720)["wrecking_balls"]), 1)

    def test_track_starts_narrowing_at_checkpoint_seven(self):
        self.assertEqual(build_layout(5, width=720)["lane_inset"], 0)
        self.assertGreater(build_layout(6, width=720)["lane_inset"], 0)

    def test_later_levels_have_narrower_track_bounds(self):
        early = lane_bounds(720, 220, build_layout(5, width=720)["lane_inset"])
        later = lane_bounds(720, 220, build_layout(9, width=720)["lane_inset"])

        self.assertGreater(later["left"], early["left"])
        self.assertLess(later["right"], early["right"])

    def test_no_bar_spawns_at_or_beyond_finish_line(self):
        for checkpoint in range(FLASHCARD_COUNT):
            layout = build_layout(checkpoint, width=720)
            for bar in layout["bars"]:
                self.assertLess(bar["x"] + bar["width"], layout["finish_start_x"])

    def test_no_mount_anchor_spawns_at_or_beyond_finish_line(self):
        for checkpoint in range(FLASHCARD_COUNT):
            layout = build_layout(checkpoint, width=720)
            for ball in layout["wrecking_balls"]:
                self.assertLess(ball["anchorX"], layout["finish_start_x"])

    def test_layouts_do_not_repeat(self):
        seen = set()

        for checkpoint in range(FLASHCARD_COUNT):
            layout = build_layout(checkpoint, width=720)
            signature = (
                tuple((bar["x"], bar["y"], bar["height"]) for bar in layout["bars"]),
                tuple((ball["anchorX"], ball["length"], round(ball["speed"], 6)) for ball in layout["wrecking_balls"]),
            )
            self.assertNotIn(signature, seen)
            seen.add(signature)

    def test_each_checkpoint_gets_harder_than_the_previous_one(self):
        scores = [difficulty_score(build_layout(checkpoint, width=720)) for checkpoint in range(FLASHCARD_COUNT)]

        for earlier, later in zip(scores, scores[1:]):
            self.assertGreater(later, earlier)


if __name__ == "__main__":
    unittest.main()
