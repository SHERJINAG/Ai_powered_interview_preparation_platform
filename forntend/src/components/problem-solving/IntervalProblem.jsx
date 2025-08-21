import React from "react";

export default function IntervalProblems() {
  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-lg rounded-lg mt-8">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
        Interval Problems & Sweep Line Algorithm
      </h1>

      {/* Introduction to Interval Problems */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">What are Interval Problems?</h2>
        <p>
          Interval problems involve working with intervals, such as time intervals or ranges, and solving problems
          related to them. Common problems include merging overlapping intervals, finding the minimum number of meeting rooms,
          or determining the maximum number of events that overlap.
        </p>
        <p>
          These problems are often solved using algorithms that can efficiently handle sorting and comparisons. One of the
          most useful algorithms for interval problems is the **Sweep Line Algorithm**.
        </p>
      </section>

      {/* Problem 1: Merge Intervals */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Problem 1: Merge Intervals</h2>
        <p>
          Given a collection of intervals, merge all overlapping intervals. For example, if the input is:
          <code>[[1,3],[2,6],[8,10],[15,18]]</code>, the merged intervals would be:
          <code>[[1,6],[8,10],[15,18]]</code>.
        </p>

        <h3 className="text-xl font-medium">Java Code Example:</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`import java.util.*;

public class MergeIntervals {
    public static int[][] merge(int[][] intervals) {
        // Sort intervals based on the start times
        Arrays.sort(intervals, (a, b) -> a[0] - b[0]);

        List<int[]> merged = new ArrayList<>();
        for (int[] interval : intervals) {
            // If the list is empty or there's no overlap, add the interval
            if (merged.isEmpty() || merged.get(merged.size() - 1)[1] < interval[0]) {
                merged.add(interval);
            } else {
                // Merge the overlapping intervals
                merged.get(merged.size() - 1)[1] = Math.max(merged.get(merged.size() - 1)[1], interval[1]);
            }
        }

        // Convert the list to a 2D array
        return merged.toArray(new int[merged.size()][]);
    }

    public static void main(String[] args) {
        int[][] intervals = {{1, 3}, {2, 6}, {8, 10}, {15, 18}};
        int[][] result = merge(intervals);

        for (int[] interval : result) {
            System.out.println(Arrays.toString(interval));
        }
    }
}`}
        </pre>

        <h3 className="text-xl font-medium">Python Code Example:</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`def merge_intervals(intervals):
    # Sort intervals by start time
    intervals.sort(key=lambda x: x[0])

    merged = []
    for interval in intervals:
        # If merged is empty or no overlap, add the interval
        if not merged or merged[-1][1] < interval[0]:
            merged.append(interval)
        else:
            # Merge the overlapping intervals
            merged[-1][1] = max(merged[-1][1], interval[1])

    return merged

# Test case
intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
result = merge_intervals(intervals)
for interval in result:
    print(interval)`}
        </pre>
      </section>

      {/* Problem 2: Meeting Rooms */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Problem 2: Meeting Rooms</h2>
        <p>
          Given a list of meeting time intervals, determine if a person could attend all meetings. For example, given the intervals
          <code>[[0, 30], [5, 10], [15, 20]]</code>, the answer would be false because the first meeting overlaps with the second one.
        </p>

        <h3 className="text-xl font-medium">Java Code Example:</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`import java.util.*;

public class MeetingRooms {
    public static boolean canAttendMeetings(int[][] intervals) {
        // Sort intervals based on the start times
        Arrays.sort(intervals, (a, b) -> a[0] - b[0]);

        for (int i = 1; i < intervals.length; i++) {
            // If there is an overlap, return false
            if (intervals[i][0] < intervals[i - 1][1]) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        int[][] intervals = {{0, 30}, {5, 10}, {15, 20}};
        System.out.println(canAttendMeetings(intervals));  // Output: false
    }
}`}
        </pre>

        <h3 className="text-xl font-medium">Python Code Example:</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`def can_attend_meetings(intervals):
    # Sort intervals by start time
    intervals.sort(key=lambda x: x[0])

    for i in range(1, len(intervals)):
        # If there is an overlap, return False
        if intervals[i][0] < intervals[i - 1][1]:
            return False

    return True

# Test case
intervals = [[0, 30], [5, 10], [15, 20]]
print(can_attend_meetings(intervals))  # Output: False`}
        </pre>
      </section>

      {/* Sweep Line Algorithm */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700">Sweep Line Algorithm</h2>
        <p>
          The Sweep Line Algorithm is often used for solving problems involving intervals or ranges. It involves
          iterating over events in sorted order, while maintaining a set of active intervals or events as the sweep line
          progresses. It is particularly useful for problems like the "Meeting Rooms" or "Interval Covering" problems.
        </p>
        <p>
          A key idea behind this algorithm is to treat each interval as two events: the start and the end. Then, we process
          these events in increasing order of their positions, adjusting the state of the system as we encounter each event.
        </p>

        <h3 className="text-xl font-medium">Java Code Example (Using Sweep Line for Meeting Rooms):</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`import java.util.*;

public class MeetingRoomsSweepLine {
    public static boolean canAttendMeetings(int[][] intervals) {
        List<int[]> events = new ArrayList<>();
        
        // Add start and end events
        for (int[] interval : intervals) {
            events.add(new int[]{interval[0], 1});  // 1 for start
            events.add(new int[]{interval[1], -1}); // -1 for end
        }

        // Sort events, prioritize start events before end events
        events.sort((a, b) -> a[0] == b[0] ? a[1] : a[0] - b[0]);

        int activeMeetings = 0;
        for (int[] event : events) {
            activeMeetings += event[1];
            if (activeMeetings > 1) {
                return false;  // Overlap detected
            }
        }

        return true;
    }

    public static void main(String[] args) {
        int[][] intervals = {{0, 30}, {5, 10}, {15, 20}};
        System.out.println(canAttendMeetings(intervals));  // Output: false
    }
}`}
        </pre>

        <h3 className="text-xl font-medium">Python Code Example (Using Sweep Line for Meeting Rooms):</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`def can_attend_meetings_sweep_line(intervals):
    events = []
    
    # Add start and end events
    for interval in intervals:
        events.append((interval[0], 1))  # 1 for start
        events.append((interval[1], -1)) # -1 for end
    
    # Sort events by time; if times are the same, process end events first
    events.sort(key=lambda x: (x[0], x[1]))

    active_meetings = 0
    for event in events:
        active_meetings += event[1]
        if active_meetings > 1:
            return False  # Overlap detected

    return True

# Test case
intervals = [[0, 30], [5, 10], [15, 20]]
print(can_attend_meetings_sweep_line(intervals))  # Output: False`}
        </pre>
      </section>
    </div>
  );
}
